const express = require("express");
const { UnauthorizedError, BadRequestError } = require(`../utils/error`);
const db = require("../db");
const bcrypt = require("bcrypt");

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
// we need to find out a way to figure out how many preferences are in common with each other
// something that proofs out the count 
//brute force counting the activities that match in users preference
// build an array 
// for every user that bring back u need to get preferences and activity
//x axis users y axis activities if you have a matching activity 
//the ones 
// querying results 

static async createMatches(user_id){
var dict = {}
const res = db.query(
`
SELECT user_id,COUNT(user_id) as matches  FROM (SELECT p.user_id,p.activity_name FROM (SELECT user_id,activity_name FROM preferences where user_id = 2) as userpref 
  JOIN preferences as p on userpref.activity_name = p.activity_name where p.user_id != 2) as matchedUsers GROUP BY matchedusers.user_id ORDER BY matches DESC
`,
[user_id]
)
//use effect that renders(oneRender,[])

//const onRender = ( +> {


//})
const myActivityName = res.rows
//query 
// you have the users that have a list of matching activities
//go through each user
//you have to query the activities of every user 

//brute force make 5 queries and run through individual activity and see what users have that activity and per query you can sum up 
//per activity look at all users that have that activity if you have a given activity you looping through 
//loop through list of activities 
// hashmap were user is incremented every time it matches with a specific user
//this query checks to see if the first element in MyActivityName has any users
//to use this we need to input user id
const res1 = await db.query (
  `
  
`,
[myActivityName]
)
//this populates dictionary with matched users and intitializes to zero
const matchedUsers = res1.rows






//look at all activities matching with active user 
const res2 = await db.query (
  `SELECT *
 FROM users
 WHERE id in $1`,[matchedUsers])
 
 const userObjs = res2.rows




// where would the specific preferences be known from 
// get user information for all matching information


//next step is how to get the count












}






//plan:
//need to get user id and get the nutrition nam and then insert into preferences table
//how to get 





}
module.exports = UserActivityPref;
