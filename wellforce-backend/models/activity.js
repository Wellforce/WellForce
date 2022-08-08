const {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
} = require("../utils/error");
const db = require("../db");
const User = require("../models/user");

class UserActivityPref{


//I need to post my information into a sql table that brings together the id of the activity and the user

static async createPreference(arr,user_id){
  if(arr.length != 5){
    throw new BadRequestError(`5 activities were not chosen`);
  }
// adds preference to database

const result =  await db.query(
  `
INSERT INTO preferences(
user_id,
activity_name

)
VALUES ($1, $2),($1, $3),($1,$4),($1,$5), ($1,$6)
RETURNING user_id, activity_name;
`,
[
  user_id,
  arr[0],
  arr[1],
  arr[2],
  arr[3],
  arr[4],
]
);
const preference = result.rows;



return preference


}

static async createMatch(user_id){
  const result1 = await db.query(`
  SELECT user_id,COUNT(user_id) as matches  FROM 
  (SELECT p.user_id,p.activity_name FROM 
  (SELECT user_id,activity_name FROM preferences where user_id = $1) as userpref 
  JOIN preferences as p on userpref.activity_name = p.activity_name where p.user_id != $1)
   as matchedUsers GROUP BY matchedusers.user_id ORDER BY matches DESC ;
  
  `,[user_id])
    const matchedUsers = result1.rows




}







//plan:
//need to get user id and get the nutrition nam and then insert into preferences table
//how to get 





}
module.exports = UserActivityPref;
