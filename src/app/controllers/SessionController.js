import User from "../models/User";
import * as Yup from "yup";
import jwt from 'jsonwebtoken';
import autocoConfig from "../../config/auth"

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    const emailInPasswordIncorrect = () => {
      return response.status(401).json({ error: "Senha ou E-mail incorretos" });
    };

    if (!(await schema.isValid(request.body))) {
      return emailInPasswordIncorrect();
    }

    const { email, password } = request.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return emailInPasswordIncorrect();
    }

    if (!(await user.CheckPassword(password))) {  // Ensure method name is correct
      return emailInPasswordIncorrect()
    };

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
      token: jwt.sign(
        { id: user.id }, autocoConfig.secret,{
        expiresIn: autocoConfig.expiresIn}
      ),
    });
  }
}

export default new SessionController();
