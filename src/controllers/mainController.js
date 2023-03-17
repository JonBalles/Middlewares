module.exports = {
index : (req, res) => res.render('index'),
admin : (req, res) => res.render('admin', { admin: req.query.admin }),
errorAdmin : (req, res) => res.render('adminError')
}