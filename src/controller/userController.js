import {readOne, readAll, createOne } from "../model/userModel.js"
import { validateUser } from "../validator/userValidator.js"
import { hashPassword } from "../helper/argonHelper.js"

export const browseAll = async (req, res) => {
    try { 
    const [users] = await readAll()
    res.json(users);
  } catch(error) {
    res.sendStatus(500);
  }
}

export const getOne = async (req, res) => {
  const userId = parseInt(req.params.id)
  const[user] = await readOne(userId)
  res.json(user)
}

export const addOne =async (req, res) => {
  try {
    const errors = validateUser(req.body)
    if(errors) {
      return res.status(401).send(errors)
    }
    const hashedPassword = await hashPassword(req.body.password)
    console.log(hashedPassword);

    const result = await createOne({...req.body, hashpassword: hashedPassword})
    res.status(201).send(result)
  } catch(error) {
    console.error(error)
    res.sendStatus(500);
  }
}