const admins = ['Ada', 'Tim', 'Vim', 'Greta']

module.exports = (req, res, next) => {
if(admins.includes(req.query.admin)){
    next()
}
return res.redirect('/erroradmin')
}