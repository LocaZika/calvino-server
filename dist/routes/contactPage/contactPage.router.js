"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _contactPage = require("./contactPage.controller");
var router = (0, _express.Router)();
// GET contactPage
router.get("/", _contactPage.contactPageController.index);
// POST contactPage
router.post("/", _contactPage.contactPageController.post);
var _default = exports["default"] = router;