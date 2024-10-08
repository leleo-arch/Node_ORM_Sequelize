import * as Yup from "yup";
import Category from "../models/Categories";

class CategoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),

    });
 
try{
        await schema.validateSync(request.body, {abortEarly: false})
    } catch (err) {
        return response.status(400).json({error: err.errors })
    }

const {name} = request.body

const categoryExist = await Category.findOne({

  where: {name},

})

if(categoryExist)
{
  return response.status(400).json({error: 'Category já existente'})

}

const categories = Category.create({
  name,
});

    return response.status(201).json(categories)
}

async index(request, response) {
  const categories  = await Category.findAll()
  console.log(request)
  return response.status(201).json(categories)

}

}
export default new CategoryController ();






