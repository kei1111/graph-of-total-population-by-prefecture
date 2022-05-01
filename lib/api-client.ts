import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1",
  responseType: "json",
  headers: { "X-API-KEY": `${process.env.NEXT_PUBLIC_RESAS_API_KEY}` },
});
