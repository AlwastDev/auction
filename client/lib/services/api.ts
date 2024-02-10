import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { deleteCookie, getCookie, setCookie } from '@/actions/cookies';
import { redirect } from 'next/navigation';

type ResponseData<T> = {
  message: string;
  data?: T;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await getCookie('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const handleError = async (error: AxiosError) => {
  if (error.response?.status === 401) {
    await api.removeAccessTokenFromHeader();
    redirect('/sign-in');
  }

  return Promise.reject({
    status: error.response?.status,
    message: error.message,
    headers: error.config?.headers,
    data: error.config?.data,
    url: error.request.res.responseUrl,
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
      return await handleError(error as AxiosError);
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
      return await handleError(error as AxiosError);
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
      return await handleError(error as AxiosError);
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
      return await handleError(error as AxiosError);
    }
  },
  delete: async <T = null>(
    url: string,
    config: AxiosRequestConfig<unknown> = {},
  ): Promise<AxiosResponse<ResponseData<T>>> => {
    try {
      return await axiosInstance.delete<ResponseData<T>>(url, config);
    } catch (error) {
      return await handleError(error as AxiosError);
    }
  },
};

export { api };
