const Router = require('express')
const router = new Router()
const ChaptersController = require('../controllers/chapters.controller')

router.post('/chapter', ChaptersController.createChapter)
router.get('/chapter', ChaptersController.getChapters)
router.get('/chapter/:id', ChaptersController.getChaptersOneTravel)
router.put('/chapter', ChaptersController.updateChapter)
router.delete('/chapter/:id', ChaptersController.deleteChapter)

module.exports = router
