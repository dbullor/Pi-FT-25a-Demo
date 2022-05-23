
const { axios }= require ('axios');
const {Country} = require('../db');




const infoApi = async () =>{
    try {
        const urlCountries = await axios(`https://restcountries.com/v3/all`);
        urlCountries.data.map(async(country)=>{//hago esto para que no me traiga datos que no son pedidos en el readme
           await Country.findOrCreate({
                where:{
                id: country.cca3,
                name: country.name.official,
                img_flag: country.img_flag[0],
                continent: country.continent,
                capital: country.capital
                    ? country.capital[0]
                    :"This Capital isn't loaded.",
                sub_region: country.sub_region
                    ? country.sub_region
                    : "This Sub Región isn't loaded.",
                area: country.area,
                population: country.population,

                },
            });
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    infoApi,
  };