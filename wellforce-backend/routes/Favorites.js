const express = require("express");
const router = express.Router();

const UserLikes = require("../models/Likes");

const { createUserJwt } = require("../utils/token");
const {
  requireAuthenticatedUser,
  extractUserFromJwt,
} = require("../middleware/security");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/", async (req, res, next) => {
  try {
    const user = res.locals.user;
    const Preference = await UserLikes.createLike(
      req.body,
      user.id
    );

    //  const token = extractUserFromJwt(req.header.token);
    return res.status(200).json({ Preference });
  } catch (error) {
    res.status(401).send(error);
    next(error);
  }
});
router.delete("/", async (req, res, next) => {
    try {
      const user = res.locals.user;
      const Preference = await UserLikes.deleteLike(
        req.body,
        user.id
      );
  
      //  const token = extractUserFromJwt(req.header.token);
      return res.status(200).json({ Preference });
    } catch (error) {
      res.status(401).send(error);
      next(error);
    }
  });


module.exports = router;