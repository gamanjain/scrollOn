import "./rightbar.css"
import {Users} from "../../dummy";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
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
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Bombay</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Unmarried</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Dr. Strange</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Iron Man</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Captain America</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Thor</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hulk</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Hawkeye</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
    </div>
  )
}
