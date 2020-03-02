const express = require("express");
const uuidAPIKey = require('uuid-apikey');

const db = require('../models');
const api_user = db.api_user;

const router = express.Router();

router.post('/create', async (req, res) => {
  const key = await uuidAPIKey.create();

  await api_user.create({
    email: req.body.userEmail,
    apiKey: key.apiKey
  })
  .then( (user) => {
    res.render('api_key', {
      api_key : user.apiKey
    });
  });
});

router.post('/get_key', async (req, res) => {  
  const userEmail = req.body.userEmail;

  await api_user.findOne({
    where: {
      email: userEmail
    }
  }).then( (user) => {
    res.render('api_key', {
      api_key : user.apiKey
    });
 });
});

router.post('/delete', function(req, res) {
  api_user.destroy({
    where: {
      email: req.body.userEmail
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;