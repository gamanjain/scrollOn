import "./sidebar.css"
import { MdSchool,MdRssFeed,MdGroups } from "react-icons/md"
import { BsCalendar2EventFill,BsBriefcaseFill,BsFillChatDotsFill,BsPlayCircleFill,BsBookmarkFill,BsQuestionDiamondFill } from "react-icons/bs"
import { Users } from "../../dummy";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <MdRssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <BsFillChatDotsFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <BsPlayCircleFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <MdGroups className="sidebarIcon"/>
                    <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BsBookmarkFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <BsQuestionDiamondFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <BsBriefcaseFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <BsCalendar2EventFill className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <MdSchool className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map(u => (
                    <CloseFriends key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
