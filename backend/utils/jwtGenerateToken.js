import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  const tkn = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  return tkn;
};

export default generateToken;
