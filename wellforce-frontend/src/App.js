import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SignUp from "./register";
import SignIn from "./Login/log-in";
// import AppRouter from './AppRouter';
import Home from "./Home/Home";
import Navbar from "./Navbar";
// import Activity from './activity';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Preference from "./Preferences/Preferences";
import MatchGrid from "./Matches/MatchGrid"
import Dashboard from "./Dashboard/Dashboard";
function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const[initial,setInitial] = useState(null);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setIsFetching(true);

  //     try {
  //       const res = await axios.get("http://localhost:3000/preferences");
  //       if (res?.data?.posts1) {
  //         setError(null);
  //         setPosts(res.data.posts1);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       const message = err?.response?.data?.error?.message;
  //       setError(message ?? String(err));
  //     } finally {
  //       setIsFetching(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  const addPost = (newPost) => {
    setPosts((oldPosts) => [newPost, ...oldPosts]);
  };

  const updatePost = ({ postId, postUpdate }) => {
    setPosts((oldPosts) => {
      return oldPosts.map((post) => {
        if (post.id === Number(postId)) {
          return { ...post, ...postUpdate };
        }

        return post;
      });
    });
  };
console.log("initial", initial)
  return (
    <div className="app">
      <BrowserRouter>
        <main style={{backgroundColor:"#DEF1FF"}}>
          <Navbar
            setIsLoggedin={setIsLoggedin}
            isLoggedin={isLoggedin}
            count={count}
            setCount={setCount}
            setUser={setUser}
            user={user}
            posts={posts}
            setPosts={setPosts}
            Error={Error}
            setError={setError}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
            initial={initial}
            setInitial={setInitial}

          ></Navbar>
          <Routes>
            <Route path="/" setUser={setUser} user={user} element={<Home />} />
            <Route
              path="/register"
              element={
                <SignUp
                  setUser={setUser}
                  user={user}
                  setIsLoggedin={setIsLoggedin}
                  isLoggedin={isLoggedin}
                  initial={initial}
                  setInitial={setInitial}
                />
              }
            />
            <Route path="/log-in" element={<SignIn initial={initial}
                  setInitial={setInitial}/>} />
            {/* <Route path="/log-in" element={<S />} /> */}
            <Route path="/preference" element={<Preference />} />
            <Route path="/matchGrid" element={<MatchGrid />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            {/* <Route path="/activity" element={<Activity setIsLoggedin = {setIsLoggedin} isLoggedin = {isLoggedin} />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;
