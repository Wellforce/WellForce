import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import apiClient from "../Services/apiClient";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
// import * as React from 'react';
// import { Box, ThemeProvider, createTheme } from '@mui/system';

// const theme = createTheme({
//   palette: {
//     background: {
//       paper: '#fff',
//     },
//     text: {
//       primary: '#173A5E',
//       secondary: '#46505A',
//     },
//     action: {
//       active: '#001E3C',
//     },
//     success: {
//       dark: '#009688',
//     },
//   },
// });

export default function RecipeReviewCard({ matchedUser }) {
  // -1 disabled 0 if false 1 is true
  const [like, setLike] = useState(false);



  // useEffect(() => {}, [matchedUser]);

  const arr = [matchedUser.user_id];
 

  async function handleClick() {  
    // console.log("like status before:" , like)
    const res = await apiClient.updateLike(!like,matchedUser.user_id)
    // console.log("res in MatchCard333",res)
    setLike(!like)
    // console.log("like status after:" , like)
    window.location.reload();
  }

  useEffect(() => {
    const getLikeStatus = async () => {
      const res = await apiClient.checkIfLikeExists(matchedUser.user_id);
      // console.log("matched user: ",matchedUser.user_id)
      // console.log("res in matchCard:",res)
       setLike(res.data.favObj);
    };
    getLikeStatus();
  }, []);
   
     
 

  return (
    <Card sx={{ maxWidth: 345 , borderRadius: '10%',backgroundColor:"#DEF1FF" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
            {matchedUser ? matchedUser.matches : null}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={matchedUser ? matchedUser.first_name : null}
      />
 
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Username:{matchedUser ? matchedUser.username : null}
        </Typography>

        <Typography variant="body2" color="#032E61">
          email: {matchedUser ? matchedUser.email : null}

        </Typography>
        <Typography variant="body2" color="green">
        
           you have {matchedUser ? matchedUser.matches : null} preferences in common!


        </Typography>
        <Typography variant="body2" color="green">
            {matchedUser.matches > 3 ? "wow you guys have a lot in common!" : null}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleClick}
          disabled = {like <0}
          style={{
            backgroundColor: like ? "salmon" : "",
            color: like ?"#032E61"  : "",
          }}
        >
          <FavoriteIcon />
        </IconButton>
      
      </CardActions>
    </Card>
  );
}

