import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Switch } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Preference from "../Preferences/Preferences";
import SignIn from "../Login/log-in";
import FavMatches from "../Matches/FavMatches";
import nature from  "../nature.png"

import FavMatches2 from "../Matches/SuperMatchGrid";
import "../Dashboard/Dashboard.css";

import { useTheme } from "@mui/material/styles";
import MatchGrid from "../Matches/MatchGrid";

// import AppRouter from './AppRouter';
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Matches from "../Matches/Matches";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#white",
      contrastText: "",
    },
  },
});

console.log("in register");

// useEffect(() => {
//   // if user is already logged in,
//   // redirect them to the home page
//   if (user?.email) {
//     setIsLoggedin(true)
//     navigate("/activity")
//   }
// }, [user, navigate])

const pages = ["register", "log-in", "Matches"];
const settings = ["Edit Preferences", "Logout"];

export default function Dashboard({ setIsLoggedin, isLoggedin }) {
  const [match, setMatch] = React.useState(false);
  const [pref, setPref] = React.useState(false);
  const [fav, setFav] = React.useState(0);

  function handleClick() {
    if (match) {
      setMatch(false);
    } else {
      setMatch(true);
    }
    console.log("on click match ", match);
  }
  function handleClick1() {
    if (fav) {
      setFav(false);
    } else {
      setFav(true);
    }
    console.log("on click favorite ", fav);
  }

  return (
    <div class="dashboard">
      <div class="sidebar">
     
        <div>
        {/* <button class="See" onClick={handleClick}> */}
        <Typography variant="h6" color="#032E61">
 
       
        {match ?"Preferences" :"Matches"  }
        </Typography>
          {/* </button> */}
          <Switch onChange = {handleClick}  />
        </div>

        <div>
         
        </div>
        
      </div>
      <div class = "superLiked">
      



      </div>
      <div class="rendered">
      
        {match ?<Preference></Preference>  :<MatchGrid></MatchGrid> }

      </div>
      <div class="fav">
        <h2>Favorite Matches</h2>
        {<FavMatches></FavMatches>}
     
      </div> 
    </div>
  );
}