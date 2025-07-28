import axios from "axios";

export const createAxiosInstance = (url: string) => {
  const instance = axios.create({
    baseURL: url,
  });

  return instance;
};
