import db from "./db.js"

export const creatOne = async (character) => {
  const {name, portraitPath, age, occupation, description} = character
  const [result] = await db.query("INSERT INTO `characters` (name, portrait-Path, age, occupation, description) VALUES (?,?,?,?,?)", [name, portraitPath, age, occupation, description])
  return result
}

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

