const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { createUserJwt } = require("../utils/token");
const security = require("../middleware/security");
const Activities = require("../models/activity");

router.get("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const activity = await Activities.listActivityForUser(user.id);
    return res.status(200).json({ activity });
  } catch (err) {
    console.log(err);
  }
});

router.post("/", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const makeActivities = await Activities.createActivities(req.body);
    // const user = await User.fetchUserByEmail(req.body.email);
    // const activity = await Activities.listActivityForUser(user.id);
    return res.status(200).json({ makeActivities });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
