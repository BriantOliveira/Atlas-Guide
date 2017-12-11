'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendorId: {
        type: Sequelize.STRING
      },
      tourPoint: {
        type: Sequelize.TEXT
      },
      restStop: {
        type: Sequelize.TEXT
      },
      restStartsAt: {
        type: Sequelize.STRING
      },
      tourRating: {
        type: Sequelize.INTEGER
      },
      imageLocation: {
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
    return queryInterface.dropTable('Tours');
  }
};