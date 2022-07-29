const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/error");
const db = require("../db");
const User = require("../models/user");

class Activities {
  static async createActivities(data) {
    const requiredFields = ["activity"];
    requiredFields.forEach((element) => {
      if (!data.hasOwnProperty(element)) {
        throw new BadRequestError(`Missing ${element} in request body`);
      }
    });

    // const user = await User.fetchUserByEmail(data.email);
    // const user_id = user.id;

    const result = await db.query(
      `INSERT INTO activities(
                    activity
                )
                VALUES ($1)
                RETURNING id, activity
                `,
      [data.activity]
    );

    const activityData = result.rows[0];
    return activityData;
  }

  static async fetchActivityById(id) {
    if (!id) {
      throw new BadRequestError("Need Valid Id");
    }

    const query = `SELECT * FROM activities WHERE id = $1`;
    const result = await db.query(query, [id]);
    if (result.rows.length <= 0) {
      throw new NotFoundError("ID Not Found");
    }

    const activity = result.rows[0];
    return activity;
  }
}

module.exports = Activities;
