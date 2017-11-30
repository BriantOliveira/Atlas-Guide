'use strict';
module.exports = (sequelize, DataTypes) => {
  var Itinerary = sequelize.define('Itinerary', {
    event_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    user_phone_number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Itinerary;
};