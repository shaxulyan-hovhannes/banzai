import Axios from 'services/Axios';

const fetchAPI = async function (options) {
  const x = await Axios(options);
  return x;
};

export { fetchAPI };
