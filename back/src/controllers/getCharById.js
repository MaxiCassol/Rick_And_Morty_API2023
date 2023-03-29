const axios = require("axios");
const { KEY, URL_BASE} = process.env;

// const url = "https://rickandmortyapi.com/api/character/"

function getChatById(req, res) {
    const {id} = req.params;
    
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response => {
        const {id, name, species, image, gender} = response.data;
        res.status(200).json({id, name, species, image, gender});
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });
}

module.exports = getChatById;



// const axios = require("axios");

// //? VARIABLES DE ENTORNO
// // variables privadas del proyecto, se configuran por fuera del codigo de la app, en el entorno. 
// // const KEY = "";
// // const URL_BASE = "";
// const {KEY, URL_BASE} = process.env;

// const successH = (response, res) => {
//     const { id, image, name, gender, species } = response.data;
//     res
//         .writeHead(200, {"Content-Type":"application/json"})
//         .end(JSON.stringify({ id, name, gender, species, image }));
// };

// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message)
// };

// function getCharById(res, id){
//     axios
//         .get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => successH(response, res))
//         .catch((error) => errorH(error, res));
// };

// module.exports = getCharById;