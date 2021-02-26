import Axios from './axios';

//Admin Signin user
export const adminSigninAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/auth/admin/signin/',
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

//Admin add item
export const AdminAddItemAPI = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/admin/item/',
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

//Admin update item
export const AdminUpdateItemAPI = ({ itemId, data }) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'PUT',
        url: `/admin/item/${itemId}`,
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

//Admin delete item
export const AdminDeleteItemAPI = (itemId) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'DELETE',
        url: `/admin/item/${itemId}`,
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

//Admin get items with category
export const AdminGetItemsAPI = (data) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/admin/items/${data.currentPage}/${data.category}`,
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

//Admin get item detail
export const AdminGetItemDetailAPI = (itemId) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/admin/items/${itemId}`,
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

//Admin add category
export const AdminAddCategoryApi = (category) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'POST',
        url: '/admin/category/',
        data: { category },
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

//Admin update category
export const AdminUpdateCategoryApi = (data) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'PUT',
        url: '/admin/category/',
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

//Admin delete category
export const AdminDeleteCategoryApi = (categoryId) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'DELETE',
        url: `/admin/category/${categoryId}`,
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

//Admin get all orders
export const AdminGetOrdersAPI = (data) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/admin/orders/${data.currentPage}/${data.filter}`,
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

//Admin get order detail
export const AdminGetOrderDetailAPI = (orderId) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/admin/order/${orderId}`,
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

//Admin Update order
export const AdminUpdateOrderAPI = (orderId) => {
  async function getData() {
    try {
      const response = await Axios({
        method: 'PUT',
        url: `/admin/orders/${orderId}`,
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

//Admin get all users
export const AdminGetUsersAPI = (currentPage) => {
  async function postData() {
    try {
      const response = await Axios({
        method: 'GET',
        url: `/admin/users/${currentPage}`,
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
