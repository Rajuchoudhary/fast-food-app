import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/bad-request-error.js';
import NotAuthorizedError from '../errors/not-authorized-error.js';
import User from '../models/UserModel.js';

const RequireAuth = async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  ) {
    throw new NotAuthorizedError();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.AUTH_SECRET);
    req.currentUser = await User.findById({ _id: payload.id });
  } catch (err) {
    throw new BadRequestError('Token not valid');
  }

  next();
};

export default RequireAuth;
