import "./topbar.css";
import { BsSearch,BsFillPersonFill,BsFillChatDotsFill,BsFillBellFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">ScrollOn</span>
          </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <BsSearch className="searchIcon"/>
            <input placeholder="Search for friends or content" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topBarLinks">
            <Link to="/" className="linker">
            <span className="topbarLink">Homepage</span>
            </Link>
            <Link to="/" className="linker">
            <span className="topbarLink">Timeline
            </span>
            </Link>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <BsFillPersonFill/>
              <span className="topbarIconBadge">1</span>
            </div>
            <Link to="/message/" className="linker">
              <div className="topbarIconItem">
                <BsFillChatDotsFill/>
                <span className="topbarIconBadge">2</span>
              </div>
            </Link>
            <div className="topbarIconItem">
              <BsFillBellFill/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img 
                src={user?.profilePicture 
                  ? PF+user.profilePicture 
                  :user?.gender==="M"
                  ? PF+"person/noPPM.png"
                  : user?.gender==="W"
                  ? PF+"person/noPPW.png"
                  : PF+"person/noPPN.png"
                } 
                  alt="" 
                  className="topbarImg" 
            />
          </Link>
        </div>
    </div>
  )
}
