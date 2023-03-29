import axios from "axios";

export const runCallback = (callback) => {
  callback();
};

export function getData() {
  return axios.get("/api").then((res) => res.data);
}
