import BadRequestError from '../errors/bad-request-error.js';
import Category from '../models/CategoryModel.js';
import Item from '../models/ItemModel.js';

//Get Home Page items
export const GetHomeItem = async (req, res) => {
  const itemList = await Item.find({}).limit(6).sort({ createdAt: -1 });
  const categoryList = await Category.find({});
  res.status(200).send({ itemList, categoryList });
};

//Get Menu items with category
export const GetMenuItem = async (req, res) => {
  const { currentPage = 1, category = 'all' } = req.params;
  const pageSize = 9;

  let itemList;
  let totalitem;

  if (category === 'all') {
    itemList = await Item.find({})
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ date: -1 });
    totalitem = await Item.find({}).countDocuments();
  } else {
    itemList = await Item.find({ category })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ date: -1 });
    totalitem = await Item.find({
      category,
    }).countDocuments();
  }

  const categoryList = await Category.find({});
  res.status(200).send({ itemList, totalitem, categoryList });
};

//Get item detail with id
export const GetItemDetailWithId = async (req, res) => {
  const { itemId } = req.params;

  const item = await Item.findOne({ _id: itemId }).populate('reviews.user');

  if (!item) {
    throw new BadRequestError('item not found');
  }

  res.status(200).send(item);
};

//Get all Categories
export const GetCategory = async (req, res) => {
  const categoryList = await Category.find({});
  res.status(201).send(categoryList);
};
