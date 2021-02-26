import cloudinary from 'cloudinary';
import BadRequestError from '../errors/bad-request-error.js';
import Category from '../models/CategoryModel.js';
import Item from '../models/ItemModel.js';
import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';

//Config Cloudinary
cloudinary.v2.config({
  cloud_name: 'diwfmgcww',
  api_key: '798971374998668',
  api_secret: 'gvB77gESCIwH1AOgUSgA289gJfo',
});

//Add New Category
export const AddCategory = async (req, res) => {
  const { category } = req.body;

  const categoryCheck = await Category.findOne({ category });

  if (categoryCheck) {
    throw new BadRequestError(
      'Category Already added with this title, please choose a unique title'
    );
  }

  const newCategory = new Category({ category });
  await newCategory.save();

  if (!newCategory) {
    throw new BadRequestError('Could not add category. Please try again later');
  }

  const categoryList = await Category.find({});

  res
    .status(201)
    .send({ success: true, message: 'Category added!', categoryList });
};

//Delete Category
export const DeleteCategory = async (req, res) => {
  const categoryName = await Category.findOne({
    _id: req.params.categoryId,
  });

  const category = await Category.findOneAndRemove({
    _id: req.params.categoryId,
  });

  if (!category) {
    throw new BadRequestError(
      'Could not find category. Please try again later'
    );
  }

  const deleteItems = await Item.deleteMany({
    category: categoryName.category,
  });

  if (!category) {
    throw new BadRequestError(
      'Could not delete category and items. Please try again later'
    );
  }

  const categoryList = await Category.find({});
  res
    .status(201)
    .send({ success: true, message: 'Category deleted!', categoryList });
};

//Update category
export const UpdateCategory = async (req, res) => {
  const { categoryId, categoryText } = req.body;

  const category = await Category.find({ _id: categoryId });
  if (!category) {
    throw new BadRequestError('Category not found.');
  }

  const updateCategory = await Category.findOneAndUpdate(
    { _id: categoryId },
    { category: categoryText }
  );

  const updateItems = await Item.updateMany(
    {
      category: category[0].category,
    },
    {
      category: categoryText,
    }
  );

  if (!updateItems) {
    throw new BadRequestError('Could not update. Please try again later');
  }

  res.status(201).send({ success: true, message: 'Category Updated!' });
};

//Add New Item
export const AddItem = async (req, res) => {
  const { itemName, description, category, price, image } = req.body;

  const itemCheck = await Item.findOne({ itemName });

  if (itemCheck) {
    throw new BadRequestError(
      'Item Already added with this name, please choose a unique name'
    );
  }

  let result = await cloudinary.v2.uploader.upload(image, {
    public_id: `${Date.now()}`,
    resource_type: 'auto',
  });

  if (!result) {
    throw new BadRequestError('Could not upload image');
  }

  const newItem = new Item({
    itemName,
    description,
    category,
    price,
    image: { public_id: result.public_id, url: result.secure_url },
  });

  await newItem.save();

  res
    .status(201)
    .send({ success: true, message: 'Item added successfully', newItem });
};

//Update Item
export const UpdateItem = async (req, res) => {
  const { itemId } = req.params;
  const { itemName, description, category, price, image, publicId } = req.body;

  const itemCheck = await Item.findOne({ _id: itemId });

  if (!itemCheck) {
    throw new BadRequestError('item Not Found');
  }
  let result;

  if (image.substring(0, 4) === 'data') {
    const removeImg = await cloudinary.v2.uploader.destroy(publicId);
    if (!removeImg) {
      throw new BadRequestError('Could not remove image');
    }

    result = await cloudinary.v2.uploader.upload(image, {
      public_id: `${Date.now()}`,
      resource_type: 'auto',
    });

    if (!result) {
      throw new BadRequestError('Could not upload image');
    }
  }

  const updateditem = await Item.findOneAndUpdate(
    {
      _id: itemId,
    },
    {
      itemName,
      description,
      category,
      price,
      image: {
        public_id:
          image.substring(0, 4) === 'data' ? result.public_id : publicId,
        url: image.substring(0, 4) === 'data' ? result.secure_url : image,
      },
    },
    { new: true }
  );

  if (!updateditem) {
    throw new BadRequestError('Could not update item. Please try again later');
  }

  res.status(201).send({ sucess: true, message: 'Item updated successfully' });
};

