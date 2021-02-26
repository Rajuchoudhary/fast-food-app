import * as publicConstants from '../constants/publicConstants';

export const getHomePageDataAction = () => ({
  type: publicConstants.GET_HOME_PAGE_DATA_REQUEST,
});

export const getMenuPageDataAction = (currentPage, category) => ({
  type: publicConstants.GET_MENU_PAGE_DATA_REQUEST,
  payload: { currentPage, category },
});

export const getItemDetailAction = (itemId) => ({
  type: publicConstants.GET_ITEM_DETAIL_REQUEST,
  payload: itemId,
});

export const GetCategoryListAction = () => ({
  type: publicConstants.GET_CATEGORY_LIST_REQUEST,
});
