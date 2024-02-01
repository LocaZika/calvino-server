import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

const header = {
  navbar: [
    {
      id: uuid(),
      name: {type: String, required: true},
      path: {type: String, required: true},
    }
  ],
  callUs: {type: String, required: true},
  contact: {
    name: {type: String, required: true},
    path: {type: String, required: true},
  }
}
const headerSchema = new Schema<THeader>(header, { timestamps: true });
export const headerModel = model('header', headerSchema);