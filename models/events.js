'use strict';
module.exports = (sequelize, DataTypes) => {
  var Events = sequelize.define('Events', {
    event_name: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    google_id: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    long: DataTypes.DECIMAL,
    address: DataTypes.STRING,
    event_type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Events;
};