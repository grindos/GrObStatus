const request = require('request');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

let opt = {
    url: "http://www.gr-oborona.ru/texts/",
    encoding: null
};

let html = '';

request(opt, (err, res, body) => {
    if (err) throw err;

    // Decode into win1251
    html = iconv.decode(body, 'win1251');

    // Find all links
    let $ = cheerio.load(html);

    let links = $('#abc_list li').find('a').toArray();
    let hrefs = [];
    links.forEach((elem) => {
        hrefs.push(elem.attribs.href);
    })

    console.log(hrefs);
});

