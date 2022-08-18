
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useEffect} from 'react'
import { useState } from 'react';
import axios from 'axios';
import apiClient from "../Services/apiClient"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard2({matchedUser}) {
  const[likes,setLikes] = useState(false);
  
  // console.log("Favorite matches in card",matchedUser)
  useEffect( () =>{
   // console.log("hello")

// console.log("Favorite matchesin card",matchedUser)

  },[matchedUser]); 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const arr = [matchedUser.user_id]


  //to delete like
  function handleClick(){
    setLikes(!likes)
    console.log("boolean for likes ",likes )
    if(likes != true){
    apiClient.createLike(arr)
    }
  }
  //#032E61
  return (
    <Card sx={{ maxWidth: 345,boxRadius: 1,bgcolor:'#032E61' }}>
       
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[200] }} aria-label="recipe">
            {matchedUser? matchedUser.matches :null}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        sx ={{
        color : 'white'
        }}
        title={matchedUser? matchedUser.first_name :null}
      
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="white">
          Username:{matchedUser? matchedUser.username:null}
        </Typography>
       
        <Typography variant="body2" color="white">
          email:{matchedUser? matchedUser.email:null}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Your liked user</Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
