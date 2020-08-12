import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../utils/auth';

interface ITokenPlayload {
  iat: number;
  exp: number;
  id: number;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token not provided.' );
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.secret);

    const { id } = decoded as ITokenPlayload;

    request.userId = { id };

    return next();
  } catch (err) {
    throw new Error('Invalid token.');
  }
};
