"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutModel = void 0;
var _mongoose = require("mongoose");
//About content
var aboutContent = {
  text: {
    type: String,
    required: true
  }
};
//About
var about = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  contents: [aboutContent],
  link: {
    text: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  img: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
};
var aboutSchema = new _mongoose.Schema(about, {
  timestamps: true
});
var aboutModel = exports.aboutModel = (0, _mongoose.model)("about", aboutSchema);