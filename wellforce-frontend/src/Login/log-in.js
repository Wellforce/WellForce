import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import nature from "../nature.png";
import apiClient from "../Services/apiClient";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        WellForce
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user);
    const res = await axios.post("http://localhost:3001/auth/log-in", user);
    if (res?.data?.user) {
      apiClient.setToken(res.data.token)
      navigate("/preference");
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* lock icon on login */}
          <Avatar sx={{ m: 1, bgcolor: "#0d9dda" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "linear-gradient(to right, #0d9dda, #09bc8a)" }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {/* Forgot password? */}
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <div>
        <img
            style= {{"max-width":"100%","border-radius":"0%"}}
            alt="grass"
            src=	{nature}
          ></img>
        </div>
    </ThemeProvider>
  );
}

// import { useEffect, useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import axios from "axios"
// import "./log-in.css"

// export default function Login({ user, setUser }) {
//   const navigate = useNavigate()
//   const [isProcessing, setIsProcessing] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     username:"",
//   })
// console.log("this form is",form)
//   useEffect(() => {
//     // if user is already logged in,
//     // redirect them to the home page
//     if (user?.email) {
//       navigate("/")
//     }
//   }, [user, navigate])

//   const handleOnInputChange = (event) => {
//     if (event.target.name === "email") {
//       if (event.target.value.indexOf("@") === -1) {
//         setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
//       } else {
//         setErrors((e) => ({ ...e, email: null }))
//       }
//     }

//     setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
//   }

//   const handleOnSubmit = async () => {
//     setIsProcessing(true)
//     setErrors((e) => ({ ...e, form: null }))
//     console.log("this form is submitted",form)
//     try {
//       const res = await axios.post("http://localhost:3001/auth/log-in", form)
//       if (res?.data?.user) {
//         setUser(res.data.user)
//       } else {
//         setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
//       }
//     } catch (err) {
//       console.log(err)
//       setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
//     } finally {
//       setIsProcessing(false)
//     }
//   }

//   return (
//     <div className="Login">
//       <div className="card">
//         <h2>Login</h2>

//         {errors.form && <span className="error">{errors.form}</span>}
//         <br />

//         <div className="form">
//           <div className="input-field">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="user@gmail.com"
//               value={form.email}
//               onChange={handleOnInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="input-field">
//             <label htmlFor="username">username</label>
//             <input
//               type="username"
//               name="username"
//               placeholder="username"
//               value={form.username}
//               onChange={handleOnInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="input-field">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="password"
//               value={form.password}
//               onChange={handleOnInputChange}
//             />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>

//           <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
//             {isProcessing ? "Loading..." : "Login"}
//           </button>
//         </div>

//         <div className="footer">
//           <p>
//             Don't have an account? Sign up <Link to="/register">here</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }
