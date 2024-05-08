import User from "../models/User"
import * as Yup from "yup";

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      password: Yup.string().required().min(6),
      email: Yup.string().email().required(),
    });

    const isValid = (await schema.isValid(request.body))

    if (!isValid) {
     return response
    .status(400)
    .json({ error: "err.errors" });
  }
  
const { email, password } = request.body;

const userExist = await User.findOne({
  where: { email,password },
});

if (!userExist) {
  return response.status(400).json({ error: "usuario existente" });
}
}
}
export default new SessionController();
