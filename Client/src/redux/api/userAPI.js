import Axios from './axios';

//Place Order
export const userPlaceOrderAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/user/order/place',
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

//User Get Order Detail
export const userGetOrderDetailAPI = (orderId) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/user/order/${orderId}`,
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

//Update Order
export const userUpdateOrderAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: `/user/order/${data.orderId}`,
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

//CAncel Order
export const userCancelOrderAPI = (orderId) => {
  async function deleteData() {
    try {
      const response = await Axios({
        method: 'DELETE',
        url: `/user/order/${orderId}`,
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
  return deleteData();
};

//User update details
export const usetUpdateDetailAPI = (data) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/user/update/',
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
  return getData();
};

//User get all orders
export const userGetOrdersAPI = (currentPage) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/user/orders/${currentPage}`,
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

//User add review
export const userAddReviewAPI = (data) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/user/order/review',
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
  return getData();
};

//User pay for order
export const userPayForOrderAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'PUT',
        url: '/user/order/pay-order',
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

//User upload image
export const userUploadImageAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/user/upload-image',
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
