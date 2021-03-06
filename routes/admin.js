var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();
var users = require('./../inc/users');

router.get('/', function(req, res, next) {

    res.render(`admin/index`, {
    })
});

router.get('/login', function(req, res, next) {
    
    users.render(req, res, null);
});
router.post('/login', function(req, res, next) {
    
    if(!req.body.email){
        users.render(req, res, "preenche ai o email po")
    } else if(!req.body.password) {
        users.render(req, res, "a senhaaaaaaaaaa")
    } else {
        users.login(req.body.email, req.body.password).then(user => {

            req.session.user = user;

            res.redirect("/admin")
        }).catch(err=>{
            users.render(req, res, err.message || err)
        })
    }
    
});

router.get('/contacts', function(req, res, next) {
    res.render(`admin/contacts`, {
    })
});

router.get('/emails', function(req, res, next) {
    res.render(`admin/emails`, {
    })
});

router.get('/menus', function(req, res, next) {
    res.render(`admin/menus`, {
    })
});

router.get('/users', function(req, res, next) {
    res.render(`admin/users`, {
    })
});

router.get('/reservations', function(req, res, next) {
    res.render(`admin/reservations`, {
        date:{}
    })
});
module.exports = router;