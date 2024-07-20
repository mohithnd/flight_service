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

async function destroyCity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
  } catch (err) {
    if (err.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The City You Requested To Delete Is Not Present",
        err.statusCode
      );
    }

    throw new AppError(
      "Cannot Delete The City With This ID",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);
    return city;
  } catch (err) {
    if (err.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The City You Requested To Update Is Not Present",
        err.statusCode
      );
    }
    if (err.name == "SequelizeUniqueConstraintError") {
      let explanation = [];
      err.errors.forEach((item) => {
        explanation.push(item.message);
      });

      throw new AppError(explanation.join(", "), StatusCodes.BAD_REQUEST);
    }

    throw new AppError(
      "Cannot Update The City With This ID",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createCity,
  destroyCity,
  updateCity,
};
