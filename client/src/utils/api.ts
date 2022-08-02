import axios from "axios";

type FetchType = [
  "get" | "post" | "delete" | "patch" | "put",
  string,
  {
    [key: string]: any;
  }
];

type ArgsType = [
  string,
  {
    [key: string]: any;
  }
];

const api = {
  get: (...args: ArgsType) => fetchAPIData(["get", ...args]),
  post: (...args: ArgsType) => fetchAPIData(["post", ...args]),
  put: (...args: ArgsType) => fetchAPIData(["put", ...args]),
  patch: (...args: ArgsType) => fetchAPIData(["patch", ...args]),
  delete: (...args: ArgsType) => fetchAPIData(["delete", ...args]),
};

export default api;

const fetchAPIData = async ([method, url, options]: FetchType) => {
  try {
    const response = await axios[method](url, { ...options });
    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
