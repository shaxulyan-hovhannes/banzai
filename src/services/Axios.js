import Axios from 'axios';

const createAxios = () => {
  const newAxios = Axios.create({
    baseURL: process.env.REACT_APP_HIGH_ATTENDANCE_API,
  });

  // newAxios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  newAxios.defaults.headers = {
    ...newAxios.defaults.headers,
    'Content-Type': 'application/json',
  };

  newAxios.interceptors.request.use(
    (config) => {
      const newConfig = { ...config };
      newConfig.url = newConfig.baseURL + newConfig.url;
      return newConfig;
    },
    (error) => Promise.reject(error)
  );

  newAxios.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return newAxios;
};

export default createAxios();
