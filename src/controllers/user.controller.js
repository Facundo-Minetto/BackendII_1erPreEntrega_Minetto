import { UserModel } from "../models/user.model.js";
import { createHash, generadorToken, isValidPassword } from "../utils.js";

export const login = async (req, res) => {
    try{
        const { password, email } = req.body; 

        const userFound = await UserModel.findOne({ email }).lean()

        if(isValidPassword(userFound, password)){            
            const token = generadorToken({ email: userFound.email, nombre: userFound.nombre, rol: userFound.rol })
            return res.status(200).cookie('currentUser', token,{ maxAge: 60000, signed: true, httpOnly:true }).json({message:'login OK'})
        }
        return res.status(200).json({message: 'error login'})
    }catch (e){
        return res.json({ message: e })
    }
}

export const register = async (req, res) => {
    try{
        const { first_name, last_name, email, age, password, cart} = req.body;
        const userFound = await UserModel.findOne({ email });
        if(userFound) {
            return res.status(400).json({message: 'ya existe el usuario'})
        }

        const newUser = {
            first_name, 
            last_name, 
            email, 
            age, 
            password: createHash(password)
        }

        const user = await UserModel.create(newUser);
        return res.status(201).json({message: 'usuario creado', user})
    }catch (e){
        return res.status(500).json({message: e})
    }
}