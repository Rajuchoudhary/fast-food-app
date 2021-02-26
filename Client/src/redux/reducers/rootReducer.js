import { combineReducers } from 'redux';
import {
  adminAddCategoryReducer,
  adminAddItemReducer,
  adminDeleteCategoryReducer,
  adminDeleteItemReducer,
  adminGetItemDetailReducer,
  adminGetItemsReducer,
  adminGetOrderDetailReducer,
  adminGetOrdersReducer,
  adminGetUsersReducer,
  adminSigninReducer,
  adminUpdateCategoryReducer,
  adminUpdateItemReducer,
  adminUpdateOrderReducer,
} from './adminReducers';
import {
  saveUserInfoReducer,
  userForgotReducer,
  userResetReducer,
  userSigninReducer,
  userSignupReducer,
} from './authReducers';
import { cartReducer } from './cartReducers';
import { orderReducer } from './orderReducers';
import {
  getCategoryListReducer,
  getHomePageDataReducer,
  getItemDetailReducer,
  getMenuPageDataReducer,
} from './publicReducers';
import {
  uploadImageReducer,
  userAddReviewReducers,
  userCancelOrderReducer,
  userGetOrderDetailReducer,
  userGetOrdersReducers,
  userPayForOrderReducers,
  userPlaceOrderReducer,
  userUpdateDetailReducers,
  userUpdateOrderReducer,
} from './userReducers';

const appReducers = combineReducers({
  homePageData: getHomePageDataReducer,
  menuPageData: getMenuPageDataReducer,
  itemDetail: getItemDetailReducer,
  cart: cartReducer,
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  userInfo: saveUserInfoReducer,
  userForgot: userForgotReducer,
  userReset: userResetReducer,
  userUpdateDetail: userUpdateDetailReducers,
  userOrders: userGetOrdersReducers,
  userPay: userPayForOrderReducers,
  userUploadImage: uploadImageReducer,
  getCategoryList: getCategoryListReducer,
  adminSignin: adminSigninReducer,
  adminAddItem: adminAddItemReducer,
  adminUpdateItem: adminUpdateItemReducer,
  adminDeleteItem: adminDeleteItemReducer,
  adminGetItems: adminGetItemsReducer,
  adminGetItemDetail: adminGetItemDetailReducer,
  adminAddCategory: adminAddCategoryReducer,
  adminUpdateCategory: adminUpdateCategoryReducer,
  adminDeleteCategory: adminDeleteCategoryReducer,
  adminGetOrders: adminGetOrdersReducer,
  adminGetOrderDetail: adminGetOrderDetailReducer,
  adminUpdateOrder: adminUpdateOrderReducer,
  adminGetUsers: adminGetUsersReducer,
  order: orderReducer,
  updateOrder: userUpdateOrderReducer,
  getOrderDetail: userGetOrderDetailReducer,
  cancelOrder: userCancelOrderReducer,
  userPlaceOrder: userPlaceOrderReducer,
  userAddReview: userAddReviewReducers,
});

export default appReducers;
