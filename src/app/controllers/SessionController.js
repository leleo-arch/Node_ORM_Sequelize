import user from "../models/User";
import * as Yup from "yup";
import jwt from 'jsonwebtoken'

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
      return response.status(400).json({ error: "Senha Incorreta" });
    }

    return response
      .status(201)
      .json({ id: user.id, name: user.name, email, admin: user.admin, 
        token: jwt.sign({id:user.id}, "bebd3d1d989b0ea12ae28f593463d8c0", {expiresIn:'3d',}),
      
      });
  }
}
export default new SessionController();
