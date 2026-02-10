import express from "express";
import router from "./router/router.js";

const app = express();

app.use(express.json())

app.get('/', (req,res) => {
  res.status(200).send(" nous sommes sur la route /");
})

//http://localhost:3310/api
app.use("/api", router)

export default app