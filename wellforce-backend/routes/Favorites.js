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
      req.body.liked_id,
      user.id
    );
      console.log("req body", req.body.liked_id)
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
      console.log("idc",req.body.liked_id)
      const deletedFavorite = await UserLikes.deleteLike(
        req.body.liked_id,
        user.id
      );
        console.log("deletedFavorite",deletedFavorite)
      //  const token = extractUserFromJwt(req.header.token);
      return res.status(200).json({ deletedFavorite });
    } catch (error) {
      res.status(401).send(error);
      next(error);
    }
  });
  router.get("/", async (req, res, next) => {
    try {
      const user = res.locals.user;
      console.log("userid in favObj", user.id);
      const favObj = await UserLikes.getUserbyLike(user.id);
  
      return res.status(200).json({ favObj });
    } catch (error) {
      res.status(401).send(error);
      next(error);
    }
  });

  router.get("/checkLiked/:id", async (req, res, next) => {
    try {
      const user = res.locals.user;
      console.log("req body in check liked",req.params )
      const liked_id = req.params.id
      console.log("userid in favObj", user.id);
      const favObj = await UserLikes.isLiked(user.id,liked_id);
      console.log("favObj:", favObj);
      return res.status(200).json({ favObj });
    } catch (error) {
      res.status(401).send(error);
      next(error);
    }
  });



  router.get("/super/:id", async (req, res, next) => {
    try {
      console.log("in super")

      const liked_id = req.params.id
      console.log("userid in liked_id", liked_id);
      
      const superObj = await UserLikes.superMatched(liked_id);
  
      return res.status(200).json({ superObj });
    } catch (error) {
      res.status(401).send(error);
      next(error);
    }
  });

module.exports = router;