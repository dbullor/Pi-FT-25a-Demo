
const router = require('express').Router()
const { postActivity } = require ('./controllers/postActivityContr')

router.post('/', postActivity);


module.exports = router;