import "./topbar.css";
import { BsSearch,BsFillPersonFill,BsFillChatDotsFill,BsFillBellFill } from "react-icons/bs"
import { Link } from "react-router-dom";

export default function Topbar() {
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
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <BsFillPersonFill/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <BsFillChatDotsFill/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <BsFillBellFill/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
