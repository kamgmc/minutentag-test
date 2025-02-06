import axiosLib from "axios";

export const index = axiosLib.create({
  baseURL: "http://localhost:3000",
});

export const fetcher = (url) => index.get(url).then((res) => res.data);
