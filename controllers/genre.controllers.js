const Genre = require('../models/Genre.model')

module.exports.genreControllers = {
    createGenre: (req, res) => {
        Genre.create({ name: req.body.name })
          .then((data) => {
            res.json(data);
          })
          .catch((e) => res.json(e));
      },
      deleteGenre: (req, res) => {
        Genre.findByIdAndRemove(req.params.id)
          .then(() => res.json("Жанр удален"))
          .catch((e) => res.json(e));
      },
      updateGenre: (req, res) => {
        Genre.findByIdAndUpdate({ name: req.body.name })
          .then((data) => {
            res.json(data);
          })
          .catch((e) => res.json(e));
      },
      getAllGenres: (req, res) => {
        Genre.find()
          .then((data) => res.json(data))
          .catch((e) => res.json(e));
      },
}