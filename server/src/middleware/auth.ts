import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'southampton-spark-admin-secret-2024';

export interface AuthRequest extends Request {
  user?: {
    id: number;
    username: string;
  };
}

export const generateToken = (user: { id: number; username: string }): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
};

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    res.status(401).json({ error: 'Access token required' });
    return;
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid or expired token' });
      return;
    }
    req.user = user as { id: number; username: string };
    next();
  });
};