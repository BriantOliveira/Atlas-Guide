'use strict';
module.exports = (sequelize, DataTypes) => {
    
  var Venue = sequelize.define('Venue', {
    venueName: DataTypes.STRING,
    openAt: DataTypes.DATE,
    closeAt: DataTypes.DATE,
    googleId: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    venueType: DataTypes.STRING
  });

  Venue.associate = function (models) {
      Venue.hasMany(models.Event);
  }
  return Venue;
};
