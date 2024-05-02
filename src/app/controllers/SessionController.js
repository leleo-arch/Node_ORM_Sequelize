import * as Yup from 'yup'

class SessionController {

async store(request,response) {

    const schema = Yup.object().shape({
    
        password: Yup.string().required(),
        email: Yup.string().email().required(),

    });

    if(!(await schema.isValid(request.body)))
    return response.status(400).json({error: 'err.errors' })

}

}

    export default new SessionController ()