'use strict';
const faker= require('faker');
const movie_names = require(__dirname + '/moviedatabase.json').GetMovies;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   
   const builk =movie_names.map(e=>{
     return {
       title :  e,
       description : faker.lorem.words(),
       enabled   : true,
       createdAt: new Date(), updatedAt: new Date()
     }
   })

   await queryInterface.bulkInsert('Movies', builk, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
