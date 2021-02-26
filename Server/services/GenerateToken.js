import jwt from 'jsonwebtoken';

const GenerateToken = (id) => {
  return jwt.sign({ id }, process.env.AUTH_SECRET, {
    expiresIn: '30d',
  });
};

export default GenerateToken;
