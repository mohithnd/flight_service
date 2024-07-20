const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repositories");
const { AppError } = require("../utils/errors");

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const response = await cityRepository.create(data);
    return response;
  } catch (err) {
    if (err.name == "SequelizeUniqueConstraintError") {
      let explanation = [];
      err.errors.forEach((item) => {
        explanation.push(item.message);
      });

      throw new AppError(explanation.join(", "), StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot Create A New City Object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
};
