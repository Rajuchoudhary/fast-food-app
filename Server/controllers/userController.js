import cloudinary from 'cloudinary';
import BadRequestError from '../errors/bad-request-error.js';
import Item from '../models/ItemModel.js';
import Order from '../models/OrderModel.js';
import User from '../models/UserModel.js';
import stripe from '../services/Stripe.js';

//Config Cloudinary
cloudinary.v2.config({
  cloud_name: 'diwfmgcww',
  api_key: '798971374998668',
  api_secret: 'gvB77gESCIwH1AOgUSgA289gJfo',
});

//Upload Profile Image
export const ProfileImage = async (req, res) => {
  const { image, public_id } = req.body;

  if (public_id) {
    cloudinary.v2.uploader.destroy(public_id, (err, result) => {
      if (err) {
        throw new BadRequestError(err);
      }
    });
  }

  let result = await cloudinary.v2.uploader.upload(image, {
    public_id: `${Date.now()}`,
    resource_type: 'auto',
  });

  if (!result) {
    throw new BadRequestError('Could not upload image');
  }

  const uploadImg = await User.findOneAndUpdate(
    { _id: req.currentUser.id },
    { image: { public_id: result.public_id, url: result.secure_url } },
    { new: true }
  );

  if (!uploadImg) {
    throw new BadRequestError('Could not upload image');
  }

  res.status(200).send(uploadImg.image);
};

//Update User Details
export const UpdateDetails = async (req, res) => {
  const { name, email, mobileNo } = req.body;

  const updatedUser = await User.findOneAndUpdate(
    { _id: req.currentUser.id },
    {
      name,
      email,
      mobileNo,
    },
    {
      new: true,
    }
  );

  if (!updatedUser) {
    throw new BadRequestError('Could not update user. Please try again later');
  }

  res.status(201).send({
    success: true,
    message: 'You details updated. Now you will be logged out',
  });
};

//Get All User Orders
export const GetAllUserOrder = async (req, res) => {
  const { currentPage = 1 } = req.params;
  const pageSize = 10;

  const orderList = await Order.find({ user: req.currentUser.id })
    .sort({ createdAt: -1 })
    .skip((currentPage - 1) * pageSize)
    .limit(pageSize * 1);

  const totalOrder = await Order.find({
    user: req.currentUser.id,
  }).countDocuments();

  res.status(200).send({ orderList, totalOrder });
};

//Get User Order detail with id
export const GetUserOrderWithId = async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({
    _id: orderId,
  }).populate({
    path: 'reviews',
    match: { user: req.currentUser.id },
  });

  if (!order) {
    throw new BadRequestError('Order not found');
  }

  res.status(200).send(order);
};

//All Items Review
export const UserAddReview = async (req, res) => {
  // const { itemId } = req.params;
  const { itemId, orderId, rating, comment } = req.body;

  const item = await Item.findOne({
    _id: itemId,
  });

  if (!item) {
    throw new BadRequestError('Item not found');
  }

  const review = {
    rating: Number(rating),
    comment,
    user: req.currentUser.id,
  };

  item.reviews.push(review);

  item.totalReviews = item.reviews.length;

  item.rating =
    item.reviews.reduce((acc, item) => item.rating + acc, 0) /
    item.reviews.length;

  await item.save();

  const order = await Order.findOne({
    _id: orderId,
  });

  if (!order) {
    throw new BadRequestError('Order not found');
  }

  order.items.find((item) => item.id === itemId).review = {
    rating,
    comment,
    createAt: Date.now(),
  };

  await order.save();

  if (!item || !order) {
    throw new BadRequestError('Could not add review. Please try again later');
  }

  res
    .status(200)
    .send({ success: true, message: 'Review added successfully!', order });
};

//Place Order
export const PlaceOrder = async (req, res) => {
  const {
    items,
    city,
    state,
    postalCode,
    country,
    address,
    paymentMethod,
    subTotal,
    mobileNo,
  } = req.body;
  console.log(subTotal);

  let deliveryCost;
  if (subTotal <= 100) {
    deliveryCost = 20;
  } else if (subTotal > 100 && subTotal <= 200) {
    deliveryCost = 15;
  } else {
    deliveryCost = 0;
  }
  const totalCost = parseInt(subTotal) + deliveryCost;

  const newOrder = new Order({
    user: req.currentUser.id,
    items,
    deliveryDetail: {
      city,
      state,
      postalCode,
      country,
      address,
    },
    paymentMethod,
    deliveryCost,
    totalCost,
    mobileNo,
  });

  await newOrder.save();
  res.status(200).send({
    success: true,
    message: 'your order has been placed.',
    orderDetail: newOrder,
  });
};
//Update Order
export const UpdateOrder = async (req, res) => {
  const { orderId } = req.params;

  const {
    items,
    city,
    state,
    postalCode,
    country,
    address,
    paymentMethod,
    subTotal,
    mobileNo,
  } = req.body;
  console.log(subTotal);

  let deliveryCost;
  if (subTotal <= 100) {
    deliveryCost = 20;
  } else if (subTotal > 100 && subTotal <= 200) {
    deliveryCost = 15;
  } else {
    deliveryCost = 0;
  }
  const totalCost = parseInt(subTotal) + deliveryCost;

  const orderDetail = await Order.findOneAndUpdate(
    { _id: orderId },
    {
      items,
      deliveryDetail: {
        city,
        state,
        postalCode,
        country,
        address,
      },
      paymentMethod,
      deliveryCost,
      totalCost,
      mobileNo,
    },
    { new: true }
  );

  if (!orderDetail) {
    throw new BadRequestError('Order could not be updated.');
  }

  res.status(200).send({
    success: true,
    message: 'your order has been updated.',
    orderDetail,
  });
};

//Cancel Order
export const CancelOrder = async (req, res) => {
  const { orderId } = req.params;

  const checkOrder = await Order.findOneAndDelete({
    _id: orderId,
    user: req.currentUser.id,
  });

  if (!checkOrder) {
    throw new BadRequestError('Order Not Found');
  }

  res.status(200).send({
    success: true,
    message: 'your order has been cenceled.',
  });
};

//Add Order And Pay
export const PayForOrder = async (req, res) => {
  const { orderId, paymentMethod, transactionId } = req.body;

  const checkOrder = await Order.findOne({ _id: orderId });

  if (!checkOrder) {
    throw new BadRequestError('Order Not Found!');
  }

  let order;
  if (paymentMethod === 'cod') {
    order = await Order.findOneAndUpdate(
      { _id: orderId },
      {
        paymentMethod,
        isPaid: true,
        paidAt: Date.now(),
        transactionId: 'Paid -- COD',
      },
      { new: true }
    );
  } else if (paymentMethod === 'stripe') {
    if (!transactionId) {
      throw new BadRequestError('Token not valid');
    }

    const charge = await stripe.charges.create({
      description: 'Software development services',
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
      currency: 'usd',
      amount: checkOrder.totalCost * 100,
      source: transactionId,
    });

    if (!charge) {
      throw new BadRequestError(
        'Could not process payment. Please try again later'
      );
    }

    order = await Order.findOneAndUpdate(
      { _id: orderId },
      {
        paymentMethod,
        transactionId: charge.id,
        isPaid: true,
        paidAt: Date.now(),
      },
      { new: true }
    );
  } else if (paymentMethod === 'paypal') {
    order = await Order.findOneAndUpdate(
      { _id: orderId },
      {
        paymentMethod,
        transactionId,
        isPaid: true,
        paidAt: Date.now(),
      },
      { new: true }
    );
  }

  res.status(200).send({
    success: true,
    message: 'your order has been paid.',
    order,
  });
};
