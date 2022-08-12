const {
    BadRequestError,
    UnauthorizedError,
    NotFoundError,
  } = require("../utils/error");
  const db = require("../db");
  const User = require("../models/user");

  class UserLikes {
    static async isPrefChecked( user_id) {
    
      // adds preference to database
  
      const result = await db.query(
        `
   
    SELECT COUNT(user_id) FROM preferences WHERE user_id = $1
  
    `,
        [user_id]
      );
      const prefCount = result.rows[0];
      console.log("prefCount: ",prefCount)
      if(prefCount.count === '0'){
        return false
      }
      else{
        return true
      }
    }
  
    //I need to post my information into a sql table that brings together the id of the activity and the user
  
    static async createLike(arr, user_id) {
      
      // adds preference to database
  
      const result = await db.query(
        `
  INSERT INTO favorites(
  user_id,
  liked_id
  
  )
  VALUES ($1, $2)
  RETURNING user_id, liked_id;
  `,
        [user_id, arr[0]]
      );
      const preference = result.rows;
  
      return preference;
    }

    static async deleteLike(arr,user_id){
       
        // adds preference to database
        
        const result = await db.query(
          `
         DELETE from favorites where user_id = $1;
    
        `,[user_id]   
        );
        
        const preference = result.rows;
    
        return preference;
    
      }
      static async getUserbyLike(user_id) {
        const result1 = await db.query(
            //point of query is to get user object by the liked user id
          `
          SELECT *
          FROM  favorites
          LEFT JOIN users 
          ON favorites.liked_id = users.id where user_id = $1;    
      `,
          [user_id]
        );
        const matchedUsers = result1.rows;
        console.log(matchedUsers);
    
        return matchedUsers;
      }
    

    static async updatePreference(arr,user_id){
      if (arr.length != 5) {
        throw new BadRequestError(`5 activities were not chosen`);
      }
      // adds preference to database
      
      const result = await db.query(
        `
       DELETE from preferences where user_id = $1;
  
      `,[user_id]   
      );
      const result1 = await db.query(
        `
  INSERT INTO preferences(
  user_id,
  activity_name
  
  )
  VALUES ($1, $2),($1, $3),($1,$4),($1,$5), ($1,$6)
  RETURNING user_id, activity_name;
  `,
        [user_id, arr[0], arr[1], arr[2], arr[3], arr[4]]
      );
      const preference = result1.rows;
  
      return preference;
  
    }
  
    static async createMatch(user_id) {
      const result1 = await db.query(
        `
    SELECT username,first_name,last_name,email, matches from (SELECT user_id,COUNT(user_id) as matches  FROM 
    (SELECT p.user_id,p.activity_name FROM 
    (SELECT user_id,activity_name FROM preferences where user_id = $1) as userpref 
    JOIN preferences as p on userpref.activity_name = p.activity_name where p.user_id != $1)
     as matchedUsers GROUP BY matchedusers.user_id) as Usermatchesinfo
     JOIN users on Usermatchesinfo.user_id = users.id
     ORDER BY matches DESC;
    
    `,
        [user_id]
      );
      const matchedUsers = result1.rows;
      console.log(matchedUsers);
  
      return matchedUsers;
    }
  
    //plan:
    //need to get user id and get the nutrition nam and then insert into preferences table
    //how to get
  }
  module.exports = UserLikes;