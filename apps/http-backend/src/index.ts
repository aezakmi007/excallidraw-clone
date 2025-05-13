import express from "express"
import { middleware } from "./middleware"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./configs"

const app =express()
// app.use(middleware)
app.listen(3000, () => {
    console.log("Server is running on port 3000")
}
)

app.post("/signin", (req, res) => {
    const userid = 1
    let token = jwt.signin ({
        userid
    }, JWT_SECRET)
    res.json({
        token
    })
})

app.post("/signup", (req, res) => {
    console.log("signup")
    let usename = req.body.username
    let password = req.body.password
    let email = req.body.email
    res.json({
        message: "User created",
    })

})

app.post("/room", middleware, (req, res) => {
    res.json({
        roomId: 1234
    })
})