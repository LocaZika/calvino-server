import { Schema, model } from 'mongoose';

const service = {
  title: {type: String, required: true},
  img: {type: String, required: true},
  content: {type: String, required: true},
  path: {type: String, required: true},
  createAt: Date,
  updateAt: Date,
};
const serviceSchema = new Schema<TServiceItem>(service, { timestamps: true });
export const serviceItemModel = model('service', serviceSchema);
