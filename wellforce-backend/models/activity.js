const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/error");
const db = require("../db");
const User = require("../models/user");

class UserActivityPref {
  //I need to post my information into a sql table that brings together the id of the activity and the user
}

module.exports = UserActivityPref;
