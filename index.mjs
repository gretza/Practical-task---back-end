import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { registerController } from './controllers/registerController.mjs';
import { userInfoController } from './controllers/userInfoController.mjs';
import { loginController } from './controllers/loginController.mjs';

dotenv.config();

const app = express()
const port = process.env.PORT

const bodyParser = express.json();
const corsMiddleware = cors();

app.use(bodyParser);
app.use(corsMiddleware);

app.get("/api/home", userInfoController);
app.post("/api/register", registerController);
app.post("/api/login", loginController)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})