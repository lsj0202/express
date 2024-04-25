const express = require("express");
const usersController = require("./controllers/users.controller");
const postsController = require("./controllers/posts.controller");

const PORT = 8080;

const app = express();
app.use(express.json()); // body parser 설정

app.use((req, res, next) => {
  // 미들웨어 설정
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/users", usersController.getUsers);
app.get("/users/:id", usersController.getUser);
app.post("/users", usersController.postUser);

app.get("/posts", postsController.getPost);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
