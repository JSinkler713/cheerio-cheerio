const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')
const cheerio = require('cheerio')


router.get('/', async(req, res)=> {
  const response = await fetch('https://www.npr.org/sections/health-shots/2020/09/01/816707182/map-tracking-the-spread-of-the-coronavirus-in-the-u-s')
  const html = await response.text()
  const $ = cheerio.load(html)
  const iFrameDiv = $('#res833624014').html()
  const anotherResponse = await fetch('https://www.npr.org/')
  const anotherHtml = await anotherResponse.text()
  const $$ = cheerio.load(anotherHtml)
  const anotherNprStory = $$('.story-wrap').html()
  const weatherResponse = await fetch('https://weather.com/weather/today/l/5b2c46be39eb9b7fc685c9b8018dc90ac51b8401428893251925bff93f607e7f')
  const weatherHtml = await weatherResponse.text()
  const $$$ = cheerio.load(weatherHtml)
  const currentConditionsHeader = $$$('.CurrentConditions--header--3-4zi').html()
  const currentConditionsData = $$$('.TodayDetailsCard--feelsLikeTempValue--2aogo').html()
  console.log(currentConditionsData)
  console.log('***********************')
  res.render('npr', {
    anotherNprStory,
    iFrameDiv,
    currentConditionsHeader,
    currentConditionsData
  })
})


module.exports = router
