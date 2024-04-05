"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = require("mongoose");
var _index = _interopRequireDefault(require("./routes/index"));
var _header = _interopRequireDefault(require("./routes/header/header.router"));
var _footer = _interopRequireDefault(require("./routes/footer/footer.router"));
var _service = _interopRequireDefault(require("./routes/service/service.router"));
var _about = _interopRequireDefault(require("./routes/about/about.router"));
var _plan = _interopRequireDefault(require("./routes/plan/plan.router"));
var _chooseUs = _interopRequireDefault(require("./routes/chooseUs/chooseUs.router"));
var _caseStudy = _interopRequireDefault(require("./routes/caseStudy/caseStudy.router"));
var _homePage = _interopRequireDefault(require("./routes/homePage/homePage.router"));
var _aboutPage = _interopRequireDefault(require("./routes/aboutPage/aboutPage.router"));
var _servicePage = _interopRequireDefault(require("./routes/servicePage/servicePage.router"));
var _caseStudyPage = _interopRequireDefault(require("./routes/caseStudyPage/caseStudyPage.router"));
var _contactPage = _interopRequireDefault(require("./routes/contactPage/contactPage.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// load env file
_dotenv["default"].config({
  path: _path["default"].resolve(process.cwd(), ".env.".concat(process.env.NODE_ENV))
});
console.log("Server is running in port: " + process.env.PORT);
// declare variables
var app = (0, _express["default"])();
var uri_mongoDB = process.env.URI_MONGODB;
// connect to database
(0, _mongoose.connect)(uri_mongoDB, {
  dbName: "calvino"
}).then(function () {
  return console.log("Connect successfully!");
})["catch"](function (err) {
  return console.log("Connect failed!", "\n", "Error: " + err.message);
});
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "../public")));
app.use((0, _cors["default"])());
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// router
app.use("/", _index["default"]);
app.use("/header", _header["default"]);
app.use("/footer", _footer["default"]);
app.use("/service", _service["default"]);
app.use("/about", _about["default"]);
app.use("/plan", _plan["default"]);
app.use("/chooseUs", _chooseUs["default"]);
app.use("/caseStudy", _caseStudy["default"]);
// pages
app.use("/homePage", _homePage["default"]);
app.use("/aboutPage", _aboutPage["default"]);
app.use("/servicePage", _servicePage["default"]);
app.use("/contactPage", _contactPage["default"]);
app.use("/caseStudyPage", _caseStudyPage["default"]);
var _default = exports["default"] = app;