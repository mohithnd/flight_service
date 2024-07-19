const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    ErrorResponse.error = new AppError(
      "Model Number Not Found In The Incoming Request",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

const validateUpdateRequest = (req, res, next) => {
  if (!("capacity" in req.body)) {
    ErrorResponse.error = new AppError(
      "Capacity Not Found In The Incoming Request",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
};
