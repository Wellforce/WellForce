const express = require("express");
const router = express.Router();

const User  = require("../models/user");
const { createUserJwt } = require("../utils/token");
const { requireAuthenticatedUser } = require("../middleware/security");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("auth route works");
});

router.post("/log-in", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).send(error);
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body);
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).send(error);
    next(error);

  }

  router.get("/me", requireAuthenticatedUser, async (req, res, next) => {
    try {
      console.log("get get: ", res.locals.user);
      const email = res.locals.user;
      const user = await User.fetchUserByEmail(email);
      const publicUser = User.makePublicUser(user);
      return res.status(200).json({ user: publicUser });
    } catch (error) {
      next(error);
    }
  });
});

// module.exports = router;
module.exports = router;
