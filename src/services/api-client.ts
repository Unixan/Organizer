import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://localhost:7296/api",
});

export { CanceledError };
