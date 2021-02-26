import axios from 'axios';
import { store } from '../store';
var Axios = axios.create({
  baseURL: '/api/v1/',
});

Axios.interceptors.request.use(function (config) {
  //Do something before request is sent
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + store.getState()?.userInfo?.token,
  };
  return config;
});
export default Axios;
