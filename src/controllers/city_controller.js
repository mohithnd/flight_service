const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully Created A City.";
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message = "Something Went Wrong While Creating An City.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

async function destroyCity(req, res) {
  try {
    const city = await CityService.destroyCity(req.params.id);
    SuccessResponse.message = "Successfully Deleted The City With ID.";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message = "Something Went Wrong While Deleting City With ID.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destroyCity,
};
