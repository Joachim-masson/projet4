import { validateLogin } from "../validator/loginValidator.js"
import { findByEmail } from "../model/userModel.js"
import { verifyPassword } from "../helper/argonHelper.js"
import { encodeJwt } from "../helper/jwtHelper.js"
import { decodeJWT } from "../helper/jwtHelper.js";

export const login = async (req, res) => {
  console.log("Tentative de connexion...")
  try {
    //1. Validation Joi
    const errors = validateLogin(req.body)
    if(errors) {
      return res.status(400).send(errors)
    }

    //2. Recherche de l'utilisateur
    const [ user ] = await findByEmail(req.body.email);

    // IMPORTANT : Vérifier si l'utilisateur existe avant de continuer
    if (!user) {
      console.log("Utilisateur non trouvé");
      return res.status(401).send("Invalid Credentials")
    }

    //3. Vérification du mot de passe (Ordre : HASH d'abord, PLAIN après)
    const passwordVerification = await verifyPassword(user.hashpassword, req.body.password )
    if (!passwordVerification){
      console.log("Mot de passe incorrect");
      return res.status(401).send("Invalid Credentials");
    }

    //4. Succès
    console.log("Connexion réussie !");
    delete user.hashpassword // On supprime le hash avant de renvoyer l'objet (sécurité)
    //Création du JWT
    const token = encodeJwt(user)
    res.cookie("auth_token", `Bearer ${token}`,
      {
        httpOnly: true,
        secure: false
      }
    )
    // N'oublie pas de renvoyer une réponse au client, sinon le navigateur va "mouliner"
    return res.status(200).json({ message: "Welcome!", user });
  } catch(error) {
    console.error("Erreur serveur lors du login :", error);
    return res.status(500).send("Internal Server Error");
  }
}

export const checkAuth = async (req, res) => {
  // 1. Récupérer le token du cookie
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    // 2. Nettoyer le string "Bearer ..." pour n'avoir que le hash
    const pureToken = token.replace("Bearer ", "");
    
    // 3. Décoder le JWT
    const decoded = decodeJWT(pureToken);
    
    // 4. Renvoyer les données utilisateur contenues dans le payload du JWT
    // On enlève le mot de passe par sécurité s'il y est
    delete decoded.hashpassword;
    delete decoded.iat;
    delete decoded.exp;

    return res.status(200).json(decoded);
  } catch (err) {
    return res.sendStatus(401);
  }
};

export const logout = (req, res) => {
  // On supprime le cookie "auth_token"
  res.clearCookie("auth_token");
  res.status(200).json({ message: "User logged out" });
};