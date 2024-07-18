import express from "express"
const mainRouter=express.Router()
import {postLogin,postSignup} from "./controller.js";
mainRouter.post("/login",postLogin)
mainRouter.post("/signup",postSignup)

export default mainRouter