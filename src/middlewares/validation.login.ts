import { Request, Response, NextFunction } from 'express';

function loginValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }

  next();
}

export default loginValidationMiddleware;