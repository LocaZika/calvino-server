"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _header = _interopRequireDefault(require("./header.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = (0, _express.Router)();

//GET header
router.get("/", _header["default"].index);

//POST header
router.post("/", _header["default"].post);

//PATCH header
router.patch("/", _header["default"].patch);
var _default = exports["default"] = router;