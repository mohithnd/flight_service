"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Cities", [
      {
        name: "London",
        createdAt: new Date(2020, 3, 15),
        updatedAt: new Date(2023, 8, 22),
      },
      {
        name: "New York",
        createdAt: new Date(2020, 6, 7),
        updatedAt: new Date(2023, 5, 18),
      },
      {
        name: "Tokyo",
        createdAt: new Date(2021, 1, 28),
        updatedAt: new Date(2023, 11, 5),
      },
      {
        name: "Paris",
        createdAt: new Date(2020, 9, 10),
        updatedAt: new Date(2023, 7, 14),
      },
      {
        name: "Mumbai",
        createdAt: new Date(2021, 4, 3),
        updatedAt: new Date(2024, 0, 20),
      },
      {
        name: "Delhi",
        createdAt: new Date(2020, 11, 12),
        updatedAt: new Date(2023, 10, 30),
      },
      {
        name: "Sydney",
        createdAt: new Date(2021, 2, 8),
        updatedAt: new Date(2023, 9, 17),
      },
      {
        name: "Bangalore",
        createdAt: new Date(2020, 8, 25),
        updatedAt: new Date(2024, 1, 3),
      },
      {
        name: "Dubai",
        createdAt: new Date(2021, 5, 30),
        updatedAt: new Date(2023, 4, 11),
      },
      {
        name: "Chennai",
        createdAt: new Date(2020, 7, 19),
        updatedAt: new Date(2023, 6, 28),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
