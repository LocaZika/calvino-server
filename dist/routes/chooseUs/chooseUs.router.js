"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _chooseUs = require("./chooseUs.controller");
var router = (0, _express.Router)();
// GET chooseUs
router.get("/", _chooseUs.chooseUsController.index);
// POST chooseUs
router.post("/", _chooseUs.chooseUsController.post);
var _default = exports["default"] = router;