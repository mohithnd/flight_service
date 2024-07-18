const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const { AppError } = require("../utils/errors");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const response = await airplaneRepository.create(data);
    return response;
  } catch (err) {
    if (err.name == "SequelizeValidationError") {
      let explanation = [];
      err.errors.forEach((item) => {
        explanation.push(item.message);
      });

      throw new AppError(explanation.join(", "), StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot Create A New Airplane Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (err) {
    throw new AppError(
      "Cannot Fetch Data of All The Airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
};
