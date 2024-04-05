"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _service = require("./service.controller");
var router = (0, _express.Router)();
// GET service
router.get("/", _service.serviceController.index);
// POST service
router.post("/", _service.serviceController.post);
var _default = exports["default"] = router;