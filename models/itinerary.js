'use strict';
module.exports = (sequelize, DataTypes) => {
  var Itinerary = sequelize.define('Itinerary', {
    event_id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    venue_id: DataTypes.INTEGER,
    user_phone_number: DataTypes.STRING
});

Itinerary.associate = function (models) {
    Itinerary.belongsTo(models.Users);
    Itinerary.hasMany(models.Events);
    Itinerary.hasMany(models.Events);
};
  return Itinerary;
};
