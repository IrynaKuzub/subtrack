const express = require('express')

const SubsCtrl = require('../controllers/subscription-ctrl')

const router = express.Router()

router.post('/subs', SubsCtrl.createSubs)
router.put('/subs/:id', SubsCtrl.updateSubs)
router.delete('/subs/:id', SubsCtrl.deleteSubs)
router.get('/subs/:id', SubsCtrl.getSubsById)
router.get('/subs', SubsCtrl.getSubs)

module.exports = router
