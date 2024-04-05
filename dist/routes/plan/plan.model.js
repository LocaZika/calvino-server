"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pricingPlanSchema = exports.planModel = void 0;
var _mongoose = require("mongoose");
//Pricing plans
var pricingPlan = {
  price: {
    type: Number,
    required: true
  },
  increaseTraffic: {
    type: Number,
    required: true
  },
  socialMediaMkt: {
    type: Boolean,
    required: true
  },
  freeOptimization: {
    type: Number,
    required: true
  },
  support: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  classification: {
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
var pricingPlanSchema = exports.pricingPlanSchema = new _mongoose.Schema(pricingPlan, {
  timestamps: true
});
//Plan
var plan = {
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  pricingPlans: [pricingPlanSchema],
  createdAt: Date,
  updatedAt: Date
};
var planSchema = new _mongoose.Schema(plan, {
  timestamps: true
});
var planModel = exports.planModel = (0, _mongoose.model)("plan", planSchema);