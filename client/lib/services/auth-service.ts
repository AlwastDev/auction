import { api } from '@/lib/services/api';
import { User } from '@/lib/models';

const route = 'auth';

type Response = {
  token: string;
  user: User;
};

export const login = async (login: string, password: string) => {
  const { data } = await api.post(`${route}/login`, { login, password });

  const response = data as Response;

  if (!response || !response.token) {
    throw new Error('Auth error');
  }

  api.addAccessTokenToHeader(response.token);

  return response.user;
};

export const register = async (login: string, password: string, confirmPassword: string) => {
  const { data } = await api.post(`${route}/register`, { login, password, confirmPassword });

  const response = data as Response;

  if (!response || !response.token) {
    throw new Error('Auth error');
  }

  api.addAccessTokenToHeader(response.token);

  return response.user;
};

export const logout = async () => {
  api.removeAccessTokenFromHeader();
};
