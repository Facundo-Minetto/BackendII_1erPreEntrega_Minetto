import { model , Schema } from "mongoose";

const userCollection = 'users';

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    cart: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        default: 'user'
    }
})

export const UserModel = model(userCollection, userSchema);