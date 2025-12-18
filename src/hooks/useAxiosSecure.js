import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';

const axiosSecure = axios.create({
  baseURL: 'https://clubsphere-server-tau.vercel.app',
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Intercept request
    axiosSecure.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });
  }, [user]);

  return axiosSecure;
};

export default useAxiosSecure;
