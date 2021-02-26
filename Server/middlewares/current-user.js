import jwt from 'jsonwebtoken';

const CurrentUser = (req, res, next) => {
  if (!req.currentUser) {
    return next();
  }

  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  ) {
    return next();
  }
  try {
    token = req.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.AUTH_SECRET);
    req.currentUser = payload;
  } catch (err) {
    throw new BadRequestError('Token not valid');
  }

  next();
};

export default CurrentUser;
