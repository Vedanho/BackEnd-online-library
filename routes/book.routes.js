const { Router } = require("express");

const { bookControllers } = require("../controllers/book.controllers");

const router = Router();

router.post("/admin/book", bookControllers.createBook);
router.delete('/admin/book/:id', bookControllers.deleteBook);
router.patch("/admin/book", bookControllers.updateBook);
router.get('/book/user', bookControllers.getAllBooks);
router.get('/book/user/:id', bookControllers.getBookById);
router.get('book/genre/:id', bookControllers.getBookByGenre);


module.exports = router
