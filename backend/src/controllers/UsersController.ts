import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import * as Yup from 'yup';


import db from '../database/connection';

export default class UsersController {
  async create(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      surname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.'});
    }

    const {
      name,
      surname,
      email,
      password
    } = req.body;

    const passwordHashed = await hash(password, 8);

    try {
      await db('users').insert({
        name,
        surname,
        email,
        password: passwordHashed
      });

      return res.status(201).send();
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error.'});
    }
  }
}
