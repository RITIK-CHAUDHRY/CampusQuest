import axios from "axios";
export const apiClient = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 30000,
  withCredentials: true,
});
export default apiClient;
