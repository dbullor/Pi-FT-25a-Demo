const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const routeActivities = require ('./postActivityRoute.js');
const countryById = require ('./getCountryIdRoute.js')
const countryByQuery = require('./countryByQuery.js');





const router = Router();


router.use('/countries', countryById); 
router.use('/countries', countryByQuery)
router.use('/activity', routeActivities);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;