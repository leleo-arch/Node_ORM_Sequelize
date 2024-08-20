import User from "../models/User";
import * as Yup from "yup";
import jwt from 'jsonwebtoken';
import authConfig from "../../config/auth";

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
      console.log('Validation failed');
      return emailInPasswordIncorrect();
    }

    const { email, password } = request.body;

    console.log('Request body:', request.body);

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      console.log('User not found');
      return emailInPasswordIncorrect();
    }

    console.log('User found:', user);

    if (!(await user.checkPassword(password))) {
      console.log('Password incorrect');
      return emailInPasswordIncorrect();
    }

    console.log('Password correct');

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
      token: jwt.sign(
        { id: user.id },
        authConfig.secret,
        {
          expiresIn:'5',
        }
      ),
    });
    
  }
}

export default new SessionController();
