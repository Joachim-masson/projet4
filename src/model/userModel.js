import db from "./db.js"

export const createOne = async (user) => {
  const {name, email, hashPassword, habilitation} = user
  const [result] = await db.query("INSERT INTO `users` (name, email, hashpassword, habilitation) VALUES (?,?,?,?)", [name, email, hashPassword, habilitation])
  return result
}

// requete pour lire un seul utilisateur
export const readOne = async (id) => {
  try {
    const [user] = await db.query("SELECT * FROM `users` WHERE idusers=?",[id])
    return user
  } catch (error){
    console.error(error)
  }
}

export const readAll = async () => {
  try {
    const users = await db.query("SELECT * FROM users")
    return users
  } catch (error){
    console.error(error)
  }
}

export const findByEmail = async (email) => {
  try {
    const [user] = await db.query(`SELECT * FROM users WHERE email = ?`, [email])
    return user
  } catch (error){
    console.error(error)
  }
}

export const updateOne = async () => {}

export const deleteOne = async () => {}