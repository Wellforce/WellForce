// const express = require("express");
// const router = express.Router();

// const { User } = require("../models/user");
// const { UserActivityPref } = require("../models/UserActivityPref");
// const { createUserJwt } = require("../utils/token");
// const { requireAuthenticatedUser } = require("../middleware/security");

// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

// router.get("/", (req, res) => {
//   res.send("auth route works");
// });

// // module.exports = router;
// module.exports = router;
const express = require("express");
const router = express.Router();

const  UserActivityPref = require("../models/activity");

const { createUserJwt } = require("../utils/token");
const { requireAuthenticatedUser, extractUserFromJwt } = require("../middleware/security");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// router.get("/", (req, res) => {
//   res.send("preferences route works");
// });
//frontend needs to send preferences over  and user.id and I need to 

router.post("/", async (req, res, next) => {
  try {
    const user = res.locals.user
    const Preference = await UserActivityPref.createPreference(req.body, user.id);

    //  const token = extractUserFromJwt(req.header.token);
     return res.status(200).json({ Preference});
  } catch (error) {
    res.status(401).send(error);
    next(error);
  }
});

// module.exports = router;
module.exports = router;
