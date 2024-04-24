const express = require("express");

const PORT = 8080;

const app = express();

const Users = [
  {
    id: 0,
    name: "John",
  },
  {
    id: 1,
    name: "Lsj",
  },
];

app.get("/", (req, res) => {
  res.send("Hello, World!!");
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = Users[userId];
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
});

app.get("/users", (req, res) => {
  res.send(Users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
