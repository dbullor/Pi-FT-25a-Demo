const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const allCountriesRoutes = require('./getCountriesRoute.js');
const routeActivities = require ('./postActivityRoute.js');
const countryById = require ('./getCountryIdRoute.js')
const countryByQuery = require('./countryByQuery.js');





const router = Router();

// router.use('/countries', allCountriesRoutes);
router.use('/countries', countryById); //www.localhost/countries/:id/perro
router.use('/countries', countryByQuery)
router.use('/activity', routeActivities);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;