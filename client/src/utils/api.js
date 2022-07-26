import axios from "axios";

const api = {
  get: (...args) => fetchAPIData("get", ...args),
  post: (...args) => fetchAPIData("post", ...args),
  put: (...args) => fetchAPIData("put", ...args),
  patch: (...args) => fetchAPIData("patch", ...args),
  delete: (...args) => fetchAPIData("delete", ...args),
};

export default api;

const fetchAPIData = async (method, url, options) => {
  try {
    const response = await axios[method](url, { ...options });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
