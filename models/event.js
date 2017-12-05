'use strict';
module.exports = (sequelize, DataTypes) => {
    var Event = sequelize.define('Event', {

        eventName: DataTypes.STRING,
        happensOn: DataTypes.DATEONLY, // happensOn - startsAt
        startsAt: DataTypes.DATE, //startsAt
        endsAt: DataTypes.DATE,
        googleId: DataTypes.STRING,
        lat: DataTypes.DECIMAL,
        long: DataTypes.DECIMAL,
        address: DataTypes.STRING,
        eventType: DataTypes.STRING
    });

    Event.associate = function (models) {
        Event.belongsTo(models.Venue);
    };

    return Event;
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
