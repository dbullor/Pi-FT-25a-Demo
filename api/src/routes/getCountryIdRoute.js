const router = require('express').Router()
const {getCountry} = require('./controllers/getAllCountriesContr')

router.get('/:id', getCountry)


module.exports = router;