"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _about = require("./about.controller");
var router = (0, _express.Router)();
// GET about
router.get("/", _about.aboutController.index);
// POST about
router.post("/", _about.aboutController.post);
var _default = exports["default"] = router;