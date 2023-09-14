import { Request, Response } from 'express';
import userService from '../service/user.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const response = await userService.login(username, password);
  if (response.status === 'UNAUTHORIZED') {
    return res.status(401).json(response.data);
  }
  return res.status(200).json(response.data);
}

export default {
  login,
};