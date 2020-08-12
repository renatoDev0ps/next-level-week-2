import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../utils/auth';

import db from '../database/connection';

export default class SessionController {
  async create(req: Request, res: Response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.'})
    }

    const { email: checkEmail, password: checkPassword } = req.body;

    try {
      const response = await db('users')
        .where('users.email', checkEmail)
        .select('users.*')

      const compareHashedPassword = await compare(
        checkPassword,
        response[0].password
      );
      const { id, name, surname, email, password } = response[0];

      if (compareHashedPassword) {
        const token = jwt.sign(
          { id },
          authConfig.secret,
          { expiresIn: authConfig.expiresIn },
        );
        return res.status(202).json({
          user: {
            id,
            name,
            surname,
            email,
            password,
          },
          token,
        });
      }
    } catch (err) {
      return res.status(400).json({ err: 'Invalid login.' });
    }
  }
}
