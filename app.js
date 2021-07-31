var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv/config");

//env
const api = process.env.API_URL;

var indexRouter = require("./routes/index");

const { json } = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

var app = express();

const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");
const userRouter =require("./routes/index");


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(userRouter);

//dùng để chặn localhost khi chưa đăng nhập
// app.use(authJwt());
// app.use(errorHandler);

//Router
//view api
// http://localhost:3000/api/v1/products
// app.use(`${api}/products`, productsRoutes);
// app.use(`${api}/categories`, categoriesRoutes);
// app.use(`${api}/users`, usersRoutes);
// app.use(`${api}/orders`, orderRoutes);

//other
app.use("/", indexRouter);

//connect database
mongoose
  .connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection is ready");
  })
  .catch((err) => {
    console.trace(err);
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
