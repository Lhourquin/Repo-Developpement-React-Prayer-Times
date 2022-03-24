const puppeteer = require("puppeteer");

async function getDataAPI(city){
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
 
  await page.goto("https://mawaqit.net");

  const getDataAPImawaqit = await page.evaluate((city) => {
    return fetch(`https://mawaqit.net/api/2.0/mosque/search?word=${city}`)
    .then((Response) => Response.json())
    .then((obj) => {
      let arr = [];
      for (let element of obj) {
        arr.push(element);
      }
      return arr;
    })
    //.then(arr => Object.assign({},arr ))
  }, city);

  dataOfMosqueInCity = getDataAPImawaqit;

  await browser.close();

  return dataOfMosqueInCity;
};

module.exports = {
  getDataAPI
}