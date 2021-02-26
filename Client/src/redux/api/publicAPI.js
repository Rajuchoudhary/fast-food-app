import Axios from './axios';

export const getHomePageDataAPI = () => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: '/public',
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
  return getData();
};

export const getMenuPageDataAPI = (data) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/public/menu/${data.currentPage}/${data.category}`,
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
  return getData();
};

export const getItemDetailAPI = (itemId) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/public/item/${itemId}`,
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
  return getData();
};

//get category list
export const getCategoryListAPI = () => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: '/public/category/',
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
  return getData();
};
