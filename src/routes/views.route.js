import { Router } from "express";

const app = Router()


app.get("/login", (req, res) => {
    if(!req.signedCookies.currentUser){
        return  res.render('login')
    }
    return res.redirect('/users/current')    
})

app.get("/current", (req, res) => {
    if(req.signedCookies.currentUser){
        return  res.render('current')
    }
    return res.redirect('/users/login')
})

export default app;