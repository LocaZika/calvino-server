"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.homePageModel = void 0;
var _mongoose = require("mongoose");
var homePage = {
  hero: {
    theme: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  createdAt: Date,
  updatedAt: Date
};
var homePageSchema = new _mongoose.Schema(homePage, {
  timestamps: true
});
var homePageModel = exports.homePageModel = (0, _mongoose.model)("homePage", homePageSchema);