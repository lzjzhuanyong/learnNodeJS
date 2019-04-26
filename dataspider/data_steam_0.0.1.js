const https = require('https');
const cheerio = require('cheerio');

function start(){
  https.get('https://store.steampowered.com/about/',request=>{
        //console.log(JSON.stringify(request.headers));
        let html = '';
        request.setEncoding('utf8');
        request.on('data', (chunk) => {
          html = html + chunk;
          //console.log(`${chunk}`);
          });
        request.on('end',()=>{
          console.log(request.headers.date);
          const $ = cheerio.load(html);
          let str = $("div .online_stats").text();
          let list = str.replace(/\t*,?/g,"").split('\n');
          list = list.filter(element=>element!='');
          console.log(list[0]+': '+list[1]+'  '+list[2]+': '+list[3]);
        })
        //console.log(html);
    })
}
//start();
setInterval(start,5000);
