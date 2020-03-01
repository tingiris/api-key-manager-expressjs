'use strict';
module.exports = (sequelize, DataTypes) => {
  const api_user = sequelize.define('api_user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    apiKey: DataTypes.STRING
  }, 
  {
      freezeTableName: true
  });

  api_user.associate = function(models) {
    // associations can be defined here
  };
  return api_user;
};