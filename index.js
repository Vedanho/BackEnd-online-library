const express = require("express");

const mongoose = require("mongoose");

const app = express();
const port = 1000;

app.use(express.json());
app.use(require("./routes/index"))



mongoose.connect(
  "mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/online-library?retryWrites=true&w=majority"
)
.then(() => console.log('Успешно соединились с MongoDB'))
.catch(() => console.log('Ошибка при соединии с сервером'))

app.listen(port, () => {
    console.log('Server is working')
})
