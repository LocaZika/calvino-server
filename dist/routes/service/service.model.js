"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceModel = void 0;
var _mongoose = require("mongoose");
//Service item
var serviceItem = {
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
};
var serviceItemSchema = new _mongoose.Schema(serviceItem, {
  timestamps: true
});
//Service
var service = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  items: [serviceItemSchema],
  createdAt: Date,
  updatedAt: Date
};
var serviceSchema = new _mongoose.Schema(service, {
  timestamps: true
});
var serviceModel = exports.serviceModel = (0, _mongoose.model)("service", serviceSchema);