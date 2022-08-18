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
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import apiClient from "./Services/apiClient"
import nature from "./nature.png";


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

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#1798c1',
      darker: '#053e85',
    },
    neutral: {
      main: '#red',
      contrastText: '',
    },
  },
});

export default function SignUp({setUser, user }) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get("email"),
      password: data.get("password"),
      userName: data.get("userName"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };

    console.log(user);
    
    const res = await axios.post("http://localhost:3001/auth/register", user);
    if (res?.data?.user){
      console.log("response;",res?.data?.user)
      apiClient.setToken(res.data.token)
       setUser(res.data.firstName)
      console.log("log tokens: ", res.data)
      navigate("/preference")
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
          {/* Regigter lock icon */}
          <Avatar sx={{ m: 1, bgcolor: "#0d9dda" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="userName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>

                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "linear-gradient(to right, #0d9dda, #09bc8a)",color:"white" }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/log-in" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <div>
        <img
            style= {{"max-width":"100%","border-radius":"0px"}}
            alt="grass"
            src=	{nature}
          ></img>
        </div>
    </ThemeProvider>
  );
}

// import { useEffect, useState } from "react"
// import { useNavigate, Link } from "react-router-dom"
// // import apiClient from "./services/apiClient"
// import "./Register.css"
// import axios from "axios"
// console.log("line 6")
// export default function Register({ user, setUser ,setIsLoggedin,isLoggedin}) {
//   const navigate = useNavigate()
//   const [isProcessing, setIsProcessing] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [form, setForm] = useState({
//     first_name:"",
//     last_name:"",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     username:"",
//   })
//   // const [isLoggedin, setIsLoggedin] = useState(false)

//   useEffect(() => {
//     // if user is already logged in,
//     // redirect them to the home page
//     if (user?.email) {
//       setIsLoggedin(true)
//       navigate("/activity")
//     }
//   }, [user, navigate])

//   const handleOnInputChange = (event) => {
//     if (event.target.name === "email") {
//       console.log("email:",event.target.name)

//       if (event.target.value.indexOf("@") === -1) {

//         setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
//       } else {
//         setErrors((e) => ({ ...e, email: null }))
//       }
//     }

//     if (event.target.name === "passwordConfirm") {
//       if (event.target.value !== form.password) {
//         setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
//       } else {
//         setErrors((e) => ({ ...e, passwordConfirm: null }))
//       }
//     }

//     setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
//   }

//   const handleOnSubmit = async () => {
//     // console.log("email:",event.target.name)
//     setIsProcessing(true)
//     setErrors((e) => ({ ...e, form: null }))

//     if (form.passwordConfirm !== form.password) {
//       setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
//       setIsProcessing(false)
//       return
//     } else {
//       setErrors((e) => ({ ...e, passwordConfirm: null }))
//     }
//     console.log("email in register:",form.email)
//     // const  {data,error} = await apiClient.signupUser({email:form.email,password: form.password})
//     // if(error) setErrors((e)=> ({...e, form:error}))

//     try {
//         console.log("line 68")
//       const res = await axios.post("http://localhost:3001/auth/register", {
//         email: form.email,
//         password: form.password,
//         first_name: form.first_name,
//         last_name: form.last_name,
//         username: form.username
//       })

//       console.log("line 75")
//       console.log("res.data.user?",res.data.user)
//       if (res?.data?.user) {
//         setUser(res.data.user)
//         console.log("line67")
//         setIsLoggedin(true)

//       } else {
//         setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
//       }
//     } catch (err) {
//       console.log("line84")
//       console.log(err)
//       const message = err?.response?.data?.error?.message
//       setErrors((e) => ({ ...e, form: message ?? String(err) }))
//     } finally {
//       setIsProcessing(false)
//     }
//   }
// console.log("is it logged in",isLoggedin)
//   return (
//     <div className="Signup">
//       <div className="card">
//         <h2>Create Account</h2>

//         {errors.form && <span className="error">{errors.form}</span>}
//         <br />

//         <div className="form">
//           <div className="input-field">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter a valid email"
//               value={form.email}
//               onChange={handleOnInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//            <div className="input-field">
//             <label htmlFor="First Name">First Name</label>
//             <input
//               type="first_name"
//               name="first_name"
//               placeholder="Enter your first name"
//               value={form.first_name}
//               onChange={handleOnInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="input-field">
//             <label htmlFor="First Name">Last Name</label>
//             <input
//               type="last_name"
//               name="last_name"
//               placeholder="Enter your last name"
//               value={form.last_name}
//               onChange={handleOnInputChange}
//             />
//             {errors.email && <span className="error">{errors.email}</span>}
//           </div>

//           <div className="input-field">
//             <label htmlFor="Username">Username</label>
//             <input
//               type="username"
//               name="username"
//               placeholder="Enter your username"
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
//               placeholder="Enter a secure password"
//               value={form.password}
//               onChange={handleOnInputChange}
//             />
//             {errors.password && <span className="error">{errors.password}</span>}
//           </div>

//           <div className="input-field">
//             <label htmlFor="passwordConfirm">Confirm Password</label>
//             <input
//               type="password"
//               name="passwordConfirm"
//               placeholder="Confirm your password"
//               value={form.passwordConfirm}
//               onChange={handleOnInputChange}
//             />
//             {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
//           </div>

//           <button className="btn" onClick={handleOnSubmit}>
//             {/* {isProcessing ? "Loading..." : "Create Account"} */}
//             {isLoggedin ? <a href= {`http://localhost:3000/activity`}></a> : ""}
//           </button>
//         </div>

//         <div className="footer">
//           <p>
//             Already have an account? Login <Link to="/login">here</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
//   }
