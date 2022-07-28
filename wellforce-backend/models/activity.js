const express = require("express");
const { UnauthorizedError, BadRequestError } = require(`../utils/error`);
const db = require("../db");
const bcrypt = require("bcrypt");

class activities {
  //I need to post my information into a sql table that brings together the id of the activity and the user

  static async formatActivity(activities) {
    return {
      user_id: activities.user_id,
      id: activities.id,
    };
  }
  static async getActivities(userId) {
    const result = await db.query(
      `
        SELECT *
        FROM activities
        WHERE user_id = $1;
        `,
      [userId]
    );
    return result.rows;
  }
}

module.exports = activities;
