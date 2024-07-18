"use strict";

const { Op } = require("sequelize");

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
    await queryInterface.bulkInsert("Airplanes", [
      {
        modelNumber: "Boeing 747",
        capacity: 366,
        createdAt: new Date(2022, 5, 15),
        updatedAt: new Date(2023, 8, 22),
      },
      {
        modelNumber: "Airbus A380",
        capacity: 853,
        createdAt: new Date(2021, 2, 10),
        updatedAt: new Date(2024, 0, 5),
      },
      {
        modelNumber: "Embraer E175",
        capacity: 76,
        createdAt: new Date(2023, 9, 30),
        updatedAt: new Date(2024, 3, 12),
      },
      {
        modelNumber: "Bombardier CRJ900",
        capacity: 90,
        createdAt: new Date(2020, 11, 25),
        updatedAt: new Date(2023, 7, 18),
      },
      {
        modelNumber: "Boeing 787 Dreamliner",
        capacity: 330,
        createdAt: new Date(2022, 8, 5),
        updatedAt: new Date(2024, 2, 1),
      },
      {
        modelNumber: "Airbus A320",
        capacity: 180,
        createdAt: new Date(2021, 6, 20),
        updatedAt: new Date(2023, 11, 15),
      },
      {
        modelNumber: "Boeing 737 MAX",
        capacity: 230,
        createdAt: new Date(2023, 1, 8),
        updatedAt: new Date(2024, 4, 30),
      },
      {
        modelNumber: "Cessna Citation CJ4",
        capacity: 10,
        createdAt: new Date(2022, 3, 17),
        updatedAt: new Date(2023, 10, 5),
      },
      {
        modelNumber: "Airbus A350",
        capacity: 350,
        createdAt: new Date(2021, 9, 12),
        updatedAt: new Date(2024, 1, 28),
      },
      {
        modelNumber: "Embraer E190",
        capacity: 114,
        createdAt: new Date(2023, 5, 22),
        updatedAt: new Date(2024, 6, 10),
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
    await queryInterface.bulkDelete("Airplanes", null, {});
  },
};
