import React from 'react'
import MatchCard from './MatchCard';
import axios from 'axios'
import {useEffect} from 'react'
import RecipeReviewCard from './MatchCard';
import apiClient from '../Services/apiClient';
export default function FavMatches(props){
  const[matchedUsers,setMatchedUsers] = React.useState([])
  useEffect( () =>{
   const getData = async () => { 
   const result = await apiClient.request({endpoint:`likes`})
   setMatchedUsers(result?.data?.favObj)
   console.log("matchedUsers",matchedUsers)
  }
  getData()
  },[]); 
  useEffect( () =>{
    console.log("hello")
    console.log("matchedUsers in matchGrid",matchedUsers)

  },[matchedUsers]); 
  return(
             <div className="product-grid">
                <div className="product-grid-wrapper">
                    {matchedUsers.map((element, index) => (
                        < RecipeReviewCard matchedUser={matchedUsers[index]}  />
                      
                    ))}
                </div>
            </div>
  )
                    }