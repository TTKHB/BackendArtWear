var express = require("express");
var router = express.Router();
const multer = require("multer");
const sharp = require("sharp");
const User = require("../model/userModel");

const stotrage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("invalid images file!", false);
  }
};
const uploads = multer({ storage: fileFilter });

// Import file dang ki, dang nhap tu controller
const {
  createUser,
  userSignIn,
  signOut,
} = require("../controllers/userController");
const { isAuth } = require("../middlewares/auth");

// Import file check loi dang ki, dang nhap
const {
  validateUserSignUp,
  userVlidation,
  validateUserSignIn,
} = require("../middlewares/validation/formcheck");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// POST create-user
router.post("/create-user", validateUserSignUp, userVlidation, createUser);

// POST sign-in
router.post("/sign-in", validateUserSignIn, userVlidation, userSignIn);

//create-post
router.post("/create-post", isAuth, (req, res) => {
  //Create our post
  res.send("Welcome you are in  secret route");
});

//
router.post("/sign-out", isAuth, signOut);

//upload-profile
router.post(
  "/upload-profile",
  isAuth,
  uploads.single("profile"),
  async (req, res) => {
    const { user } = req;
    if (!user)
      return res.status(401).json({
        success: false,
        message: "Un authorization access!",
      });
    try {
      const profileBuffer = req.file.buffer;
      const { width, height } = await sharp(profileBuffer).metadata();
      const avatar = await sharp(profileBuffer).resize(
        Math.round(width * 0.5),
        Math.round(height * 0.5)
      ).toBuffer;
      await User.findByIdAndUpdate(user._id, { avatar });
      res.status(201).json({
        success: true,
        message: "Your Profile has update",
      });
    } catch (error) {
      res.status(500).json({
        success: true,
        message: "Server error, try after some time",
      });
      console.log("Loi upload img", error.message);
    }
  }
);

module.exports = router;
