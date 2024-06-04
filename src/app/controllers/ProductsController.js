import * as Yup from "yup";

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

const file = request.file
console.log(file)

    return response.status(201).json({message: true})
}

}
export default new SessionProductController ();






