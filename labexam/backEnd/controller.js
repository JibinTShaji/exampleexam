import { user_model } from "./user_model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

let token



export const postSignup = async (req, res) => {
    console.log("signup works");
    const { name, email, password } = req.body
    let hashedpwd = bcrypt.hashSync(password, 10)
    console.log("hashedpwd", hashedpwd);

    let user = new user_model({
        username: name,
        email: email,
        password: hashedpwd,
    })
    await user.save()

    res.json({ msg: "success" })

}


export const postLogin = async (req, res) => {
    console.log("Login Works");
    const { email, password } = req.body
    console.log("pwd,email", email, password);
    let user = await user_model.findOne({ email: email }).lean({})
    console.log("login user", user);

    if (user.email == email) {
        console.log("email crt");
        if (bcrypt.compareSync(password, user.password)) {
            token = jwt.sign(user, "secret", { expiresIn: "1d" })
           console.log("token:",token);
            res.json({ msg: "success" })

        }
        else {
            res.json({ msg: "password incorrect" })
        }
    }
    else {
        res.json({ msg: "email incorrect" })
    }
}