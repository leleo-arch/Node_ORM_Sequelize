import Sequelize from 'sequelize';
import ConfigDatabase from '../config/database';
import User from '../app/models/User';
import Products from '../app/models/Products';
import Category from '../app/models/Categories';
import mongoose from 'mongoose';

const models = [User, Products, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(ConfigDatabase);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) =>
          model.associate && model.associate(this.connection.models)
      );

  }

  mongo(){

    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/dev-sistema',{
 
    });
    
    };

}

export default new Database();
