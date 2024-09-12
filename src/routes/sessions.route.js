import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
import { invokePassport } from "../middlewares/handlerError.js";
import { handleAuth } from "../middlewares/handleAuth.js";

const app = Router();

app.post("/login", login)

app.post("/register", register)

app.get("/current", invokePassport('jwt'), handleAuth('user', 'admin'), (req, res) => {
    res.send(req.user)
})


export default app;


















// puede servir 
// app.post("/login", (req, res) => {
//     //validamos en nuestra bd si el usuario existe

//     const token = generadorToken({nombre: "Facundo", apellido: "Minetto"})
//     res.json({message: "fue un exito", token})
// })

// app.get("/users", decodeToken, (req, res) => {
//     res.json({usuario: req.user})
// })