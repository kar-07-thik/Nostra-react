const express = require("express")
const CORS = require("cors")
const App = express()
App.use(CORS())
let UserArr = []
App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.post("/Signup", function (req, res) {
    UserArr.push(req.body)
    console.log(UserArr)

})
App.post("/Login", function (req, res) {
    
console.log(req.body)
    const user = UserArr.find(function (u) {
        return u.Email == req.body.Loginemail && u.Password == req.body.Loginpass
    })
    if (user) {
        res.send(true)
    }
    else {
        res.send(false)
    }
})
App.listen(5000, function () {
    console.log("Start server...")
})