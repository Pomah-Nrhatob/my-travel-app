const Router = require('express')
const router = new Router()
const TravelsController = require('../controllers/travels.controller')

router.post('/travel', TravelsController.createTravel)
router.get('/travel', TravelsController.getTravels)
router.get('/travel/:id', TravelsController.getOneTravel)
router.put('/travel', TravelsController.updateTravel)
router.delete('/travel/:id', TravelsController.deleteTravel)

module.exports = router
