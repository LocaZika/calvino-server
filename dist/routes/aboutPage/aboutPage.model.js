"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutPageModel = void 0;
var _mongoose = require("mongoose");
var aboutPage = {
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
var aboutPageSchema = new _mongoose.Schema(aboutPage, {
  timestamps: true
});
var aboutPageModel = exports.aboutPageModel = (0, _mongoose.model)("aboutPage", aboutPageSchema);