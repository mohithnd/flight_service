const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Successfully Created An Airplane.";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message = "Something Went Wrong While Creating An Airplane.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

async function getAirplanes(req, res) {
  try {
    const airplanes = await AirplaneService.getAirplanes();
    SuccessResponse.message = "Successfully Fetched All Airplanes.";
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message =
      "Something Went Wrong While Fetching All Airplanes.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.message = "Successfully Fetched The Airplane With ID.";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message =
      "Something Went Wrong While Fetching Airplane With ID.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

async function destroyAirplane(req, res) {
  try {
    const airplane = await AirplaneService.destroyAirplane(req.params.id);
    SuccessResponse.message = "Successfully Deleted The Airplane With ID.";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message =
      "Something Went Wrong While Deleting Airplane With ID.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await AirplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    SuccessResponse.message = "Successfully Updated The Airplane With ID.";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message =
      "Something Went Wrong While Updating Airplane With ID.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane,
};
