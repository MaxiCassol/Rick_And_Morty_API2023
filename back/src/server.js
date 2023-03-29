require("dotenv").config();
const express = require('express');
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors")

const PORT = process.env.PORT || 3001; //cuando despliegue me da un port, sino toma el 3001. 

const server = express();

server.use(express.json()); // lo transforma en un objeto de js. 
server.use(morgan('dev'));
server.use(cors())
server.use("/", router);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});



// const http = require ("http");
// require("dotenv").config();
// const getCharById = require ("../src/controllers/getCharById.js");
// const getCharDetail = require ("../src/controllers/getCharDetail.js");



// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     const {url} = req

//     if(url.includes("onsearch")) {
//         const id = url.split("/").at(-1);
//         getCharById(res, id);
//     }

//     if(url.includes("detail")) {
//         const id = url.split("/").at(-1);
//         getCharDetail(res, id);
//     }

// }).listen(3001, 'localhost')






// const data = require ('./utils/data.js');


// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const { url } = req;

//     if(url.includes("rickandmorty/character/")) {
//         const id= url.split("/").at(-1); //at da la posicion del array. -1 es la ultima posicion
//         const character = data.find((char) => char.id == id); //busco el id del array. == porque comparo un string c un numero, si pongo === da error, hay q poner const id= Number(url...)
//         if(character){
//             res.writeHead(200, {"Content-Type": "aplication/json" });
//             res.end(JSON.stringify(character));
//         }else{
//             res.writeHead(404, {"Content-Type": "aplication/json" });
//             res.end(JSON.stringify({error: "Character not found" }));
//         }
//     }


    //res.WriteHead(200, {"Content-Type":"tex/plain" });
    
// })
// .listen(3001, "localhost");

