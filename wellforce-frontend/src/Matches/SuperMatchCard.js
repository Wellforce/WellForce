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

export default function RecipeReviewCard3({ matchedUser }) {
  // -1 disabled 0 if false 1 is true
  const [like, setLike] = useState(false);



  // useEffect(() => {}, [matchedUser]);

  const arr = [matchedUser.user_id];
 


 

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
          aria-label="share"
          onClick={() => {
            alert("clicked");
          }}
        ></IconButton>
      </CardActions>
    </Card>
  );
}
