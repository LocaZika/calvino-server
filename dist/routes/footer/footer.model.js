"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerModel = void 0;
var _mongoose = require("mongoose");
//Menu item
var menuItem = {
  name: {
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
var menuItemSchema = new _mongoose.Schema(menuItem, {
  timestamps: true
});
//Caption item
var captionItem = {
  title: {
    type: String,
    required: true
  },
  menu: [menuItem],
  createdAt: Date,
  updatedAt: Date
};
var captionItemSchema = new _mongoose.Schema(captionItem, {
  timestamps: true
});

//Footer
var footer = {
  logo: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  captions: [captionItemSchema],
  createdAt: Date,
  updatedAt: Date
};
var footerSchema = new _mongoose.Schema(footer, {
  timestamps: true
});
var footerModel = exports.footerModel = (0, _mongoose.model)("footer", footerSchema);