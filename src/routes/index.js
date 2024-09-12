import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js"
import ViewRouter from "./views.route.js";
import UsersRouter from "./sessions.route.js";

const app = Router()

app.use(ROUTE_PATH.view, ViewRouter)
app.use(ROUTE_PATH.api_users, UsersRouter)

export default app