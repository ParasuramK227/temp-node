const http = require('http');

const server = http.createServer((req,res)=>{

if(req.url==='/'){
    res.end('Welcome to our home page');//if url is the home page
}
if(req.url==='/about'){
    res.end('Here is our short history');//if url is the about page
}
    res.end(
        `<h1>Oops</h1>
        <p>Can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>`
    );//if url is not found

})//req stands for request , res stands for response {they can be named anything as they are just promises . but req and res are common practices}

server.listen(5000);//port

//if you run this in the terminal and open your browser and type localhost:(port) in the webpage it will display the res , which is Welcome to our page . and also , usually the terminal exits after the program is over . but in case of servers they keep looking for requests rather than exiting the program