import express from 'express';
import pkg from 'express-validator';
import {
  AdminSignIn,
  ForgotPassword,
  ResetPassword,
  SignIn,
  SignUp,
} from '../controllers/authController.js';
import ValidateRequest from '../middlewares/validate-request.js';
const { body } = pkg;

const router = express.Router();

//Admin Signin
router
  .route('/admin/signin')
  .post(
    [
      body('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Email must be valid'),
      body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password'),
    ],
    ValidateRequest,
    AdminSignIn
  );

//signup new user
router.route('/signup').post(
  [
    body('name')
      .trim()
      .isLength({ min: 3, max: 15 })
      .withMessage('Name Min: 3, Max: 20 characters'),
    body('email').normalizeEmail().isEmail().withMessage('Email must be valid'),
    body('mobileNo')
      .trim()
      .isInt()
      .isLength({ min: 10, max: 10 })
      .withMessage('Mobile number should be atleast 10 digit'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password Min: 4, Max: 20 characters'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password should match password');
      }
      return true;
    }),
  ],
  ValidateRequest,
  SignUp
);

//Signin User
router
  .route('/signin')
  .post(
    [
      body('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Email must be valid'),
      body('password')
        .trim()
        .notEmpty()
        .withMessage('You must supply a password'),
    ],
    ValidateRequest,
    SignIn
  );

//Forgot Password
router
  .route('/forgotpassword')
  .post(
    [body('email').isEmail().withMessage('Email must be valid')],
    ValidateRequest,
    ForgotPassword
  );

//Reset Password
router.route('/resetpassword').post(
  [
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password Min: 4, Max: 20 characters'),
    body('confirmPassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password should match password');
      }
      return true;
    }),
  ],
  ValidateRequest,
  ResetPassword
);

export default router;
