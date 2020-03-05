const DialogDB = require('@dabblelab/dialogdb');

const getKey = async (email) => {
  let apiKey;

  await DialogDB.sendApiKey(email)
    .then( (key_status) => {
      console.log(key_status);
    }).catch( (error) => {
      console.log(error.message);
    });

  return apiKey;
}

getKey("mark@dabblelab.com");

const client = new DialogDB.DialogDBApiClient({
  apiKey : "3qO2RzPpN9W3p54RuYAuJCRy7cNVDjlyG8l78/H4",
  // apiKey : getKey("mark@dabblelab.com"),
  tableName : "Users"
});

module.exports = client;