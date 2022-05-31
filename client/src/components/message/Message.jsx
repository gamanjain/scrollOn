import "./message.css";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Message({ message, own }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useContext(AuthContext);
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={user?.profilePicture 
            ? PF+user.profilePicture 
            :user?.gender==="M"
            ? PF+"person/noPPM.png"
            : user?.gender==="W"
            ? PF+"person/noPPW.png"
            : PF+"person/noPPN.png"
          }
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}