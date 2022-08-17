const {
    BadRequestError,
    UnauthorizedError,
    NotFoundError,
  } = require("../utils/error");
  const db = require("../db");
  const User = require("../models/user");

  class UserLikes {
  
    //I need to post my information into a sql table that brings together the id of the activity and the user
  
    static async createLike(liked_id, user_id) {
      
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
        [user_id, liked_id]
      );
      const preference = result.rows;
  
      return preference;
    }
    static async isLiked( user_id,liked_id) {
  
        // adds preference to database
    console.log("liked id in liked in models",liked_id)
        const result = await db.query(
          `
     
      SELECT count(id) FROM favorites WHERE user_id = $1 and liked_id = $2
    
      `,
          [user_id,liked_id]
        );
        const likedUser = result.rows[0];
        console.log("LikedCount: ",likedUser)
        if(likedUser.count === '0'){
          return false
        }
        else{
          return true
        }
      }

    static async deleteLike(liked_id, user_id){
       
        // adds preference to database
        
        const result = await db.query(
          `
         DELETE from favorites where user_id = $1 and liked_id =$2;
    
        `,[user_id,liked_id]   
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

      static async superMatched( liked_id,) {
        const result1 = await db.query(
            //point of query is to get get users that liked each other 
            //make it so that user can not like multiple time
            //need to make a check for if user already liked a match
            //just SELECT user_id from favorites where liked_id = $1
            //boolean
          `
          Select * from (
            select least(user_id, liked_id), greatest(user_id, liked_id)
            from favorites
            group by least(user_id, liked_id), greatest(user_id, liked_id)
            having count(*) = 2) as allsuper
            where greatest = $1
            ;   
      `,
          [liked_id]
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