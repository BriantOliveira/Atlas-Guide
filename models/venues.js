'use strict';
module.exports = (sequelize, DataTypes) => {
  var Venues = sequelize.define('Venues', {
    venue_name: DataTypes.STRING,
    open_hours: DataTypes.DATE,
    close_hours: DataTypes.DATE,
    google_id: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    venue_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Venues;
};