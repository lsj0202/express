const express = require("express");
const postsRouter = require("./routes/posts.router");
const usersRouter = require("./routes/users.router");

const PORT = 8080;

const app = express();
app.use(express.json()); // body parser 설정

app.use((req, res, next) => {
  // 미들웨어 설정
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
