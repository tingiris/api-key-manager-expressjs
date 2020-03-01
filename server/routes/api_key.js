const express = require("express");
const uuidAPIKey = require('uuid-apikey');

const db = require('../models');

const router = express.Router();

router.post('/create', async (req, res) => {
  const key = await uuidAPIKey.create();

  await db.api_user.create({
    email: req.body.userEmail,
    apiKey: key.apiKey
  })
  .then(function() {
    res.redirect('/get_key');
  });
});

router.post('/get_key', async (req, res) => { 
  const userEmail = req.body.userEmail;

  db.api_user.findOne({
    where: {
       email: userEmail
    }
  }).then( (user) => {
    res.render('api_key', {
      api_key : user.apiKey
    });
 });
});

// router.get('/:user_id/destroy', function(req, res) {
//   db.api_user.destroy({
//     where: {
//       id: req.params.userEmail
//     }
//   }).then(function() {
//     res.redirect('/');
//   });
// });


module.exports = router;