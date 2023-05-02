const axios = require("axios");
const cheerio = require('cheerio');



const konascrape = async (t) => {
  try {
    let ran = Math.floor(Math.random() * 100)
    let urll = `https://konachan.com/post?page=${ran}&tags=${t}`
    const response = await axios.get(urll)
    const data = response.data;
    const $ = cheerio.load(data)
    let resultArray = [];
    $('#post-list-posts  li a.directlink').each((i, el) => {
          let src = $(el).attr("href");
          resultArray.push(src);
      console.log(ran)
        });
        return resultArray; 
    
      }
 catch (err) {
console.log(err);
 }
}
module.exports = {konascrape}
