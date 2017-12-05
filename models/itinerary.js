'use strict';
module.exports = (sequelize, DataTypes) => {
  var Itinerary = sequelize.define('Itinerary', {
    eventId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    userPhoneNumber: DataTypes.STRING,
    CityName: DataTypes.STRING
});

Itinerary.associate = function (models) {
    Itinerary.belongsTo(models.User);
    Itinerary.hasMany(models.Event);
    Itinerary.hasMany(models.Venue);
};
  return Itinerary;
};
