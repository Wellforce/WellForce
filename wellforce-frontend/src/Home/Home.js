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
            
             
              <p>Wellness </p>
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
                <p>Fitness</p>
              </div>
              <div class="tile">
                <img
                  src="https://icon-library.com/icon/match-icon-4.html"
                  alt="Food"
                  width = "58"
                  height = "58"
                ></img>
                <p>Food</p>
              </div>
              <div class="tile">
                <img
                  src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
                  alt="Rest"
                ></img>
                <p>Rest</p>
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