import express from "express";
import router from "./router/router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(cors({
  origin: [
    process.env.FRONTEND_URL, 
    //"http://mysite.com",
    //"http://another-domaine",
  ],
  credentials: true, // Autorise les cookies avec les requêtes CORS
}))

//Pour l'utilisation de Multer et le stockage des images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// On rend le dossier "public" accessible via l'URL /public
// Si tu veux accéder directement via /uploads, utilise : app.use("/uploads", ...)
app.use("/uploads", express.static(path.join(__dirname, "..", "public", "uploads")));


// bodyParser 
app.use(express.json()) // pour remplir le req.body
app.use(cookieParser())

//http://localhost:3310/
app.get('/', (req,res) => {
  res.status(200).send(" nous sommes sur la route /");
})

//http://localhost:3310/api
app.use("/api", router)



export default app