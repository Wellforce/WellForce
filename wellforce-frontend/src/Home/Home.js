import { useState, useEffect } from "react";
//import logo from './logo.svg'
//import './App.css'
import ResponsiveAppBar from "../Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SignUp from "../register";
// import SignIn from '../Log'
// import AppRouter from "../AppRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import "../Home/Home.css";
// import Nutritionform from "../NutritionForm/form";

export default function Home({ user, isFetching, posts, addPost, error }) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        {/* <SignIn></SignIn>  */}
        {/* <Nutritionform user={user} addPost={addPost} /> */}

        <CssBaseline />
        <Container
          maxWidth={false}
          sx={{  height: "100vh", flexGrow: 1 }}
        >
           
          <div class="Landing">
            <div class="hero">
            
            <img  class = "img"
                  src="	https://blog.bonus.ly/hubfs/group-of-employees-meditating.png"
                  width = "500"
                  height = "500"
                  left = "300"
                  alt="Fitness"
                
            ></img>
           <p >A Standford Study shows that a collobarative approach gives collaborators increased motivation on the task at hand so Wellness activities are best when done with others </p>  
              
              
            </div>
            <footer class = "site-footer">
                
            <div class="tiles">
              <div class="tile">
                <img
                  src="	https://static.thenounproject.com/png/194115-200.png"
                  width = "58"
                  height = "58"
                  alt="Fitness"
                ></img>
                <p>Choose your activities</p>
              </div>
              <div class="tile">
                <img
                  src="https://cdn4.vectorstock.com/i/1000x1000/58/38/two-cartoon-women-playing-volleyball-isolated-vector-29325838.jpg"
                  alt="Food"
                  width = "58"
                  height = "58"
                ></img>
                <p>See your Matches</p>
              </div>
              <div class="tile">
                <img
                  src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
                  alt="Rest"
                ></img>
                <p >Pick Your Preference</p>


              </div>
            
            </div>
            </footer>
          </div>

          {/* <Box  /> */}
        </Container>
      </>
    </div>
  );
}