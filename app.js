const cheerio = require('cheerio')
const fetch = require('node-fetch')
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const controllers = require('./controllers')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/npr', controllers.npr)

app.listen(8000, ()=> console.log('listening to the smooth sounds of npr at port 8000'))

// datascraping from websites
//const $ = cheerio.load('<h2 class="title">Hello world</h2>');
//let classTitle = $('.title');

//console.log(classTitle)
//$('h2.title').text('Hello there!');
// $('h2').addClass('welcome');
//const html = $.html();
//console.log(html)

// const getEspn = async()=> {
//   try {
//   const response = await fetch('https://espn.com')
//   const html = await response.text()
//   // console.log(html)
// 
//   const $ = cheerio.load(html);
//   const moduleHeader = $('.module__header')
//   // check length
//   console.log(moduleHeader.length)
//   console.log(moduleHeader.text())
//   } catch (e){
//     console.error(e)
//   }
// }
// 
// getEspn()
