var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var reservations = require('./../inc/reservations');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results => {
    res.render(`index`, {
      title: 'Restaurante Saboroso!',
      menus: results  ,
      isHome: true
    })
  })
});

router.get('/contact', function(req, res, next){

  res.render('contact', { 
    title: 'Contato | Restaurante Saboroso!',
    background: 'images/img_bg_2.jpg',
    h1: 'Diga um oi NO CONTATO MAGRÃO'
  })
})
router.get('/menu', function(req, res, next){
  menus.getMenus().then(results => {
    res.render('menu', { 
      title: 'Menus | Restaurante Saboroso!',
      background: 'images/img_bg_3.jpg',
      h1: 'Diga um oi NO MENU RAPA',
      menus: results
    })
  })
})
router.get('/reservation', function(req, res, next){

  reservations.render(req, res);
  
})


router.post('/reservation', function(req, res, next){
  if(!req.body.name) {
    reservations.render(req, res, "Digite o nome");
  } else if(!req.body.email) {
    reservations.render(req, res, "Digite o email")
  } else if(!req.body.people) {
    reservations.render(req, res, "Digite o nº de pessoas");
  } else if(!req.body.date) {
    reservations.render(req, res, "Digite a data");
  } else if(!req.body.time) {
    reservations.render(req, res, "Digite a hora");
  } else {
    reservations.save(req.body).then(results => {
      req.body = {}
      reservations.render(req, res, null, "Reserva Realizada");

    }).catch(err => {
      
      reservations.render(req, res, err.message);
    
    });
  }  
})

router.get('/services', function(req, res, next){

  res.render('services', { 
    title: 'Serviços | Restaurante Saboroso!',
    background: 'images/img_bg_1.jpg',
    h1: 'Diga um oi NO SERVIÇOS MAGRÃO'
  })
})
module.exports = router;
