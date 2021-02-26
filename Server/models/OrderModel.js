import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  items: [
    {
      qty: { type: Number, required: true },
      price: { type: Number, required: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      id: { type: String, required: true },
      review: {
        rating: {
          type: Number,
        },
        comment: {
          type: String,
        },
        createdAt: {
          type: Date,
        },
      },
    },
  ],
  mobileNo: {
    type: Number,
    required: true,
  },
  deliveryDetail: {
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  transactionId: {
    type: String,
  },
  deliveryCost: {
    type: Number,
    required: true,
    default: 0,
  },
  totalCost: {
    type: Number,
    required: true,
    default: 0,
  },
  paidAt: {
    type: Date,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  deliveredAt: {
    type: Date,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
