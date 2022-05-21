const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { axios }= require ('axios');
const Country = require('../models/Country');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const infoApi = async () =>{
    const urlCountries = await axios.get('https://restcountries.com/v3/all');
    const dataNecesary = await urlCountries.data.map(d=>{//hago esto para que no me traiga datos que no son pedidos en el readme
        return {
            name: d.name,
            id: d.id,
            continent: d.continent,
            img_flag: d.img_flag,
            capital: d.capital,
            sub_region: d.sub_region,
            area: d.area,
            population: d.population
        }
    })
    return dataNecesary;
}

const infoDbGet =  async ()=>{
    //necesito traer la info de la base de datos
    return await Country.findAll({
        include:{
            model: Activities,
        }
    })
}


router.get('/countries', async(req, res)=>{

});




module.exports = router;
