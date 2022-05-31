import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Message from "./pages/messaging/Messaging";
import Messaging from "./pages/messaging/Messaging";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/" 
          element = {user ? <Home/> : <Login/>}
        />
        <Route exact path="/login" 
          element = {user ? <Navigate  to="/"/> : <Login/>}
        />
        <Route exact path="/register" 
          element = {user ? <Navigate  to="/"/> : <Register/>}
        />
        <Route exact path="/message" 
          element = {!user ? <Navigate  to="/"/> : <Messaging/>}
        />
        <Route exact path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
