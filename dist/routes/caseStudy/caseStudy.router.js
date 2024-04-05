"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _caseStudy = require("./caseStudy.controller");
var router = (0, _express.Router)();
// GET caseStudy
router.get("/", _caseStudy.caseStudyController.index);
// POST caseStudy
router.post("/", _caseStudy.caseStudyController.post);
var _default = exports["default"] = router;