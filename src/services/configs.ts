import axios from "axios";

export const baseURL = "https://papi.baechelin.com/accept_order/api";

export const api = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  },
});
