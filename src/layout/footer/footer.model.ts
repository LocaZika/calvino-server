import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const footer = {
  logo: {type: String, required: true},
  description: {type: String, required: true},
  captions: [
    {
      id: uuid(),
      title: {type: String, required: true},
      menu: [
        {
          id: uuid(),
          name: {type: String, required: true},
          path: {type: String, required: true},
        }
      ]
    }
  ],
}
const footerSchema = new Schema<TFooter>(footer, { timestamps: true });
export const footerModel = model('footer', footerSchema);