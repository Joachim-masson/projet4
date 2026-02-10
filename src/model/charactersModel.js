import db from "./db.js"

export const findAll = async () => {
  try {
    const characters = await db.query("SELECT * FROM characters")
    return characters
  } catch (error) {
    console.error(error)
  }
}

export const findOne = async (id) => {
  try {
    const character = await db.query("SELECT * FROM characters WHERE idcharacters=?", [id])
    return character
  }catch(error) {
    console.error(error)
  }
}