//Delete Item
export const DeleteItem = async (req, res) => {
  const { itemId } = req.params;

  const checkitem = await Item.findOne({
    _id: itemId,
  });
  if (!checkitem) {
    throw new BadRequestError('item not found');
  }

  if (checkitem) {
    cloudinary.v2.uploader.destroy(checkitem.image.public_id, (err, result) => {
      if (err) {
        throw new BadRequestError(err);
      }
    });
  }

  const deleteitem = await Item.findOneAndDelete({
    _id: itemId,
  });

  if (!deleteitem) {
    throw new BadRequestError('Coud not delete item. Please try again later');
  }

  res.status(200).send({ message: 'item deleted' });
};

//Get All Items with category
export const GetAllItems = async (req, res) => {
  const { currentPage = 1, category = 'all' } = req.params;
  const pageSize = 10;
  let itemList;
  let totalitem;

  if (category === 'all') {
    itemList = await Item.find({})
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ createdAt: -1 });
    totalitem = await Item.find({}).countDocuments();
  } else {
    itemList = await Item.find({ category })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ createdAt: -1 });
    totalitem = await Item.find({
      category,
    }).countDocuments();
  }
  const categoryList = await Category.find({});
  res.status(200).send({ itemList, totalitem, categoryList });
};

//Get Item detail with id
export const GetItemWithId = async (req, res) => {
  const { itemId } = req.params;

  const item = await Item.findOne({
    _id: itemId,
  });
  if (!item) {
    throw new BadRequestError('Item not found');
  }

  res.status(200).send(item);
};

//Get All Orders
export const GetAllOrder = async (req, res) => {
  const { currentPage = 1, filter = 'all' } = req.params;
  const pageSize = 10;

  let orderList;
  let totalOrder;

  if (filter === 'delivered') {
    orderList = await Order.find({ isDelivered: true })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ createdAt: -1 });
    totalOrder = await Order.find({
      isDelivered: true,
    }).countDocuments();
  } else if (filter === 'notDelivered') {
    orderList = await Order.find({ isDelivered: false })
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ createdAt: -1 });
    totalOrder = await Order.find({
      isDelivered: false,
    }).countDocuments();
  } else {
    orderList = await Order.find({})
      .skip((currentPage - 1) * pageSize)
      .limit(pageSize * 1)
      .sort({ createdAt: -1 });
    totalOrder = await Order.find({}).countDocuments();
  }

  res.status(200).send({ orderList, totalOrder });
};

//Get Order detail with id
export const GetOrderWithId = async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({
    _id: orderId,
  }).populate({
    path: 'user',
    select: '-resetPasswordToken -resetPasswordExpire',
  });

  if (!order) {
    throw new BadRequestError('Order not found');
  }

  res.status(200).send(order);
};

//Update Order detail with id
export const UpdateOrderWithId = async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw new BadRequestError('Order not found');
  }

  const updatedOrder = await Order.findOneAndUpdate(
    {
      _id: orderId,
    },
    { isDelivered: true, deliveredAt: Date.now(), isPaid: true },
    { new: true }
  ).populate({
    path: 'user',
    select: '-resetPasswordToken -resetPasswordExpire',
  });

  if (!updatedOrder) {
    throw new BadRequestError('Could not update order. Please try again later');
  }

  res
    .status(201)
    .send({ success: true, message: 'Order Updated!', updatedOrder });
};

//Get All Users
export const GetAllUser = async (req, res) => {
  const { currentPage = 1 } = req.params;
  const pageSize = 10;

  const userList = await User.find({ isAdmin: false })
    .skip((currentPage - 1) * pageSize)
    .limit(pageSize * 1)
    .sort({ date: -1 });

  const totalUser = await User.find({ isAdmin: false }).countDocuments();

  res.status(200).send({ userList, totalUser });
};
