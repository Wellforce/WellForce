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
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AppBar } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, ];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#DEF1FF',
            pt: 8,
            pb: 12,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Why Sign Up To Find A Wellness Partner?
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            When participating in wellness activicties with a partner, you're likely to feel more motivated. 
            When you and your partner encourage each other, you'll work harder and get better results. This is our main goal at WellForce!
            
            </Typography>
            <Container component="main" maxWidth="xs">
            <div>
            <img
                class="img"
                src="	https://puml.io/wp-content/uploads/2021/01/PUML-Corporate-Wellness-1.png"
                width="500"
                height="500"
                left="0"
                marginLeft="2vh"
                alt="Fitness"
              ></img>
            </div>
            </Container>
            
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      SignUp
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      
      {/* End footer */}
    </ThemeProvider>
  );
}








// export default function Home({ user, isFetching, posts, addPost, error }) {
//   const [count, setCount] = useState(0);
//   const bull = (
//     <Box
//       component="span"
//       sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//     >
//       •
//     </Box>
//   );

//   return (
//     <div className="App">
//       <>
//         {/* <SignIn></SignIn>  */}
//         {/* <Nutritionform user={user} addPost={addPost} /> */}

//         <CssBaseline />
//         <Container maxWidth={false} sx={{ height: "50vh", flexGrow: 1 }}>
//           <div class="Landing">
//             <div class="hero">
//               <img
//                 class="img"
//                 src="	https://blog.bonus.ly/hubfs/group-of-employees-meditating.png"
//                 width="500"
//                 height="500"
//                 left="300"
//                 alt="Fitness"
//               ></img>
//               <p>
//                 A Standford Study shows that a collobarative approach gives
//                 collaborators increased motivation on the task at hand so
//                 Wellness activities are best when done with others{" "}
//               </p>
//             </div>
//             {/* <div class = "site-footer">
                
//             <div class="tiles">
//               <div class="tile">
//                 <img
//                   src="	https://static.thenounproject.com/png/194115-200.png"
//                   width = "58"
//                   height = "58"
//                   alt="Fitness"
//                 ></img>
//                 <p>Choose Your Activities</p>
//               </div>
//               <div class="tile">
//                 <img
//                   src="https://cdn4.vectorstock.com/i/1000x1000/58/38/two-cartoon-women-playing-volleyball-isolated-vector-29325838.jpg"
//                   alt="Food"
//                   width = "58"
//                   height = "58"
//                 ></img>
//                 <p>See Your Matches</p>
//               </div>
//               <div class="tile">
//                 <img
//                   src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
//                   alt="Rest"
//                 ></img>
//                 <p >Pick Your Preferences</p>


//               </div>
            
//             </div>
//             </div> */}
//           </div>
//           <Container class="site-footer" sx={{ width: "50%", height: "50px" }}>
//             {/* <div class="tiles">
//                   <div class="tile">
                    

//                     <p>Choose Your Activities</p>
//                   </div>
//                   <div class="tile">
                    
//                     <p>See Your Matches</p>
//                   </div>
//                   <div class="tile">
//                     <img
//                       src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg"
//                       alt="Rest"
//                     ></img>
//                     <p >Pick Your Preferences</p>
    
    
//                   </div>
                
//                 </div> */}
//           </Container>
//           {/* <Box  /> */}
//         </Container>
//       </>
//       <div class="float-container">
//         <div class="float-child">
//           <div class="green"></div>

//           <Card sx={{ width: 300 }}>
//             <CardContent>
//               <Typography
//                 sx={{ fontSize: 14 }}
//                 color="text.secondary"
//                 gutterBottom
//               >
                
//               </Typography>
//               <Typography variant="h5" component="div">
//                Sign{bull}Up
//               </Typography>
//               <Typography sx={{ mb: 1.5 }} color="text.secondary">
           
//               </Typography>
//               <Typography variant="body2">
//                 {/* well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'} */}
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/5455/5455877.png"
//                   width="58"
//                   height="58"
//                   alt="Fitness"
//                 ></img>
//               </Typography>
//             </CardContent>
//             <CardActions>
              
//             </CardActions>
//           </Card>
//         </div>
//         <div class="float-child">
//           <div class="red"></div>
//           <img
//             src="	https://ouch-cdn2.icons8.com/LlQyGOlUPFCgt21DHqSvnqnrGF3YpEmE83o3lztvfJI/rs:fit:671:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDkw/LzU3ZmM5ZmQ4LTc5/MzUtNDhlNS05MzNk/LTNjNjdiNzQ4MTQ2/MS5zdmc.png"
//             width="58"
//             height="58"
//             alt="Fitness"
//           ></img>
//         </div>
      

//       <div class="float-child">
//         <div class="blue"></div>
//         <Card sx={{ width: 300 }}>
//           <CardContent>
//             <Typography
//               sx={{ fontSize: 14 }}
//               color="text.secondary"
//               gutterBottom
//             >
              
//             </Typography>
//             <Typography variant="h5" component="div">
//               Choose{bull}Your{bull}Preferences
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
         
//             </Typography>
//             <Typography variant="body2">
//               {/* well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'} */}
//               <img
//                 src="	https://static.thenounproject.com/png/194115-200.png"
//                 width="58"
//                 height="58"
//                 alt="Fitness"
//               ></img>
//             </Typography>
//           </CardContent>
//           <CardActions>
            
//           </CardActions>
//         </Card>
//       </div>

//       <div class="float-child">
//         <div class="red"></div>
//         <img
//           src="	https://ouch-cdn2.icons8.com/LlQyGOlUPFCgt21DHqSvnqnrGF3YpEmE83o3lztvfJI/rs:fit:671:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDkw/LzU3ZmM5ZmQ4LTc5/MzUtNDhlNS05MzNk/LTNjNjdiNzQ4MTQ2/MS5zdmc.png"
//           width="58"
//           height="58"
//           alt="Fitness"
//         ></img>
//       </div>

//       <div class="float-child">
//         <div class="yellow"></div>
//         <Card sx={{ width: 300 }}>
//           <CardContent>
//             <Typography
//               sx={{ fontSize: 14 }}
//               color="text.secondary"
//               gutterBottom
//             >
              
//             </Typography>
//             <Typography variant="h5" component="div">
//             See{bull}
//                 Your{bull}Matches
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
             
//             </Typography>
//             <Typography variant="body2">
//               {/* well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'} */}

//               <img
//                 src="https://media.istockphoto.com/vectors/venn-diagram-vector-id483619581?k=20&m=483619581&s=612x612&w=0&h=OeAuOM5mzBfPu0SXPtELeWBZrZQlytaUJSKGfk1gock="
//                 alt="Food"
//                 width="58"
//                 height="58"
//               ></img>
//             </Typography>
//           </CardContent>
//           <CardActions>
            
//           </CardActions>
//         </Card>
//       </div>
//     </div>
//     </div>
//   );
// }
