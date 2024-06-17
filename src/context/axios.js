import axios from "axios";

const ports = [3031, 3032, 3033];

// Lựa chọn ngẫu nhiên một port
const getRandomPort = () => {
  const index = Math.floor(Math.random() * ports.length);
  return ports[index];
};

// Tạo một instance của Axios
const axiosInstance = axios.create({
  baseURL: `http://192.168.1.71:${getRandomPort()}`,
});

// Hàm để thay đổi baseURL ngẫu nhiên
axiosInstance.interceptors.request.use((config) => {
  config.baseURL = `http://192.168.1.71:${getRandomPort()}`;
  return config;
});

export default axiosInstance;
