const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({ extended: false }));

app.get("/users", async (req, res) => {
  try {
    const users = await axios.get("http://jsonplaceholder.typicode.com/users");

    res.json(users.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Erro no servidor!");
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await axios.get("http://jsonplaceholder.typicode.com/posts");

    res.json(posts.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Erro no servidor!");
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
