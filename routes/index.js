const { Router } = require('express')

const router = Router()

router.use(require('./book.routes'))
router.use(require('./genre.routes'))
router.use(require('./review.routes'))
router.use(require('./user.routes'))

module.exports = router