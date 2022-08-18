import React from "react";
import MatchCard from "./MatchCard";
import axios from "axios";
import { useEffect } from "react";
import RecipeReviewCard from "./MatchCard";
import apiClient from "../Services/apiClient";
import RecipeReviewCard3 from "./SuperMatchCard";
export default function FavMatches2(props) {
  const [matchedUsers, setMatchedUsers] = React.useState([]);
  const [filteredUsers,setFilteredUsers] = React.useState([]);
  //need to input like in order to
  //need to get l
  const getSuper = async (matched) => {
    const result = await apiClient.superMatch(matched.liked_id);
   //   console.log("result in super match: ", result.data?.superObj?.greatest)
    console.log("result in super match: ", result?.data?.superObj[0]?.greatest)
    return await result?.data?.superObj[0]?.greatest;
  };

  useEffect(() => {
    const getData = async () => {
      
      const result = await apiClient.request({ endpoint: `likes` });
      
      setMatchedUsers(result?.data?.favObj);
      
      console.log("LikedArray:",result?.data?.favObj )
      const result2 = await filterfunc(result?.data?.favObj)
      
      console.log("filteredMatches:", result2)
    };
    
    getData();
  }, []);
 

  //first we call the likes we have then we filter them using a filter function
  //
  var Obj = [];

  const filterfunc = (filtmatchedUsers)=>{ 

   
  const filteredMatches = filtmatchedUsers.filter(async (element, index) => {
    console.log("in filteredMatches")
    //want to filter if api client
    
    
    const superLikeId = await getSuper(element);

    const result5 = superLikeId
    console.log("matchedUser in filtered matches:",element.liked_id)
   //it displays
   
    if( result5 === element.liked_id){
      console.log("inside if else")
      console.log("superLikeId infiltered matches:",result5)
      console.log("filtered element",element)
      //setFilteredUsers(result2)
      const arr = await Obj.push(element);
        
      //obj suppose to have all users objects that 
    }
    console.log("end of function")

    return superLikeId === element.liked_id;
    
  })

    return filteredMatches
}

 var count = 0
useEffect(() => {
  console.log("filteredMatches: ",filteredUsers)
  console.log("final array ", Obj)
  Obj = Obj
  
  count++
  console.log("count",count)
  }, []);
  // const res = await apiClient.superMatch(matchedUsers.liked_id);
 
  return (
   
    <div className="product-grid">
       { count == 2 ? 
      <div className="product-grid-wrapper">
        {Obj.map((element, index) => (
          <RecipeReviewCard3 matchedUser={element} />
        ))}
      </div>
         : "" },
    </div>
  
  );
}
