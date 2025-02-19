// const http = require('http')
// import * as http from 'http'
import { createServer } from 'http';
// import url from 'url'
// import fs 

const myurl = new URL('https://api.github.com/search?q=frtug')
// console.log("host",myurl.searchParams)

const server = createServer((req,res)=>{
    // const user = req.body;
    // res.json({message:"Hello "})

    const value = req.url
    switch(value){
        case '/':
            // code for handling all the home page
            res.writeHead(200, {'content-Type':'text/plain'})
            res.end(`Hello World ${value} `);
            return
        case '/api':
        // code for handling all the home page
            res.writeHead(200, {'content-Type':'application/JSON'})
            res.end(JSON.stringify({ message: 'Success' }));
        }
    
})

server.listen(3000,()=>{
    console.log("Running on port http://localhost:3000/")
})
// npm init -y