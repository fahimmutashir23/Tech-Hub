import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;