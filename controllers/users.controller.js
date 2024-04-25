const Users = require("../models/users.model");

const getUsers = (req, res) => {
  res.send(Users);
};

const getUser = (req, res) => {
  const userId = req.params.id;
  const user = Users[userId];
  if (user) {
    res.send(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
  const newUser = {
    id: Users.length,
    name: req.body.name,
  };

  if (!req.body.name) {
    res.status(404).json({
      error: "Missing user name",
    });
  }

  Users.push(newUser);
  res.json(newUser);
};

module.exports = {
  getUsers,
  getUser,
  postUser,
};
