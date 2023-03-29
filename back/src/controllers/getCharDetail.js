const axios = require("axios");
const {KEY, URL_BASE} = process.env;


function getCharDetail(req, res) {
    const {id} = req.params;
    
    axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response => {
        const {id, name, species, image, gender, origin} = response.data;
        res.status(200).json({id, name, species, image, gender, origin});
    })
    .catch((error) => {
        res.status(500).json({ error: error.message });
    });    
}

module.exports = getCharDetail;

// const successH = (response, res) => {
//     const { name, gender, origin, status, species, image } = response.data; //pedia otros datos ver consigna
//     res
//         .writeHead(200, {"Content-Type":"application/json"})
//         .end(JSON.stringify({ name, gender, origin, status, species, image }));
// };

// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message)
// };

// const getCharDetail = (res, id) => {
//     axios
//         .get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then((response) => successH(response, res))
//         .catch((error) => errorH(error, res));
// }

