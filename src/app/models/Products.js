import Sequelize, { Model } from "sequelize";

class Products extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        price: Sequelize.STRING,
        path: Sequelize.STRING,
        
      },

      {
        sequelize,
      }
    );

    return this
  }

  static associate(models){
    this.belongsTo(models.Category,{foreignKey: 'category_id', as: 'category',

  });
    
}


}


export default Products;
