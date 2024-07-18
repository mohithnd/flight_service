const CrudRepository = require("./crud_repository");
const { airplane } = require("../models");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(airplane);
  }
}

module.exports = AirplaneRepository;
