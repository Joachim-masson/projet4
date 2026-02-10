import validateLogin from "../validator/loginValidator.js"
import findByEmail from "../model/userModel.js"
import { verifyPassword } from "../helper/argonHelper.js"

export const login = async (req, res) => {
  console.log("login !")
  try {
    const errors = validateLogin(req.body)
    console.log(errors)
    if(errors) {
      return res.status(401).send(errors)
    }
    console.log(req.body)
    const [ user ] = await findByEmail(req.body.email)
    const passwordVerification = await verifyPassword(req.body.password, user.password)
    if (!passwordVerification){
      return res.status(401).send("Invalid Credentials");
    }
    delete user.password
  } catch(error) {
    console.error(error)
  }
}

