const Book = require("../models/Book.model");

const User = require("../models/User.model");

module.exports.userControllers = {
  createUser: (req, res) => {
    User.create({ name: req.body.name })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => res.json(e));
  },
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.params.id)
      .then(() => res.json("Пользователь удалён"))
      .catch((e) => res.json(e));
  },
  returnBook: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { rentBooks: req.body.rentBooks },
        },
        await Book.findByIdAndUpdate(req.body.rentBooks, {
          bookHolder: null
        })
      );
      res.json("Книга возвращена");
    } catch (error) {
      res.json(error.message);
    }
  },
  takeBook: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const book = await Book.findById(req.body.rentBooks);

      if (user.isBlocked === false) {
        if (user.rentBooks.length < 3) {
          if (book.bookHolder === null) {
            await User.findByIdAndUpdate(req.params.id, {
              $push: { rentBooks: req.body.rentBooks },
            });
            await Book.findByIdAndUpdate(req.body.rentBooks, {
              bookHolder: req.params.id,
            });

            res.json("Пользователь успешно арендовал книгу");
          } else {
            res.json("Книга уже арендована другим пользователем");
          }
        } else {
          return res.json("Нельзя арендовать больше трёх книг");
        }
      } else {
        return res.json("Пользователь заблокирован");
      }
    } catch (error) {
      res.json(error.message);
    }
  },
  blockUser: async (req, res) => {
    try {
    await User.findByIdAndUpdate(req.params.id, {
      $pull: { rentBooks: req.body.rentBooks },
      isBlocked: true
    });
    await Book.findByIdAndUpdate(req.body.rentBooks, {
      bookHolder: []
    })
       res.json("Пользователь заблокирован")
  } catch(eror) { res.json(eror.message)}
  }
};
