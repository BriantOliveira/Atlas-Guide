'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
          {id: 1000, eventName: "Alcatraz Prison", startsAt: 9, endsAt: 16, googleId:"ChIJ_6fKaRWBhYARcZfu3AYyc8I", lat: 37.8269775, long: -122.4240498 , address: 'San Francisco, CA 94133' eventType: 'Attraction', createdAt: new Date(), updatedAt: new Date()},
          {id: 1001, eventName: "Golden Gate Bridge", startsAt: 12, endsAt: 23, googleId: "ChIJw____96GhYARCVVwg5cT7c0", lat: 37.8199286, long: -122.4804438, address: "Golden Gate Bridge San Francisco CA USA", eventType: "Attraction", createdAt: new Date(), updatedAt: new Date()},
          {id: 1002, eventName: "California Academy of Science", startsAt: 9, endsAt: 17, googleId: "ChIJj1dmsUOHhYARdbl5ECSpQR8", address: "California Academy of Sciences, 55 Music Concourse Dr, San Francisco, CA 94118", eventType:"Attraction", createdAt: new Date(), updatedAt: new Date()},
          {id: 1003, eventName: "Japonese Tea Garden", startsAt: 9, endsAt: 17, googleId: "ChIJhVvouY-AhYARt6oYQBabsr8", lat: 37.7700914, long: 122.472624717, address: "75 Hagiwara Tea Garden Dr, San Francisco, CA 94102, USA", eventType: "Attraction", createdAt: new Date(), updatedAt: new Date()},


      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Event', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
