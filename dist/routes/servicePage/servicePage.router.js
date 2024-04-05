"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _servicePage = require("./servicePage.controller");
var router = (0, _express.Router)();
// GET servicePage
router.get("/", _servicePage.servicePageController.index);
// POST servicePage
router.post("/", _servicePage.servicePageController.post);
var _default = exports["default"] = router;