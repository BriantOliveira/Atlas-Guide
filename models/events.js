'use strict';
module.exports = (sequelize, DataTypes) => {
    var Events = sequelize.define('Events', {
        event_name: DataTypes.STRING,
        date: DataTypes.DATEONLY, // happensOn - startsAt
        start_time: DataTypes.DATE, //startsAt
        end_time: DataTypes.DATE,
        google_id: DataTypes.STRING,
        lat: DataTypes.DECIMAL,
        long: DataTypes.DECIMAL,
        address: DataTypes.STRING,
        event_type: DataTypes.STRING
    });

    Events.associate = function (models) {

    };

    return Events;
}


// models - signular user.js, User
// happensOn, startsAt, publishedAt, cancelledOn
// JS variables camelCase
// Association id columns need an index?
// OOP classmethod initilization
// Separate vendor code from your code - add through bower
// remove extra files/folders
// Order of front end assets so your code extends vendor code (not the other way around)
// consistent 4 or 2 spaces tabs.
// mix es5-es6 - be consistent

// yagni You Are Not Going to Need It and Outside-In coding View -> Controller -> Model
// branches for all new features
