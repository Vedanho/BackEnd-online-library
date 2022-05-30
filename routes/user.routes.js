const { Router } = require("express");

const { userControllers } = require("../controllers/user.controllers");

const router = Router();

router.post('/user', userControllers.createUser)
router.patch('/admin/block/:id', userControllers.blockUser)
router.delete('/user/delete/:id', userControllers.deleteUser)
router.patch('/user/take/book/:id', userControllers.takeBook)
router.patch('/user/return/book/:id', userControllers.returnBook)

module.exports = router
