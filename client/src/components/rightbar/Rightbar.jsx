import "./rightbar.css"
import {Users} from "../../dummy";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrAdd, GrClose } from "react-icons/gr";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.following.includes(user?._id));
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  }

  const handleClick = async () => {
    try {
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow", {userId: currentUser._id});
        dispatch({type:"UNFOLLOW", payload: user._id});
      } else {
        await axios.put("/users/"+user._id+"/follow", {userId: currentUser._id});
        dispatch({type:"FOLLOW", payload: user._id});
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed)
  }

  useEffect(() => {
    setFollowed(currentUser.following.includes(user?._id))
  }, [currentUser, user?._id]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/"+user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    }
    getFriends();
  }, [user]);

  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img src={`${PF}gift.png`} alt="" className="birthdayImg"/>
          <span className="birthdayText">
            <b>Vision</b> and <b>3 other</b> friends have their birthdays today.
            </span>
        </div>
        <img src={`${PF}ad.png`} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return(
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <GrClose className="icon"/> : <GrAdd className="icon"/>}
        </button>
      )}
      {user.username === currentUser.username && (
        <button className="rightbarFollowButton" onClick={logout}>
          Logout
        </button>
      )}
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{
            user.relationship === 1
            ? "Single"
            : user.relationship === 2
            ? "Married"
            : "-"
            }</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {
            friends.map((friend) => {
              return (
              <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
                <div className="rightbarFollowing">
                  <img 
                    src={friend.profilePicture 
                      ? PF+friend.profilePicture 
                      :friend.gender==="M"
                      ? PF+"person/noPPM.png"
                      : friend.gender==="W"
                      ? PF+"person/noPPW.png"
                      : PF+"person/noPPN.png"
                    }  
                    alt="" 
                    className="rightbarFollowingImg" 
                    />
                  <span className="rightbarFollowingName">{friend.username}</span>
                </div>
              </Link>
            )})
          }
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {user ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
    </div>
  )
}
