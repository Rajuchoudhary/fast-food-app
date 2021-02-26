import crypto from 'crypto';
import BadRequestError from '../errors/bad-request-error.js';
import User from '../models/UserModel.js';
import GenerateToken from '../services/GenerateToken.js';
import { sendEmailWithNodeMailer } from '../services/NodeMailer.js';
import Password from '../services/password.js';

//Admin signIn
export const AdminSignIn = async (req, res) => {
  let { email, password } = req.body;

  let existingUser = await User.findOne({ email });

  if (!existingUser.isAdmin) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );

  if (!passwordsMatch) {
    throw new BadRequestError('Invalid credentials');
  }

  //Generate JWT
  const userJwt = GenerateToken(existingUser.id);

  const userDetail = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    image: existingUser.image,
    mobileNo: existingUser.mobileNo,
    isAdmin: existingUser.isAdmin,
    token: userJwt,
  };

  res.status(200).send({ message: 'Login Successfull!', userDetail });
};

// New User signUp
export const SignUp = async (req, res) => {
  let { name, email, password, mobileNo } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email already in use');
  }

  //Registered new User
  const newUser = new User({ name, email, password, mobileNo });
  await newUser.save();

  //Generate JWT
  const userJwt = GenerateToken(newUser.id);

  const userDetail = {
    id: newUser.id,
    name: newUser.name,
    mobileNo: newUser.mobileNo,
    email: newUser.email,
    image: newUser.image,
    isAdmin: newUser.isAdmin,
    token: userJwt,
  };

  res.status(201).send({ message: 'Successfully Registered!', userDetail });
};

//User signIn
export const SignIn = async (req, res) => {
  let { email, password } = req.body;

  let existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError('Invalid credentials');
  }

  if (existingUser.isAdmin) {
    throw new BadRequestError('Invalid credentials');
  }

  const passwordsMatch = await Password.compare(
    existingUser.password,
    password
  );

  if (!passwordsMatch) {
    throw new BadRequestError('Invalid credentials');
  }

  //Generate JWT
  const userJwt = GenerateToken(existingUser.id);

  const userDetail = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
    image: existingUser.image,
    mobileNo: existingUser.mobileNo,
    isAdmin: existingUser.isAdmin,
    token: userJwt,
  };

  res.status(200).send({ message: 'Login Successfull!', userDetail });
};

//Forgot Password
export const ForgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    throw new BadRequestError('Could not find user with email.');
  }

  //Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  //Create URL
  const resetUrl = `${req.protocol}://${req.get('host')}/reset/${resetToken}`;

  const message = `use this url to reset password URL: ${resetUrl}`;

  try {
    await sendEmailWithNodeMailer({
      email: user.email,
      subject: 'Reset Password',
      message,
    });
    res.status(200).send({
      success: true,
      message: 'Email has been sent to your email address',
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    throw new BadRequestError('Email could not be sent');
  }
};

//Reset Password
export const ResetPassword = async (req, res) => {
  const { password, resetToken } = req.body;

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new BadRequestError('Invalid Token');
  }

  // Reset New Password
  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  user.save();

  res
    .status(200)
    .send({ success: true, message: 'Password Reset Successfully' });
};
