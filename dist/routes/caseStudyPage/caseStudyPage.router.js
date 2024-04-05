"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _caseStudyPage = require("./caseStudyPage.controller");
var router = (0, _express.Router)();
// GET caseStudyPage
router.get("/", _caseStudyPage.caseStudyPageController.index);
// POST caseStudyPage
router.post("/", _caseStudyPage.caseStudyPageController.post);
var _default = exports["default"] = router;