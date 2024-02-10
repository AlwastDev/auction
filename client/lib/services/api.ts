import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'sonner';
import { deleteCookie, getCookie, setCookie } from '@/actions/cookies';

type ResponseData<T> = {
  message: string;
  data?: T;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
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
  isExistAccessToken: async () => {
    return !!(await getCookie('accessToken'));
  },
  addAccessTokenToHeader: async (accessToken: string) => {
    await setCookie('accessToken', accessToken, { expires: 7 });
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  },
  removeAccessTokenFromHeader: async () => {
    await deleteCookie('accessToken');
    delete axiosInstance.defaults.headers.common['Authorization'];
  },
  get: async <T = null>(
    url: string,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.get<ResponseData<T>>(url, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  post: async <T = null>(
    url: string,
    data?: object,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.post<ResponseData<T>>(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  put: async <T = null>(
    url: string,
    data: object,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.put<ResponseData<T>>(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  patch: async <T = null>(
    url: string,
    data: object,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.patch<ResponseData<T>>(url, data, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
  delete: async <T = null>(
    url: string,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.delete<ResponseData<T>>(url, config);
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
};

export { api };
