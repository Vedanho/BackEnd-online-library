const Book = require("../models/Book.model");

module.exports.bookControllers = {
  createBook: (req, res) => {
    Book.create({ name: req.body.name, genre: req.body.genre })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => res.json("Книга удалена"))
      .catch((e) => res.json(e));
  },
  updateBook: (req, res) => {
    Book.findByIdAndUpdate({ name: req.body.name, genre: req.body.genre })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
  getAllBooks: (req, res) => {
    Book.find()
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id)
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  },
  getBookByGenre: (req, res) => {
    Book.find({ genre: req.params.id })
      .then((data) => res.json(data))
      .catch((e) => res.json(e));
  }
};
