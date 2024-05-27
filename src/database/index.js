import Sequelize from 'sequelize'
import User from '../app/models/User'
import ConfigDatabase from "../config/database"
import Products from '../app/models/Products'



const models = [User, Products]

class Database {

    constructor() {
        this.init()
    }


init() {

    this.connection = new Sequelize(ConfigDatabase)
    models.map((model) => model.init(this.connection))
}                                                                                                                                                                                                                       

}

export default new Database()