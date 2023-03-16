import express from 'express';

//setUp project
let configViewEngine = (app) => {
  app.use(express.static('./src/public'));
  // app use img/css on public folder
  app.set('view engine', 'ejs');//jsp, blade, pug, handlebar
  app.set('views','./src/views');
}

module.exports = configViewEngine;

