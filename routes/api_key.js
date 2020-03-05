const express = require("express");
const uuidAPIKey = require('uuid-apikey');

const dbClient = require("../config/DIalogDB");

const router = express.Router();

router.post('/create', async (req, res) => {
  const key = await uuidAPIKey.create();

  await dbClient.insert(
    {
      email: req.body.userEmail,
      apiKey: key.apiKey
    })
    .then( (data) => {
      const apiUser = data[0];
      res.render('api_key', {
        api_key: apiUser.apiKey
      });
    })
    .catch( (error) => 
      console.log(error)
    );
});

router.post('/get_key', async (req, res) => {  
  const userEmail = req.body.userEmail;

  await client.find(
    {
      email: userEmail 
    })
    .then( (data) => {
      const apiUser = data[0];
      res.render('api_key', {
        api_key : apiUser.apiKey
      });
    })
    .catch( (error) => 
      console.log(error)
    );
});

router.post('/delete', async (req, res) => {
  const userEmail = req.body.userEmail;

  await dbClient.remove(
    {
      email: userEmail
    })
    .then((data) => {
      res.redirect('/');
    })
    .catch( (error) => 
      console.log(error)
    );
});


module.exports = router;