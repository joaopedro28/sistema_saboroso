var conn = require('./../inc/db');
var express = require('express');
var menus = require('./../inc/menus');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  menus.getMenus().then(results => {
    res.render(`index`, {
      title: 'Restaurante Saboroso!',
      menus: results  
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

  res.render('reservation', { 
    title: 'Reservas | Restaurante Saboroso!',
    background: 'images/img_bg_2.jpg',
    h1: 'Diga um oi NO reservaai  MAGRÃO'
  })
})
router.get('/services', function(req, res, next){

  res.render('services', { 
    title: 'Serviços | Restaurante Saboroso!',
    background: 'images/img_bg_1.jpg',
    h1: 'Diga um oi NO SERVIÇOS MAGRÃO'
  })
  
})
module.exports = router;
