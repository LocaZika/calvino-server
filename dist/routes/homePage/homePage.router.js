"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _homePage = require("./homePage.controller");
var router = (0, _express.Router)();
// GET homePage
router.get("/", _homePage.homePageController.index);
// POST homePage
router.post("/", _homePage.homePageController.post);
var _default = exports["default"] = router;