"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contactPageModel = void 0;
var _mongoose = require("mongoose");
var contactPage = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  formTitle: {
    type: String,
    required: true
  },
  info: {
    address: {
      home: {
        type: String,
        required: true
      },
      detail: {
        type: String,
        required: true
      }
    },
    tel: {
      phoneNumber: {
        type: String,
        required: true
      },
      schedule: {
        type: String,
        required: true
      }
    },
    email: {
      mail: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  },
  createdAt: Date,
  updatedAt: Date
};
var contactPageSchema = new _mongoose.Schema(contactPage, {
  timestamps: true
});
var contactPageModel = exports.contactPageModel = (0, _mongoose.model)("contactPage", contactPageSchema);