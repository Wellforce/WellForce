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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Preference from "../Preferences/Preferences";
import SignIn from "../Login/log-in";
import FavMatches from "../Matches/FavMatches";
import nature from  "../nature.png"

import "../Dashboard/Dashboard.css";

import { useTheme } from '@mui/material/styles';
import MatchGrid from "../Matches/MatchGrid";

// import AppRouter from './AppRouter';
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Matches from "../Matches/Matches";

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#white',
      contrastText: '',
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

const pages = ["register", "log-in","Matches"];
const settings = ["Edit Preferences", "Logout"];

export default function Dashboard({ setIsLoggedin, isLoggedin }) {
  const [match, setMatch] = React.useState(false);
  const [pref, setPref] = React.useState(false);
  const[fav,setFav] = React.useState(false);

  function handleClick() {
    if(match){
    setMatch(false)
    }
    else{
        setMatch(true)
    }
    console.log("on click match ",match)
  }
  function handleClick1() {
    if(fav){
        setFav(false)
        }
        else{
            setFav(true)
        }
        console.log("on click favorite ",fav)
}


  return (
    <div class="dashboard">


<div class="sidebar">
<div>
<button class="See" onClick= {handleClick}>
Matches
</button >



</div>

<div>
<button class="Edit" onClick= {handleClick1}>
Liked
</button > 



</div>
<div>



</div>

</div>


<div class= "rendered">
     {match? <MatchGrid></MatchGrid> :< Preference></Preference>} 
    {/*   */}
    {fav?<FavMatches></FavMatches>:<MatchGrid></MatchGrid>}
    {/* <FavMatches></FavMatches>  */}
</div>
<div>
        <img
            style= {{"max-width":"100%","border-radius":"0px", "marginTop":"55%"}}
            alt="grass"
            src=	{nature}
          ></img>
        </div>
</div>


)
}




    // <ThemeProvider theme={theme}> 
    // <AppBar position="static" color="neutral" sx={{backgroundColor:"#DEF1FF", boxShadow: 0}}>
   
    //   <Container 
    //   // margin control for Wellforce logo
    //   sx={{margin:0, padding:0}}
    //   maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2, 
    //           display: { xs: "none", md: "flex" },
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    
    //       </Typography>

    //       <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>

    //       </Box>
    //       <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: "flex", md: "none" },
    //           flexGrow: 1,
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",

    //         }}
    //       >
    //         LOGO
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         {pages.map((page) => (
    //           // <a href={`http://localhost:3001/${page}`} target="_blank" rel="noreferrer" >

    //           <Button 
                
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, background: " " , backgroundColor: "#DEF1FF",color:"#0d9dda", textDecoration: "none", "&:hover":{backgroundColor:"lightgrey"}}}
    //           >
                  

    //             <Link className="buttons" to={`/${page}`}>
    //               {" "}
    //               {page}
    //             </Link>
    //           </Button>

    //           // </a>
    //         ))}
    //       </Box>
      

    //       {/* {isLoggedin ?  */}
    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: "45px", }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: "center",
    //             horizontal: "right",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "center",
    //             horizontal: "right",
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
              
    //         </Menu>
    //       </Box>
    //       {/* :  ""} */}
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    // </ThemeProvider>
 // );
