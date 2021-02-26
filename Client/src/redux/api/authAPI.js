import Axios from './axios';

//Signup new user
export const signupAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/auth/signup/',
        data: data,
      });
      return response.data;
    } catch (err) {
      if (err.response) {
        let error = err.response.data;
        throw error;
      } else {
        throw err;
      }
    }
  }
  return postData();
};

//Signin user
export const signinAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/auth/signin/',
        data: data,
      });
      return response.data;
    } catch (err) {
      if (err.response) {
        let error = err.response.data;
        throw error;
      } else {
        throw err;
      }
    }
  }
  return postData();
};

export const forgotAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/auth/forgotpassword',
        data: { ...data },
      });
      return response.data;
    } catch (err) {
      if (err.response) {
        let error = err.response.data;
        throw error;
      } else {
        throw err;
      }
    }
  }
  return postData();
};

export const resetAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/auth/resetpassword',
        data: { ...data },
      });
      return response.data;
    } catch (err) {
      if (err.response) {
        let error = err.response.data;
        throw error;
      } else {
        throw err;
      }
    }
  }
  return postData();
};
