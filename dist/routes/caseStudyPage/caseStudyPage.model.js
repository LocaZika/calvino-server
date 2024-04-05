"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.caseStudyPageModel = void 0;
var _mongoose = require("mongoose");
var caseStudyPage = {
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
var caseStudyPageSchema = new _mongoose.Schema(caseStudyPage, {
  timestamps: true
});
var caseStudyPageModel = exports.caseStudyPageModel = (0, _mongoose.model)("caseStudyPage", caseStudyPageSchema);