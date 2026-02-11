import {findAll, findOne, createOne, updateOne, deleteOne} from "../model/locationModel.js"
import fs from "fs/promises";
import path from "path";

export const getAll = async (req, res) => {
  try { 
    const [locations] = await findAll()
    res.json(locations);
  } catch(error) {
    res.sendStatus(500);
  }
}

export const getOne = async (req, res) => {
  const {locationId} = req.params
  try{
    if(isNaN(locationId)){
      throw new Error();
    }
    const [location] = await findOne(locationId)
    res.json(location);
  } catch (error){
    res.sendStatus(500)
  }
}

export const edit = async (req, res) => {
  const { locationId } = req.params;
  let updateData = { ...req.body };

  try {
    if (req.file) {
      // 1. On cherche l'ancien lieu pour supprimer l'ancienne image
      const [oldLocation] = await findOne(locationId);
      if (oldLocation && oldLocation['img_path'] && oldLocation['img_path'] !== "default-location.png") {
        const oldFilePath = path.join(process.cwd(), "public/uploads", oldLocation['img_path']);
        await fs.unlink(oldFilePath).catch(() => console.log("Fichier déjà supprimé"));
      }
      // 2. On ajoute le nouveau nom de fichier
      updateData['img_path'] = req.file.filename;
    }

    const result = await updateOne(locationId, updateData);
    if (result.affectedRows === 0) return res.status(404).send("Lieu non trouvé");

    res.status(200).json({ message: "Lieu modifié avec succès !" });
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    res.sendStatus(500);
  }
};

export const addOne = async (req, res) => {
  try {
    const locationData = {
      name: req.body.name,
      // Si une image est présente, on prend son nom, sinon une image par défaut
      "img_path": req.file ? req.file.filename : "default-location.png"
    };

    const result = await createOne(locationData);
    res.status(201).send(result);
  } catch(error) {
    console.error("Erreur lors de l'ajout d'un lieu :", error)
    res.sendStatus(500);
  }
}

export const destroy = async (req, res) => {
  const { locationId } = req.params;

 try {
    const [location] = await findOne(locationId);
    if (!location) return res.status(404).json({ message: "Lieu non trouvé !" });

    // Suppression du fichier sur le disque
    if (location['img_path'] && location['img_path'] !== "default-location.png") {
      const filePath = path.join(process.cwd(), "public/uploads", location['img_path']);
      await fs.unlink(filePath).catch(() => console.log("Fichier physique introuvable"));
    }

    await deleteOne(locationId);
    res.status(200).json({ message: "Lieu supprimé avec succès !" });
    
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.sendStatus(500);
  }
};