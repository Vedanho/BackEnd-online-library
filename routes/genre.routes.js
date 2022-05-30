const { Router } = require("express");

const { genreControllers } = require("../controllers/genre.controllers");

const router = Router();

router.post('/admin/genre', genreControllers.createGenre)
router.delete('/admin/genre',genreControllers.deleteGenre)
router.patch('/admin/genre', genreControllers.updateGenre)
router.get('/genre', genreControllers.getAllGenres)

module.exports = router