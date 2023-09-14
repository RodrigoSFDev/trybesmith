import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../database/models/user.model';
import { ServiceRresponse as ServiceResponse } from '../types/ServiceRes';

export type LoginResponse = ServiceResponse<{ token: string }>;
export const unauthorizedResponse: LoginResponse = {
  status: 'UNAUTHORIZED',
  data: { message: 'Username or password invalid' },
};

const JWT_SECRET = 'your-secret-key'; // Substitua pelo seu segredo JWT

async function login(username: string, password: string): Promise<LoginResponse> {
  // Procure um usuário com o nome de usuário fornecido
  const user = await UserModel.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    return unauthorizedResponse; // Usuário não encontrado
  }
  // Verifique se a senha corresponde à senha no banco de dados
  const passwordMatch = await bcrypt.compare(password, user.dataValues.password);
  if (!passwordMatch) {
    return unauthorizedResponse; // Senha incorreta
  }
  // Gere um token JWT com o ID e nome de usuário do usuário
  const token = jwt.sign({ 
    id: user.dataValues.id, username: user.dataValues.username }, JWT_SECRET);

  return { status: 'SUCCESSFUL', data: { token } };
}
  
export default {
  login,
  
};