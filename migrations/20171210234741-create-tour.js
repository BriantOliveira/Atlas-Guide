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
      tourName: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      tourPoints: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      startsAt: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      endsAt: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      restStop: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      restStartsAt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tourRating: {
        type: Sequelize.INTEGER
      },
      images: {
        type: Sequelize.STRING,
        allowNull: true

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
