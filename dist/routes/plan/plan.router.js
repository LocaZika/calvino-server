"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _plan = require("./plan.controller");
var router = (0, _express.Router)();
// GET plan
router.get("/", _plan.planController.index);
// POST plan
router.post("/", _plan.planController.post);
var _default = exports["default"] = router;