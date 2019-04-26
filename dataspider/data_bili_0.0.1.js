const http = require('http');
const option ={
    protocal:'http:',
    host:'api.bilibili.com',
    port:80,
    path:'/x/web-interface/online',
    method:'GET'
}

function start(){
    const req = http.request(option,request=>{
        //console.log(request.statusCode);
        //console.log(JSON.stringify(request.headers));
        //console.log(JSON.stringify(request.rawHeaders));
        if(request.statusCode === 200){
            let str='';
            request.on('data',chunk=>{
                let body = JSON.parse(chunk);
                //console.log(body);
                 str = 'all_count: '+body.data.all_count
                            +'  web_online: '+body.data.web_online
                            +'  play_online: '+body.data.play_online;
            })
            request.on('end',()=>{
                console.log(str);
                console.log(request.headers.date);
            })
        }
        
        request.on('error',error=>{
            console.error(e.message);
        })
        
    });

    req.end();

    /*http.get('http://api.bilibili.com/x/web-interface/online',request=>{
        //console.log(JSON.stringify(request.headers));
        request.on('data', (chunk) => {
            console.log(`${chunk}`);
          });
    })*/
}

//start();
setInterval(start,2000);

