import Joi from "joi";

export const validatelogin = (user) => {
  
  const result = Joi.object({
    email: Joi.string().email().presence("required"),
    password: Joi.string().min(8).max(100).presence("required"),
    })
    .required()
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