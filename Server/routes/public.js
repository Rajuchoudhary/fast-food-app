import express from 'express';
import {
  GetCategory,
  GetHomeItem,
  GetItemDetailWithId,
  GetMenuItem,
} from '../controllers/publicController.js';

const router = express.Router();

//Get Home Page Items
router.route('/').get(GetHomeItem);

//Get Menu Page Items for category
router.route('/menu/:currentPage/:category').get(GetMenuItem);

//Get Items Detail
router.route('/item/:itemId').get(GetItemDetailWithId);

//Get all categories
router.route('/category/').get(GetCategory);

export default router;
