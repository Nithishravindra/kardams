#!/usr/bin/env node
"use strict"
const request = require('request');
const cheerio = require('cheerio');

request('https://www.tnagrisnet.tn.gov.in/ARS/home/reservoir', (response, error, html) => {

    const $ = cheerio.load(html)

    const heading = $('.text-center')
    const date = heading.children().text()
    let x = date.split('-')

    let result = {
        Title: heading.html(),
        Date: (x[1] + "/" + x[2] + "/" + x[3]).trim(),
        Dams: [
            {
                Reservoir: $('body > div.container > div > div > table > tbody > tr:nth-child(3) > td:nth-child(1)').text().trim(),
                FullDepth: $('body > div.container > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2)').text(),
                CurrentWaterLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(3) > td:nth-child(4)').text(),
                LastYearLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(3) > td:nth-child(8)').text()
            },
            {
                Reservoir: $('body > div.container > div > div > table > tbody > tr:nth-child(9) > td:nth-child(1)').text().trim(),
                FullDepth: $('body > div.container > div > div > table > tbody > tr:nth-child(9) > td:nth-child(2)').text(),
                CurrentWaterLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(9) > td:nth-child(4)').text(),
                LastYearLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(9) > td:nth-child(8)').text()
            },
            {
                Reservoir: $('body > div.container > div > div > table > tbody > tr:nth-child(5) > td:nth-child(1)').text().trim(),
                FullDepth: $('body > div.container > div > div > table > tbody > tr:nth-child(5) > td:nth-child(2)').text(),
                CurrentWaterLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(5) > td:nth-child(4)').text(),
                LastYearLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(5) > td:nth-child(8)').text()
            },
            {
                Reservoir: $('body > div.container > div > div > table > tbody > tr:nth-child(7) > td:nth-child(1)').text().trim(),
                FullDepth: $('body > div.container > div > div > table > tbody > tr:nth-child(7) > td:nth-child(2)').text(),
                CurrentWaterLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(7) > td:nth-child(4)').text(),
                LastYearLevel: $('body > div.container > div > div > table > tbody > tr:nth-child(7) > td:nth-child(8)').text()
            }
        ]
    }
    console.log(result)
});
