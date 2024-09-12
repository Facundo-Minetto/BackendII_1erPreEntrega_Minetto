import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createHash = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(10))

export const isValidPassword = (user, pass) => bcrypt.compareSync(pass, user.password) // user.password es la contraseña de la bbdd
//user -> buscado en la base de datos -> '$salt.hash'
//pass -> 1234 -> '$salt.hash' -> toma el salt de la contraseña hasheada en la bbdd, y hashea la que manda el usuario para posteriormente comparar los hash

const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);

export const getJWTCookie = (req) => {
    let token = null;
    if(req.signedCookies){
        token = req.signedCookies['currentUser']
    }
    return token
}
export const generadorToken = (user) => {
    const token = jwt.sign(user,process.env.SECRET, {expiresIn: '24h'})
    return token;
}