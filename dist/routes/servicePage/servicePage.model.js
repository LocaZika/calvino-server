"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.servicePageModel = void 0;
var _mongoose = require("mongoose");
var servicePage = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
};
var servicePageSchema = new _mongoose.Schema(servicePage, {
  timestamps: true
});
var servicePageModel = exports.servicePageModel = (0, _mongoose.model)("servicePage", servicePageSchema);