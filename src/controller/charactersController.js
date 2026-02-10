import {findAll, findOne} from "../model/charactersModel.js"

export const getAll = async (req, res) => {
  try { 
    const [characters] = await findAll()
    res.json(characters);
  } catch(error) {
    res.sendStatus(500);
  }
}

export const getOne = async (req, res) => {
  const {characterId} = req.params
  try{
    if(isNaN(characterId)){
      throw new Error();
    }
    const [character] = await findOne(characterId)
    res.json(character);
  } catch (error){
    res.sendStatus(500)
  }
}



