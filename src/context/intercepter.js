import axios from "./axios";
import DataStorage from "../common/utility/DataStorage";
import { useState } from "react";
//import 'react-toastify/dist/ReactToastify.css';

const axiosApiInstance = axios.create({});
axiosApiInstance.interceptors.request.use(async (config) => {

  const token = await DataStorage.GetDataStorage(['@accessToken']);
  config.headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return config;
});


axiosApiInstance.interceptors.response.use(
  response => response,
  async (error) => {
    if (apiResponse.data.data.status && apiResponse) {
        DataStorage.SetDataStorage([{ key: '@accessToken', value: apiResponse.data.data.accessToken },
        { key: '@userInfo', value: apiResponse.data.data.userInfo }])
        error.config.headers = {
        'Authorization': `Bearer ${apiResponse.data.data.accessToken}`
        }
        if (error.config.method === 'get')
        return axiosApiInstance.get(error.config.url)
        else (error.config.method === 'post')
        return axiosApiInstance.post(error.config.url, error.config.data)
    }
    else {
        await DataStorage.RemoveDataStorage(['@accessToken', '@userInfo']);
        navigate('LoginNavigation')
    }
    }
);



export default axiosApiInstance;