import React from 'react'
import MatchCard from './MatchCard';
import axios from 'axios'
import {useEffect} from 'react'
import RecipeReviewCard from './MatchCard';
import apiClient from '../Services/apiClient';
import RecipeReviewCard3 from './SuperMatchCard';
export default function FavMatches2(props){
  const[matchedUsers,setMatchedUsers] = React.useState([])
  //need to input like in order to 
  //need to get l


  useEffect( () =>{
   const getData = async () => { 
   const result = await apiClient.request({endpoint:`likes/super`})
   
   setMatchedUsers(result?.data?.favObj)
   console.log("matchedUsers",matchedUsers)
  }
  getData()
  },[]); 
  //const res = await apiClient.superMatch(matchedUsers.liked_id);
  useEffect( () =>{
    console.log("hello")
    console.log("matchedUsers in matchGrid",matchedUsers)

  },[matchedUsers]); 
  return(
             <div className="product-grid">
                <div className="product-grid-wrapper">
                    {matchedUsers.map((element, index) => (
                        < RecipeReviewCard3 matchedUser={matchedUsers[index]}  />
                      
                    ))}
                </div>
            </div>
  )
                    }