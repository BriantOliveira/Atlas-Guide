'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    first: {type: DataTypes.STRING, allowNull: false},
    last: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: DataTypes.STRING,
    pictures: DataTypes.STRING,
    bio: DataTypes.TEXT
  });

  User.associate = function (models) {
    //User.hasMany(models.Itinerary);
  };
  return User;
};
