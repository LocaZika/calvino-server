"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _aboutPage = require("./aboutPage.controller");
var router = (0, _express.Router)();
// GET aboutPage
router.get("/", _aboutPage.aboutPageController.index);
// POST aboutPage
router.post("/", _aboutPage.aboutPageController.post);
var _default = exports["default"] = router;