import {findAll, findOne, createOne, updateOne, deleteOne} from "../model/locationModel.js"

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
  const locationData = req.body;

  try {
    // On appelle le model avec l'ID et les données
    const result = await updateOne(locationId, locationData);

    // Si "affectedRows" est égal à 0, c'est que l'ID n'existe pas en base
    if (result.affectedRows === 0) {
      return res.status(404).send("Lieu non trouvé");
    }

    // On renvoie un code 204 (No Content) ou 200 (OK)
    res.status(200).json({ message: "Lieu modifié avec succès !" });
    
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
    res.sendStatus(500);
  }
};

export const addOne = async (req, res) => {
  try{
    const result = await createOne(req.body)
    res.status(201).send(result)
  } catch(error) {
    console.error(error)
    res.sendStatus(500);
  }
}

export const destroy = async (req, res) => {
  const { locationId } = req.params;

  try {
    const result = await deleteOne(locationId);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Lieu non trouvé !" });
    }

    // 204 No Content est le code standard pour une suppression réussie sans retour de données
    // Ou 200 avec un message JSON pour confirmer
    res.status(200).json({ message: "Lieu supprimé avec succès !" });
    
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.sendStatus(500);
  }
};