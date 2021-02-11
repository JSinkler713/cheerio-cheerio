const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const cheerio = require('cheerio')


router.get('/', async(req, res)=> {
  // scrape npr for coronavirus map
  const response = await fetch('https://www.npr.org/sections/health-shots/2020/09/01/816707182/map-tracking-the-spread-of-the-coronavirus-in-the-u-s')
  const html = await response.text()
  const $ = cheerio.load(html)
  //got text, map looks like it is embedded in iframe
  const storyTitle = $('.storytitle').html()
  console.log(storyTitle)
  console.log('***********************')
  const iFrameDiv = $('#res833624014').html()
  const anotherResponse = await fetch('https://www.npr.org/')
  const anotherHtml = await anotherResponse.text()
  const $$ = cheerio.load(anotherHtml)
  const anotherNprStory = $$('.hp-item').html()
  console.log('***********************')
  console.log(anotherNprStory)
  res.render('npr', {
    anotherNprStory,
    storyTitle,
    iFrameDiv
  })
})


module.exports = router
