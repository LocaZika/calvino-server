"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caseStudyModel = void 0;
var _mongoose = require("mongoose");
//CaseStudy images
var imgs = {
  path: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  }
};
//CaseStudy
var caseStudy = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  imgs: [imgs],
  createdAt: Date,
  updatedAt: Date
};
var caseStudySchema = new _mongoose.Schema(caseStudy, {
  timestamps: true
});
var caseStudyModel = exports.caseStudyModel = (0, _mongoose.model)("caseStudy", caseStudySchema);