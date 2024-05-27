import Sequelize, {Model} from "sequelize"

class Products extends Model {
     static init(sequelize){
        super.init (
            {
         
             name: Sequelize.STRING,
             price: Sequelize.STRING,
             path: Sequelize.STRING,
             category: Sequelize.STRING,            
            },
              
            {
                sequelize,
            }
       )
    }

}

export default Products;