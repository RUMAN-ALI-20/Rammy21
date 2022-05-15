const http=require('http');
const fs=require('fs');

const hostname='127.0.0.1';
const port='3000';
const filecontent=fs.readFileSync('../TRANSISTION AND TRANSFORM.html')

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(filecontent);
})

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
});