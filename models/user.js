'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {

    first: {type: DataTypes.STRING, allowNull: true},
    last: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true, allowNull:true},
    password: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: DataTypes.STRING,
    pictures: DataTypes.STRING,
    bio: DataTypes.TEXT
  });

  User.associate = function (models) {
    User.hasMany(models.Itinerary, {as: 'itinerary', foreignKey: 'userId'});
    User.hasMany(models.Tour, {as: 'tour', foreignKey: 'userId'});
  };
  return User;
};
