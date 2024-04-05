"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var navbarItem = {
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
};
var navbarItemSchema = new _mongoose.Schema(navbarItem, {
  timestamps: true
});
var header = {
  navbar: [navbarItemSchema],
  callUs: String,
  contact: {
    name: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
};
var headerSchema = new _mongoose.Schema(header, {
  timestamps: true
});
var _default = exports["default"] = (0, _mongoose.model)("header", headerSchema);