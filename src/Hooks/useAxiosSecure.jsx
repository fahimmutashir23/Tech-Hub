import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // const token = localStorage.getItem('token');
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhaGltbW1zbW1AZ21haWwuY29tIiwiaWF0IjoxNzE3MzUyNjExLCJleHAiOjE3MTc3MTI2MTF9.r8o1Pk97A5I8KcMNy-qXAo7smubRzRYVuq6JFtJfdkY';
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