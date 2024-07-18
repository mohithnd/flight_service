const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(id) {
    try {
      const response = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      Logger.error("Something Went Wrong In The CRUD Repo : destroy");
      throw err;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findByPk(id);
      return response;
    } catch (err) {
      Logger.error("Something Went Wrong In The CRUD Repo : get");
      throw err;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (err) {
      Logger.error("Something Went Wrong In The CRUD Repo : getAll");
      throw err;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (err) {
      Logger.error("Something Went Wrong In The CRUD Repo : update");
      throw err;
    }
  }
}

module.exports = CrudRepository;
