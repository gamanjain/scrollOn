import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords don't match.");
        }
        else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch(err){
                console.log(err);
            } 
        }
    }

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ScrollOn</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on ScrollOn.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input
                        placeholder="Username" 
                        className="loginInput" 
                        ref = {username}
                        required
                    />
                    <input 
                        placeholder="Email" 
                        className="loginInput" 
                        required
                        ref={email}
                        type="email"
                    />
                    <input 
                        placeholder="Password" 
                        className="loginInput" 
                        required
                        ref={password}
                        type="password"
                        minLength={8}
                    />
                    <input 
                        placeholder="Confirm Password" 
                        className="loginInput" 
                        required
                        ref={confirmPassword}
                        type="password"
                    />
                    <button type="submit" className="loginButton">
                        Sign Up
                    </button>
                    <Link to="/login">
                        <button className="loginRegister">
                            Log In to Account
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}
