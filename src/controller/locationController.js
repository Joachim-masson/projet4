import {findAll, findOne, createOne, updateOne, deleteOne, findCharactersByLocation, linkCharactersToLocation} from "../model/locationModel.js"
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

//Route pour avoir les personnages en fonction du lieu
export const getCharactersByLocation = async (req, res) => {
  const { id } = req.params
  try{
    if(isNaN(id)){
      return res.status(400).send("L'ID doit être un nombre");
    }
    const [charLoc] = await findCharactersByLocation(id)
    res.json(charLoc);
  } catch (error){
    res.sendStatus(500)
  }
}


export const edit = async (req, res) => {
  const { locationId } = req.params;
  let updateData = { ...req.body };

  try {
    // 1. Gestion de l'image (ton code actuel)
    if (req.file) {
      const [oldLocation] = await findOne(locationId);
      if (oldLocation && oldLocation['img_path'] && oldLocation['img_path'] !== "default.webp") {
        const oldFilePath = path.join(process.cwd(), "public/uploads", oldLocation['img_path']);
        await fs.unlink(oldFilePath).catch(() => console.log("Fichier déjà supprimé"));
      }
      updateData['img_path'] = req.file.filename;
    }

    // 2. Mise à jour de la table location
    await updateOne(locationId, updateData);

    // 3. Mise à jour des liens personnages
    if (req.body.characterIds) {
      const charIds = req.body.characterIds.split(',').map(Number);
      await linkCharactersToLocation(locationId, charIds);
    }

    // 4. RÉCUPÉRATION DU LIEU MIS À JOUR (Indispensable pour le Front)
    const [updatedLocation] = await findOne(locationId);
    
    // On renvoie l'objet complet
    res.status(200).json(updatedLocation);

  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    res.sendStatus(500);
  }
};

export const addOne = async (req, res) => {
  try {
    const locationData = {
      name: req.body.name,
      img_path: req.file ? req.file.filename : "default.webp"
    };

    const result = await createOne(locationData);
    const newLocationId = result.insertId;

    // Si des personnages sont envoyés (format "1,2,3")
    if (req.body.characterIds && req.body.characterIds.trim() !== "") {
      const charIds = req.body.characterIds.split(',').map(Number);
      await linkCharactersToLocation(newLocationId, charIds);
    }

    res.status(201).json({ idlocation: newLocationId, ...locationData });
  } catch(error) {
    console.error("Erreur détaillée addOne location:", error);
    res.sendStatus(500);
  }
};

export const destroy = async (req, res) => {
  const { locationId } = req.params;

 try {
    if (!locationId || locationId === "undefined") {
      return res.status(400).json({ message: "ID de lieu manquant ou invalide" });
    }

    const [location] = await findOne(locationId);
    if (!location) return res.status(404).json({ message: "Lieu non trouvé !" });

    // Suppression du fichier sur le disque
    if (location['img_path'] && location['img_path'] !== "default.webp") {
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