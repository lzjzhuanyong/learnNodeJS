/*
第一题：
console.log('HELLO WORLD');
*/

/*
第二题：
let sum =0;
for(let i=2;i<process.argv.length;i++){
    sum=sum+Number(process.argv[i]);
}
console.log(sum);
*/

/*
第三题：
const fs = require('fs');//文件读取模块
const path = process.argv[2];//题中说文件路径会通过是第一个命令行参数，即process.argv[2]
const buf = fs.readFileSync(path);
const lineArry = buf.toString().split('\n');
console.log(lineArry.length-1);
*/

/*
第四题：
const fs = require('fs');
const path = process.argv[2];
//const lineArray = [];
fs.readFile(path,(error,data)=>{//匿名箭头回调函数
    if(error){
        console.error(error.message);
    }
    else{
        //lineArray = data.toString().split('\n');
        //这里我本来是企图通过赋值给lineArray然后在块外log出结果的。
        //但是输出的结果是错的，你可以自行试一下。
        //主要原因是，这里的读取操作是异步行为，是非阻塞的，
        //而文件读取速度再快也比执行慢，
        //所以下面的console.log在readFile未完全执行完时，已经先执行了。

        console.log(data.toString().split('\n').length-1);
    }
})
//console.log(lineArray.length-1);
*/

/*
第五题：
const fs = require('fs');
const path = require('path');
const dir = process.argv[2];
const ext = '.'+process.argv[3];

fs.readdir(dir,(error,files)=>{//files数组中的字符串是包括扩展名的文件全名
    if(error){
        console.error(error.message);
    }
    else{
        for(let i=0;i<files.length;i++){ 
            if(path.extname(files[i]) === ext){//判断扩展名是否想同
                console.log(files[i]);
            }
        }
    }
})
*/

/*
第六题：
const younode6=require('./younode6');
const dir = process.argv[2];
const ext = process.argv[3];

younode6(dir,ext,(err,data)=>{
    if(err){console.log(err)}
    else{
        data.forEach(element => {
            console.log(element);
        });
        }
})
//这题需要注意的是回调函数的使用，回调函数的第二个参数是数组类型，
//并且在传入模块函数数据之前不要对目录名和文件扩展名做处理，
//我第一次就是对扩展名加了点，导致一直报错
*/

/*
//第七题：
const http = require('http');
const url = process.argv[2];

http.get(url,(request)=>{
    request.setEncoding('utf8');
    request.on('data',console.log);
    request.on('error',(err)=>{
        console.error(err.message);
    })
})
*/

/*第八题：
const http = require('http');
const url = process.argv[2];

http.get(url,request=>{
    let data = '';
    //let num =0;
    request.on('data',chunk=>{
        data += chunk;
        //num +=chunk.length;
    })
    request.on('end',error=>{
        if(error){
            console.error(error);
        }
        else{
            console.log(data.length);
            console.log(data);
        }
    })
})
*/
/*
第九题：
const http = require('http');
const urlAll = [process.argv[2],process.argv[3],process.argv[4]];
const prom = url=>{
    return new Promise((resolve,reject)=>{
        http.get(url,request=>{
            let data='';
            request.on('data',chunk=>{
                data+=chunk;
            })
            request.on('end',error=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(data);
                }
            })
        })
    })
}    
async function forall(){
    for(let i=0;i<3;i++){
    let value = await prom(urlAll[i])
    console.log(value);
}
}
forall();
//prom(urlAll[0])
//.then(data=>{
 //   console.log(data);
  //  return prom(urlAll[1]);
//})
//.then(data=>{
 //   console.log(data);
 //   return prom(urlAll[2]);
//})
//.then(data=>{console.log(data)});
*/

/*
第十题：
const net = require('net');
const port = process.argv[2];
net.createServer(socket=>{
    let date = new Date();
    socket.write(`${date.getFullYear()}-${date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1}-${date.getDate()<10?'0'+date.getDate():date.getDate()} ${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}\n`);
    socket.end();
}).listen(port);
*/

/*
第十一题：
const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const url = process.argv[3];
//console.log(process.argv)
http.createServer((request,response)=>{
    let chunk=fs.createReadStream(url,{encoding:'utf8'});
    chunk.pipe(response);
    //response.write();
    //response.end()
}).listen(port);
*/
/*
第十二题：
const http = require('http');
const port = process.argv[2];
http.createServer((request,response)=>{
    let post='';
    request.on('data',chunk=>{
        post += chunk;
    })
    request.on('end',()=>{       
        response.end(post.toUpperCase());
    });
    //console.log(post);
    //response.end();
}).listen(port);
*/

/*
第十三题：
const http = require('http');
const port = process.argv[2];
const url = require('url');
http.createServer((request,response)=>{
    let iso = url.parse(request.url,true).query.iso;
    //console.log(url.parse(request.url,true));
    let date = new Date(iso);
    //console.log(url.parse(request.url,true).pathname);
    //console.log(date);
    //console.log(date.toISOString());
    response.writeHead(200,{'Content-Type':'application/json'});
   
    if(url.parse(request.url,true).pathname === '/api/parsetime'){
        response.write(JSON.stringify({
            'hour':date.getHours(),
            'minute':date.getMinutes(),
            'second':date.getSeconds()
        }));
    }
    else if(url.parse(request.url,true).pathname === '/api/unixtime'){
        response.write(JSON.stringify({
            'unixtime':date.getTime()
        }))
    }
    response.end();
}).listen(port);
*/
