"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _footer = require("./footer.controller");
var router = (0, _express.Router)();
// GET footer
router.get("/", _footer.footerController.index);
// POST footer
router.post("/", _footer.footerController.post);
var _default = exports["default"] = router;