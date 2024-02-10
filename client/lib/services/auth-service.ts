import { api } from '@/lib/services/api';
import { User } from '@/lib/models';

const route = 'auth';

type Response = {
  token: string;
  user: User;
};

export const onLogin = async (login: string, password: string) => {
  const {
    data: { data: response },
  } = await api.post<Response>(`${route}/login`, { login, password });

  if (!response) {
    throw new Error('Auth error');
  }

  api.addAccessTokenToHeader(response.token);

  return response.user;
};

export const onRegister = async (login: string, password: string, confirmPassword: string) => {
  const {
    data: { data: response },
  } = await api.post<Response>(`${route}/registration`, { login, password, confirmPassword });

  if (!response) {
    throw new Error('Auth error');
  }

  api.addAccessTokenToHeader(response.token);

  return response.user;
};

export const onLogout = async () => {
  api.removeAccessTokenFromHeader();
};
