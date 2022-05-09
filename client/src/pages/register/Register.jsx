import "./register.css";

export default function Register() {
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
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Confirm Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegister">Log In to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
