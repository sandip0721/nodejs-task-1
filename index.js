const fs = require("fs")
const http  = require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    const path = "C:\Users\Win 10 Pc\Desktop\fullstack"
    fs.readdir(path,function(err,files){
        console.log(files)
        res.write('$(files)')
        res.end()
    })
    
}).listen(4000);