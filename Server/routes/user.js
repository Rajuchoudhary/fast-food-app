import express from 'express';
import pkg from 'express-validator';
import {
  CancelOrder,
  GetAllUserOrder,
  GetUserOrderWithId,
  PayForOrder,
  PlaceOrder,
  ProfileImage,
  UpdateDetails,
  UpdateOrder,
  UserAddReview,
} from '../controllers/userController.js';
import RequireAuth from '../middlewares/require-auth.js';
import ValidateRequest from '../middlewares/validate-request.js';
const { body } = pkg;

const router = express.Router();

//User Upload Image
router.route('/upload-image').post(RequireAuth, ProfileImage);

//Update User Detail
router
  .route('/update')
  .post(
    RequireAuth,
    [
      body('name')
        .trim()
        .notEmpty()
        .optional({ checkFalsy: true })
        .withMessage('Please enter your name'),
      body('email')
        .normalizeEmail()
        .isEmail()
        .optional({ checkFalsy: true })
        .withMessage('Email must be valid'),
      body('mobileNo')
        .trim()
        .isLength({ min: 10, max: 10 })
        .withMessage('Mobile number should be atleast 10 digit'),
    ],
    ValidateRequest,
    UpdateDetails
  );

//Get All Orders
router.route('/orders/:currentPage').get(RequireAuth, GetAllUserOrder);

//Get Order Detail With Id
router.route('/order/:orderId').get(RequireAuth, GetUserOrderWithId);

//Add item Review
router
  .route('/order/review')
  .post(
    RequireAuth,
    [
      body('rating').trim().notEmpty().withMessage('Please add rating'),
      body('comment')
        .trim()
        .isLength({ min: 10, max: 100 })
        .withMessage('comment: min:10, max:100 characters'),
    ],
    ValidateRequest,
    UserAddReview
  );

//Place Order
router
  .route('/order/place')
  .post(
    RequireAuth,
    [
      body('items')
        .isArray({ min: 1 })
        .withMessage('Empty items are not valid'),
      body('paymentMethod')
        .trim()
        .isIn(['cod', 'stripe', 'paypal'])
        .withMessage('payment method not valid'),
      body('subTotal').trim().notEmpty().withMessage('Invalid Subtotal'),
      body('city').trim().notEmpty().withMessage('city is required'),
      body('state').trim().notEmpty().withMessage('state is required'),
      body('postalCode')
        .trim()
        .notEmpty()
        .withMessage('postalCode is required'),
      body('country').trim().notEmpty().withMessage('country is required'),
      body('address').trim().notEmpty().withMessage('address is required'),
      body('mobileNo')
        .trim()
        .isLength({ min: 10, max: 10 })
        .withMessage('Mobile number should be atleast 10 digit'),
    ],
    ValidateRequest,
    PlaceOrder
  );

//Update Order
router
  .route('/order/:orderId')
  .post(
    RequireAuth,
    [
      body('items')
        .isArray({ min: 1 })
        .withMessage('Empty items are not valid'),
      body('paymentMethod')
        .trim()
        .isIn(['cod', 'stripe', 'paypal'])
        .withMessage('payment method not valid'),
      body('subTotal').trim().notEmpty().withMessage('Invalid Subtotal'),
      body('city').trim().notEmpty().withMessage('city is required'),
      body('state').trim().notEmpty().withMessage('state is required'),
      body('postalCode')
        .trim()
        .notEmpty()
        .withMessage('postalCode is required'),
      body('country').trim().notEmpty().withMessage('country is required'),
      body('address').trim().notEmpty().withMessage('address is required'),
      body('mobileNo')
        .trim()
        .isLength({ min: 10, max: 10 })
        .withMessage('Mobile number should be atleast 10 digit'),
    ],
    ValidateRequest,
    UpdateOrder
  );

//Cancel Order
router.route('/order/:orderId').delete(RequireAuth, CancelOrder);

//Pay Order
router
  .route('/order/pay-order')
  .put(
    RequireAuth,
    [
      body('orderId').trim().notEmpty().withMessage('Order ID is required'),
      body('paymentMethod')
        .trim()
        .isIn(['cod', 'stripe', 'paypal'])
        .withMessage('payment method not valid'),
      body('transactionId')
        .trim()
        .notEmpty()
        .withMessage('Transaction ID is required'),
    ],
    ValidateRequest,
    PayForOrder
  );

export default router;
