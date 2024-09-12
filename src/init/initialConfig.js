import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import passport from "passport";
import router from "../routes/index.js"
import { create } from "express-handlebars";
import { __dirname } from "../utils.js";
import { connectionDB } from "../mongo/connection.js";
import initializePassport from "../passport/jwt.passport.js";





export const AppInit = (app) => {
    dotenv.config()
    connectionDB();
    const hbs = create();
    app.use(cookieParser(process.env.SECRET))
    initializePassport();
    app.use(passport.initialize());
    app.engine('handlebars', hbs.engine);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'handlebars');
    app.use(express.static(__dirname + '/public'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use("/", router);
}