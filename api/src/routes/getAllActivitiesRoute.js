const router = require('express').Router()
const {getAllActivities} = require('./controllers/getAllActivities')

router.get('/all', getAllActivities)


module.exports = router;