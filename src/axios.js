import axios from "axios";

const instance = axios.create({
  baseURL: "https://users-server.onrender.com/api",
});

export default instance;
