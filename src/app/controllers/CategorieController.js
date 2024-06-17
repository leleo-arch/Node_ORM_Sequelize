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

const product = Category.create({
  name,
});

    return response.status(201).json(product)
}

async index(request, response) {
  const products = await Category.findAll()
  console.log(request)
  return response.status(201).json(products)

}

}
export default new CategoryController ();






