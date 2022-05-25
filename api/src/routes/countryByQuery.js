const router = require('express').Router();
const {getCountries} = require('./controllers/getAllCountriesContr');

router.get('/', getCountries);


module.exports = router;