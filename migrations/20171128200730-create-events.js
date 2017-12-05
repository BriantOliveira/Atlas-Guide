'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Event', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      happensOn: {
        type: Sequelize.DATEONLY
      },
      startsAt: {
        type: Sequelize.DATE
      },
      endsAt: {
        type: Sequelize.DATE
      },
      googleId: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DECIMAL
      },
      long: {
        type: Sequelize.DECIMAL
      },
      address: {
        type: Sequelize.STRING
      },
      eventType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Event');
  }
};
