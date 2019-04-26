const fs = require('fs');
const path = require('path');

module.exports = function (directory,ext,callback){
    fs.readdir(directory,(error,files)=>{
        if(error){
            callback(error);
        }
        else{
            files = files.filter(element=>path.extname(element) === '.'+ext)
            callback(null,files);
        }
    })
}

