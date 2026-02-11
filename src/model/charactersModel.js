import db from "./db.js"

export const createOne = async (character) => {
  const {name, portrait_path, age, occupation, description} = character
  const [result] = await db.query("INSERT INTO `characters` (name, `portrait_path`, age, occupation, description) VALUES (?,?,?,?,?)", [name, portrait_path, age, occupation, description])
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

export const updateOne = async (id, fields) => {
  // 1. On définit les colonnes autorisées (Whitelist)
  const allowedColumns = ['name', 'portrait_path', 'age', 'occupation', 'description'];

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
    `UPDATE \`characters\` SET ${querySet} WHERE idcharacters = ?`,
    values
  );

  return result;
};

export const deleteOne = async (id) => {
  try {
    const [result] = await db.query(
      "DELETE FROM `characters` WHERE idcharacters = ?",
      [id]
    );
    return result;
  } catch (error) {
    console.error("Erreur SQL dans deleteOne:", error);
    throw error;
  }
};