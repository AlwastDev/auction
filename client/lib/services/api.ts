import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'sonner';

const axiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleError = (error: AxiosError) => {
  toast.error('API ERROR');
  return Promise.reject({
    response: error.response,
    message: 'API Error',
    request: error.request,
    config: error.config,
  });
};

const api = {
  addAccessTokenToHeader: (accessToken: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },
  removeAccessTokenFromHeader: () => {
    delete axiosInstance.defaults.headers.common['Authorization'];
  },
  get: async <T>(url: string, config: AxiosRequestConfig<unknown> = {}): Promise<AxiosResponse<T>> => {
    try {
      return await axiosInstance.get<T>(url, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  post: async (url: string, data?: object, config: AxiosRequestConfig<unknown> = {}) => {
    try {
      return await axiosInstance.post(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  put: async (url: string, data: object, config: AxiosRequestConfig<unknown> = {}) => {
    try {
      return await axiosInstance.put(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  patch: async (url: string, data: object, config: AxiosRequestConfig<unknown> = {}) => {
    try {
      return await axiosInstance.patch(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  remove: async (url: string, config: AxiosRequestConfig<unknown> = {}) => {
    try {
      return await axiosInstance.delete(url, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
};

export { api };
