const express = require("express");
const { UnauthorizedError, BadRequestError } = require(`../utils/error.js`);
const db = require("../db");
const bcrypt = require("bcrypt");


class UserActivityPref{


//I need to post my information into a sql table that brings together the id of the activity and the user




  static async formatNutrition(nutrition) {
    return {
      user_id: nutrition.user_id,
      id: nutrition.id,
      name: nutrition.name,
      calories: nutrition.calories,
      category: nutrition.category,
      image_url: nutrition.image_url,
      created_at: nutrition.created_at,
    };
  }
  static async getNutritions(userId) {
    const result = await db.query(
      `
      SELECT * 
      FROM nutrition
      WHERE user_id = $1;
      `,
      [userId]
    );
    return result.rows;
  }
  static async createNutrition({ nutrition: nutrition_details }) {
    const requiredFields = [
      "user_id",
      "name",
      "category",
      "calories",
      "image_url",
    ];

    requiredFields.forEach((field) => {
      if (!nutrition_details.hasOwnProperty(field)) {
        throw new BadRequestError(`Missing ${field} in request body...`);
      }
    });

    const result = await db.query(
      `
    INSERT INTO nutrition(
        user_id,
        name,
        category,
        calories,
        image_url
    )
    VALUES ($1,$2,$3,$4,$5)
    RETURNING user_id,name,category,calories,image_url;
    `,
      [
        nutrition_details.user_id,
        nutrition_details.name,
        nutrition_details.category,
        nutrition_details.calories,
        nutrition_details.image_url,
      ]
    );
    //return the user
    const nutrition = result.rows[0];

    return Nutrition.formatNutrition(nutrition);
  }
}

module.exports = UserActivityPref;






















