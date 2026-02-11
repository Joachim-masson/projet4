import db from "./db.js"

export const createOne = async (location) => {
  const { name, "img_path": imgPath } = location; // On extrait img_path
  const [result] = await db.query(
    "INSERT INTO `location` (name, `img_path`) VALUES (?,?)", 
    [name, imgPath]
  );
  return result;
}

export const findAll = async () => {
  try {
    const locations = await db.query("SELECT * FROM location")
    return locations
  } catch (error) {
    console.error(error)
  }
}

export const findOne = async (id) => {
  try {
    const location = await db.query("SELECT * FROM location WHERE idlocation=?", [id])
    return location
  }catch(error) {
    console.error(error)
  }
}

export const updateOne = async (id, fields) => {
  // 1. On définit les colonnes autorisées (Whitelist)
  const allowedColumns = ['name', 'img_path'];

  // 2. On filtre les clés reçues pour ne garder que les bonnes
  const safeKeys = Object.keys(fields).filter(key => allowedColumns.includes(key));

  // Si aucune clé n'est valide, on s'arrête là
  if (safeKeys.length === 0) {
    return { affectedRows: 0 };
  }

  // 3. On construit la chaîne "col1 = ?, col2 = ?"
  // C'est ici que l'erreur "keys is not defined" arrivait probablement
  const querySet = safeKeys.map(key => `\`${key}\` = ?`).join(', ');

  // 4. On prépare les valeurs dans le bon ordre
  const values = safeKeys.map(key => fields[key]);
  values.push(id); // On ajoute l'ID pour le WHERE à la fin

  // 5. Exécution
  const [result] = await db.query(
    `UPDATE \`location\` SET ${querySet} WHERE idlocation = ?`,
    values
  );

  return result;
};

export const deleteOne = async (id) => {
  try {
    const [result] = await db.query(
      "DELETE FROM `location` WHERE idlocation = ?",
      [id]
    );
    return result;
  } catch (error) {
    console.error("Erreur SQL dans deleteOne:", error);
    throw error;
  }
};