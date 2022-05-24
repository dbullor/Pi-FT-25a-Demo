
const axios = require('axios');
const {Country} = require('../db');


const infoApi = async () =>{
    
    try {
        
        const urlCountries = (await axios.get(`https://restcountries.com/v3/all`)).data.map(country=>{
            return {
                id: country.cca3,
                name: country.name.official,
                flag: country.flags ? country.flags[0] : 'no hay bandera',
                continent: country.region,
                capital: country.capital
                    ? country.capital[0]
                    :"This Capital isn't loaded.",
                sub_region: country.subregion
                    ? country.subregion
                    : "This Subregion isn't loaded.",
                area: country.area,
                population: country.population,
            } })
            await Country.bulkCreate(urlCountries);
            console.log('Countries successfully loaded into DB');
        
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    infoApi
  };

