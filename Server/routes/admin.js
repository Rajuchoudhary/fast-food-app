import express from 'express';
import pkg from 'express-validator';
import {
  AddCategory,
  AddItem,
  DeleteCategory,
  DeleteItem,
  GetAllItems,
  GetAllOrder,
  GetAllUser,
  GetItemWithId,
  GetOrderWithId,
  UpdateCategory,
  UpdateItem,
  UpdateOrderWithId,
} from '../controllers/adminController.js';
import RequireAdminAuth from '../middlewares/admin-auth.js';
import RequireAuth from '../middlewares/require-auth.js';
import ValidateRequest from '../middlewares/validate-request.js';
const { body } = pkg;

const router = express.Router();

//Add item
router
  .route('/item/')
  .post(
    RequireAuth,
    RequireAdminAuth,
    [
      body('itemName')
        .trim()
        .isLength({ min: 3, max: 30 })
        .withMessage('Item name should be between 3 to 30 characters'),
      body('description')
        .trim()
        .isLength({ min: 15, max: 150 })
        .withMessage('Please add item description min: 15, max: 150'),
      body('category')
        .trim()
        .notEmpty()
        .withMessage('Please select item category'),
      body('price')
        .trim()
        .toInt()
        .isInt({ min: 1 })
        .withMessage('Please add price'),
      body('image').trim().notEmpty().withMessage('Please upload item image'),
    ],
    ValidateRequest,
    AddItem
  );

//Update item
router
  .route('/item/:itemId')
  .put(
    RequireAuth,
    RequireAdminAuth,
    [
      body('itemName')
        .trim()
        .isLength({ min: 3, max: 30 })
        .withMessage('item name should be between 3 to 30 characters'),
      body('description')
        .trim()
        .isLength({ min: 15, max: 150 })
        .withMessage('Please add item description min: 15, max: 150 '),
      body('category')
        .trim()
        .notEmpty()
        .withMessage('Please select item category'),
      body('price')
        .trim()
        .toInt()
        .isInt({ min: 1 })
        .withMessage('Please add price atleast $1 Doller'),
      body('image').trim().notEmpty().withMessage('Please upload item image'),
    ],
    ValidateRequest,
    UpdateItem
  );

//Delete item
router.route('/item/:itemId').delete(RequireAuth, RequireAdminAuth, DeleteItem);

//Add category
router
  .route('/category/')
  .post(
    RequireAuth,
    RequireAdminAuth,
    [
      body('category')
        .trim()
        .isLength({ min: 3, max: 15 })
        .withMessage('item name should be between 3 to 15 characters'),
    ],
    ValidateRequest,
    AddCategory
  );

//Get all categories
router.route('/category/').put(RequireAuth, RequireAdminAuth, UpdateCategory);

//Delete category
router
  .route('/category/:categoryId')
  .delete(RequireAuth, RequireAdminAuth, DeleteCategory);

//Get all items with category
router
  .route('/items/:currentPage/:category')
  .get(RequireAuth, RequireAdminAuth, GetAllItems);

//Get item with id
router
  .route('/items/:itemId')
  .get(RequireAuth, RequireAdminAuth, GetItemWithId);

//Get all Orders
router
  .route('/orders/:currentPage/:filter')
  .get(RequireAuth, RequireAdminAuth, GetAllOrder);

// //Get Order with id
router
  .route('/order/:orderId')
  .get(RequireAuth, RequireAdminAuth, GetOrderWithId);

//Update Order with id
router
  .route('/orders/:orderId')
  .put(RequireAuth, RequireAdminAuth, UpdateOrderWithId);

//Get all Users
router
  .route('/users/:currentPage')
  .get(RequireAuth, RequireAdminAuth, GetAllUser);

export default router;
