const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/categoriesController')

const tagsController = require('../app/controllers/tagsController')

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)

router.get('/tags', tagsController.list)
router.post('/tags', tagsController.create)
router.get('/tags/:id', tagsController.show)

module.exports = router 