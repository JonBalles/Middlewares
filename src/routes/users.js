const router = require("express").Router()
const {login, register} = require("../controllers/usersController")
router
    .get("/login", login)
    .get("/register", register)


module.exports = router