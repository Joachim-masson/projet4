import {findAll, findOne, createOne, updateOne, deleteOne} from "../model/charactersModel.js"
import path from "path"
import fs from "fs/promises"

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

export const edit = async (req, res) => {
  const { characterId } = req.params;
  let updateData = { ...req.body };

  try {
    // Si un nouveau fichier est envoyé via Multer
    if (req.file) {
      // 1. Récupérer l'ancien nom de fichier
      const [oldCharacter] = await findOne(characterId);
      
      // 2. Supprimer l'ancienne image du disque
      if (oldCharacter && oldCharacter['portrait-path']) {
        const oldFilePath = path.join(process.cwd(), "public/uploads", oldCharacter['portrait-path']);
        await fs.unlink(oldFilePath).catch(err => console.log("Ancienne image déjà absente"));
      }

      // 3. Ajouter le nouveau nom de fichier aux données à mettre à jour
      updateData['portrait-path'] = req.file.filename;
    }

    const result = await updateOneModel(characterId, updateData);
    res.status(200).json({ message: "Mise à jour effectuée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    res.sendStatus(500);
  }
};

export const addOne = async (req, res) => {
  try{
 // Le chemin de l'image stockée est dans req.file.filename
    const characterData = {
      ...req.body,
      "portrait-path": req.file ? req.file.filename : "default.png"
    };

    const result = await createOne(characterData);
    res.status(201).send(result)
  } catch(error) {
    console.error(error)
    res.sendStatus(500);
  }
}

export const destroy = async (req, res) => {
  const { characterId } = req.params;

  try {
    // 1. On récupère d'abord les infos du personnage pour avoir le nom de l'image
    const [character] = await findOne(characterId);
    
    if (!character) {
      return res.status(404).json({ message: "Personnage non trouvé" });
    }

    // 2. On supprime le fichier physique s'il existe
    if (character['portrait-path']) {
      const filePath = path.join(process.cwd(), "public/uploads", character['portrait-path']);
      
      try {
        await fs.unlink(filePath); // Supprime le fichier
        console.log("Fichier supprimé :", filePath);
      } catch (err) {
        console.error("Le fichier n'existe pas sur le disque, suppression BDD uniquement.");
      }
    }

    // 3. On supprime enfin en BDD
    await deleteOneModel(characterId);
    res.status(200).json({ message: "Personnage et image supprimés avec succès" });
    
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.sendStatus(500);
  }
};