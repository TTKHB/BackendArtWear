var express = require('express');
var router = express.Router();
const User = require('../model/userModel');


// Import file dang ki, dang nhap tu controller
const { createUser, userSignIn, signOut } = require("../controllers/userController");
const { isAuth } = require('../middlewares/auth');

// Import file check loi dang ki, dang nhap
const { validateUserSignUp, userVlidation, validateUserSignIn } = require('../middlewares/validation/formcheck');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST create-user
router.post('/create-user', validateUserSignUp, userVlidation, createUser);

// POST sign-in
router.post('/sign-in', validateUserSignIn, userVlidation, userSignIn);

//create-post
router.post('/create-post', isAuth, (req, res) => {
  //Create our post 
  res.send("Welcome you are in  secret route");
})

//
router.get('/sign-out', isAuth, signOut);



router.get('/profile', isAuth, (req, res) => {
  if(!req.user)
    return res.json({success:false,message:'unauthorized access!'}); 
    res.json({
       success:true,
       profile:{
       fullname:req.user.fullname,
       email:req.user.email,
       },
    });
});


module.exports = router;

