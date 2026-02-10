import jwt from "jsonwebtoken"

export const encodeJwt = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h"})
}

export const decodeJWT = (token) => {
  return jwt.decode(token, process.env.TOKEN_SECRET)
}