import Joi from "joi";

export const validateUser = (user) => {
  
  const result = Joi.object({
    name: Joi.string().min(3).max(100).presence("required"),
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(100).presence("required"),
    })
    .required()
    .unknown(true) // pour permettre d'ignorer les clés non définies comme "habilitation"
    .validate(user, { abortEarly: false }).error

    if(result) {
      const errorMessage = result.details.map((error) => ({
        message : error.message
      }))
      return {
        errorCount: result.details.length,
        errorMessage
      }
    }
    return false
}

