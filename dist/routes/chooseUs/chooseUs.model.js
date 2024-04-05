"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseUsModel = void 0;
var _mongoose = require("mongoose");
//Brand
var brand = {
  path: {
    type: String,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
};
var brandSchema = new _mongoose.Schema(brand, {
  timestamps: true
});
//Choose us
var chooseUs = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  completedProjects: {
    type: Number,
    required: true
  },
  specialisedEmployees: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  speaker: {
    type: String,
    required: true
  },
  brands: [brandSchema],
  createdAt: Date,
  updatedAt: Date
};
var chooseUsSchema = new _mongoose.Schema(chooseUs, {
  timestamps: true
});
var chooseUsModel = exports.chooseUsModel = (0, _mongoose.model)("chooseUs", chooseUsSchema);