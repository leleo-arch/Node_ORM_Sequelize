import * as Yup from "yup";
import Products from "../models/Products";

class SessionProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),

    });
 
try{
        await schema.validateSync(request.body, {abortEarly: false})
    } catch (err) {
        return response.status(400).json({error: err.errors })
    }

const {filename: path} = request.file;
const {name, price, category} = request.body

const product = Products.create({
  name,
  price,
  category,
  path,
});

    return response.status(201).json(product)
}

}
export default new SessionProductController ();






