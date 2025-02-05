import axiosLib from "axios";

export const axios = axiosLib.create({
  baseURL: "http://localhost:3000",
});

export const fetcher = (url) => axios.get(url).then((res) => res.data);
