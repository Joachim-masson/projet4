import {readOne, readAll, createOne, updateOne, deleteOne } from "../model/userModel.js"
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

export const edit = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await updateOne(id, req.body);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204); // Succès, pas de contenu à renvoyer
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await deleteOne(id);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};