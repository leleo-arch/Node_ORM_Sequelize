import * as Yup from "yup";

class SessionProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.string().email().required(),
      category: Yup.string().email().required(),

      
    });
try{

        await schema.validateSync(request.body, {abortEarly: false})
    } catch (err) {
        return response.status(400).json({error: err.errors })
    }

    return response.status(201).json({message: "ok"})
}



}
export default new SessionProductController ();