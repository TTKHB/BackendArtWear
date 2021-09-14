var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv/config");

//env
const api = process.env.API_URL;

//routes
// var indexRouter = require("./routes/index");
var productRouter = require("./routes/product");
var categoriesRouter = require("./routes/categories");
var CartRouter = require("./routes/Cart");
var ReviewsRouter = require("./routes/Review");
var OrdersRouter = require("./routes/Orders");


var usersRoutes = require("./routes/User");

//database
var Mongodb = require("./database/connectMongo");

const { json } = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

var app = express();

//helpers
const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");

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

// app.use(userRouter);

//dùng để chặn localhost khi chưa đăng nhập
// app.use(authJwt());
// app.use(errorHandler);

//Router
//view api
// http://localhost:3000/api/v1/products

app.use(`${api}/products`, productRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/carts`, CartRouter);
app.use(`${api}/reviews`, ReviewsRouter);
app.use(`${api}/orders`, OrdersRouter);

app.use(`${api}/users`, usersRoutes);
// app.use(`${api}/orders`, orderRoutes);

//other
// app.use("/", indexRouter);

//connect database
Mongodb();

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
