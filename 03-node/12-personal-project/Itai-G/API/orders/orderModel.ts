import mongoose, { Schema, Document } from 'mongoose';

interface Order {
  _id: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export const OrderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model("orders",OrderSchema);

export default OrderModel;