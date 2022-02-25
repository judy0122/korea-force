import axios from "axios";

export const baseURL = "https://papi.baechelin.com/accept_order/api";

export const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    withCredentials: true,
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
});
