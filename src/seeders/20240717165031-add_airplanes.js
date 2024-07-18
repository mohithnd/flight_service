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
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [
        { modelNumber: "Boeing 787 Dreamliner" },
        { modelNumber: "Embraer E175" },
      ],
    });
  },
};
