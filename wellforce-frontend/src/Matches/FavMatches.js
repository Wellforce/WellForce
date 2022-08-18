import React from 'react'
import MatchCard from './MatchCard';
import axios from 'axios'
import {useEffect} from 'react'
import RecipeReviewCard from './MatchCard';
import apiClient from '../Services/apiClient';
import RecipeReviewCard2 from './FavMatchCard';
export default function FavMatches(props){
  const[matchedUsers,setMatchedUsers] = React.useState([])
  useEffect( () =>{
   const getData = async () => { 
   const result = await apiClient.request({endpoint:`likes`})
   setMatchedUsers(result?.data?.favObj)
  // console.log("matchedUsers",matchedUsers)
  }
  getData()
  },[]); 
 

  
  return(
             <div className="product-grid">
                <div className="product-grid-wrapper">
                    {matchedUsers.map((element, index) => (
                        < RecipeReviewCard2 matchedUser={matchedUsers[index]}  />
                      
                    ))}
                </div>
            </div>
  )
                    }