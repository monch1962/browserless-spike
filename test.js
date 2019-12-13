const express = require('express')
const puppeteer = require('puppeteer-core')

const app = express()

app.get('/testcase/:testCase', async (req, res) => {
    const testcase = req.params.testCase
    return res.end('not yet implemented for testcase ' + testcase)
})

app.get('/image', async (req, res) => {
    // This was puppeteer.launch()
    const browser = await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' })
    const page = await browser.newPage()

    await page.goto('http://www.example.com/')
    const data = await page.screenshot()
    browser.close()

    return res.end(data, 'binary')
})

app.listen(8080)