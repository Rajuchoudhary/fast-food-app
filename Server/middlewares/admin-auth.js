import NotAuthorizedError from '../errors/not-authorized-error.js';

const RequireAdminAuth = (req, res, next) => {
  if (!req.currentUser.isAdmin) {
    throw new NotAuthorizedError();
  }

  next();
};

export default RequireAdminAuth;
