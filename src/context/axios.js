import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.134.140:3030",
  // baseURL: "https://1fca-103-249-22-127.ngrok-free.app",
});
