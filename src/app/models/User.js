import Sequelize, {Model} from "sequelize"
import bcrypt from 'bcrypt'
import { password } from "../../config/database"


class Products extends Model {
    static init(sequelize){
        super.init (
            {
         
             name: Sequelize.STRING,
             email: Sequelize.STRING,
             password: Sequelize.VIRTUAL,
             password_hash: Sequelize.STRING,
             admin: Sequelize.BOOLEAN, 
            
            },
              
            {
                sequelize,
            }
       )

       this.addHook('beforeSave', async (user) => {
        if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 30)
        }

       })
        return this 
    }

comparePassaworld () {
    bcrypt.compare(password, this.password_hash)

}
}

export default Products