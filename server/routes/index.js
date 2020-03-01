const express = require("express");

const router = express.Router();

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

/* GET home page. */
router.get('/', function(req,res){
  res.render('index', {});
});

module.exports = router;