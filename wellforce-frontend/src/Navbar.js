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
import SignUp from "./register";
import SignIn from "./Login/log-in";
import logo from "./logo.JPG";
import wellforcelogo2 from "./wellforcelogo2.png";
import "./Navbar.css";
import { useTheme } from '@mui/material/styles';

// import AppRouter from './AppRouter';
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export default function Navbar({ setIsLoggedin, isLoggedin, initial }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}> 
    <AppBar position="static" color="neutral" sx={{backgroundColor:"#DEF1FF", boxShadow: 0}}>
   
      <Container 
      // margin control for Wellforce logo
      sx={{margin:0, padding:0}}
      maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2, 
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* Wellforce logo */}
            <img width="200" height="100" src={wellforcelogo2}></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
                textDecoration: "none",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none",  },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",

            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              // <a href={`http://localhost:3001/${page}`} target="_blank" rel="noreferrer" >

              <Button 
                
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, background: " " , backgroundColor: "#DEF1FF",color:"#0d9dda", textDecoration: "none", "&:hover":{backgroundColor:"lightgrey"}}}
              >
                  

                <Link className="buttons" to={`/${page}`}>
                  {" "}
                  {page}
                </Link>
              </Button>

              // </a>
            ))}
          </Box>
      

          {/* {isLoggedin ?  */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"> {initial ? initial : null}  </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                //  <a href={`http://localhost:3001/`} target="_blank" rel="noreferrer" >

                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Link className="buttons" to={`/`}>
                    {setting}
                  </Link>
                  {/* <Typography textAlign="center">{setting}</Typography> */}
                </MenuItem>
                // </a>
              ))}
            </Menu>
          </Box>
          {/* :  ""} */}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
