import user from "../models/User";
import * as Yup from "yup";

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      password: Yup.string().required().min(6),
      email: Yup.string().email().required(),
    });

    const isValid = await schema.isValid(request.body);

    if (!isValid) {
      return response.status(400).json({ error: "err.errors" });
    }

    const { email, password } = request.body;

    const userExist = await user.findOne({
      where: { email },
    });

    if (!userExist) {
      return response
        .status(400)
        .json({ error: "usuario ou e-mail ja cadastrado" });
    }

    const isSamPassworld = user.comparePassaworld(password);

    if (isSamPassworld) {
      return response.status(400).json({ error: "err.errors" });
    }

    return response
      .status(201)
      .json({ id: user.id, name: user.name, email, admin: user.admin });
  }
}
export default new SessionController();
