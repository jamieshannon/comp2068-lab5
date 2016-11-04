var express = require('express');
var router = express.Router();

// Link to the account model
var Account = require('../models/account');

/* GET users listing. */
router.get('/', isLoggedIn, function(req, res, next) {
  // use the account model to get the list of users
  Account.find(function (err, users){
    if (err) {
      console.log(err);
      res.redirect('error');
    }
    else{
      //load users.ejs view
      res.render('users', {
        title: "Users",
        users: users,
        user: req.user
      })
    }
  });
});

// check if user is logged in
function isLoggedIn (req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/login');
  }
}

//make router public
module.exports = router;
