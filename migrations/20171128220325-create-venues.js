'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Venue', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      venueName: {
        type: Sequelize.STRING
      },
      openAt: {
        type: Sequelize.DATE
      },
      closeAt: {
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
      venueType: {
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
    return queryInterface.dropTable('Venue');
  }
};
