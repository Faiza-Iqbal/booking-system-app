import axios from "axios";

type FetchType = {
  method: "get" | "post" | "delete" | "patch" | "put";
  url: string;
  options: {
    [key: string]: any;
  };
};
type ArgsType = {
  url: string;
  options: {
    [key: string]: any;
  };
};

const api = {
  get: ({ ...args }: ArgsType) => fetchAPIData({ method: "get", ...args }),
  post: ({ ...args }: ArgsType) => fetchAPIData({ method: "post", ...args }),
  put: ({ ...args }: ArgsType) => fetchAPIData({ method: "put", ...args }),
  patch: ({ ...args }: ArgsType) => fetchAPIData({ method: "patch", ...args }),
  delete: ({ ...args }: ArgsType) =>
    fetchAPIData({ method: "delete", ...args }),
};

export default api;

const fetchAPIData = async ({ method, url, options }: FetchType) => {
  try {
    const response = await axios[method](url, { ...options });
    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
