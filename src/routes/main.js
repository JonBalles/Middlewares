const router = require("express").Router()
const { index, admin, errorAdmin } = require("../controllers/mainController")
const accessAdmin = require('../middlewares/accessAdmin')
router
    .get('/', index)
    .get('/admin', accessAdmin ,admin)
    .get('/erroradmin', errorAdmin)


module.exports = router