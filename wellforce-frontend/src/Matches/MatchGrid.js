import React from 'react'
import MatchCard from './MatchCard';
import axios from 'axios'
import {useEffect} from 'react'
import RecipeReviewCard from './MatchCard';
import apiClient from '../Services/apiClient';
import "./Matches.css"
export default function MatchGrid(props){
  const[matchedUsers,setMatchedUsers] = React.useState([])
  useEffect( () =>{
   const getData = async () => { 
   const result = await apiClient.request({endpoint:`preference/testing`})
   setMatchedUsers(result?.data?.Preference)
   console.log("matchedUsers",matchedUsers)
  }
  getData()
  },[]); 
  useEffect( () =>{
    console.log("hello")
    console.log("matchedUsers in matchGrid",matchedUsers)

  },[matchedUsers]); 
  
  //make it so that you can't like something multiple times if you like then thats it
  // in matchGrid we can make it so that 
  return(

             <div className="product-grid">
              
              <div className="content">
                  
                  <div className="grid">
                    {matchedUsers && matchedUsers.map((element, index) => (
                      <div className="card">
                        < RecipeReviewCard matchedUser={matchedUsers[index]}  />
                      </div>
                    ))}
                    </div>
                </div>
            </div>
  )
  //renderes based on if there are tems in the filtered or category arrays,
  // //else renders error with a message.
  // if(matchedUsers.length > 0){
  //     return(
  //         <div className="product-grid">
  //             <div className="product-grid-wrapper">
  //                 {matchedUsers.map((element, index) => (
  //                     < RecipeReviewCard matchedUsers={matchedUsers}  />
                    
  //                 ))}
  //             </div>
  //         </div>
          
  //     )
  // }
 
}
