import { api } from '@/lib/services/api';
import { User } from '@/lib/models';
import { toast } from 'sonner';

const route = 'auth';

type Response = {
  token: string;
  user: User;
};

export const onLogin = async (login: string, password: string) => {
  const response = await api.post<Response>(`${route}/login`, { login, password });

  if (!response || !response.data) {
    toast.error(response.message);
    return response;
  }

  await api.addAccessTokenToHeader(response.data.token);

  return response;
};

export const onRegister = async (login: string, password: string, confirmPassword: string) => {
  const response = await api.post<Response>(`${route}/registration`, { login, password, confirmPassword });

  if (!response || !response.data) {
    toast.error(response.message);
    return response;
  }

  await api.addAccessTokenToHeader(response.data.token);

  return response;
};

export const onLogout = async () => {
  await api.removeAccessTokenFromHeader();
};
