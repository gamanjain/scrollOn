import "./share.css"
import { MdPermMedia,MdLocationPin,MdOutlineCancel } from "react-icons/md"
import { BsFillTagFill,BsFillEmojiSunglassesFill } from "react-icons/bs"
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
      e.preventDefault();
      const newPost = {
          userId: user._id,
          desc: desc.current.value,
      }
      if(file){
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          try {
              await axios.post("/upload", data);
          } catch (error) {
              console.log("This is the error:\n"+error);
          }
      }
      else {
          console.log("File not found");
      };
      try{
        await axios.post("/posts", newPost);
        window.location.reload();
      }catch(err){
        console.log("Upload error: \n", err);
      }
  }

  return (
    <div className="share">
        <form className="shareWrapper" onSubmit={submitHandler}>
            <div className="shareTop">
                <img 
                    src={user.profilePicture 
                        ? PF+user.profilePicture 
                        :user.gender==="M"
                        ? PF+"person/noPPM.png"
                        : user.gender==="W"
                        ? PF+"person/noPPW.png"
                        : PF+"person/noPPN.png"
                    } 
                    alt="" 
                    className="shareProfileImg" 
                />
                <input 
                    placeholder="Share content here" 
                    className="shareInput" 
                    required
                    ref={desc}
                    maxLength={4000}
                />
            </div>
            <hr className="shareHr" />
            {file && (
                <div className="shareImgContainer">
                    <img 
                        className="shareImg" 
                        src={URL.createObjectURL(file)} 
                        alt="" 
                    />
                    <MdOutlineCancel className="shareCancelImg" onClick={() => setFile(null)} />
                </div>
            )}
            <div className="shareBottom">
                <div className="shareOptions">
                    <label className="shareOption" htmlFor="file">
                        <MdPermMedia className="shareIcon medias"/>
                        <span className="shareOptionText">Photo/Video</span>
                        <input 
                            type="file" 
                            id="file" 
                            accept=".png,.jpg,.jpeg,.mp4"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{display:"none"}}
                        />
                    </label>
                    <div className="shareOption">
                        <BsFillTagFill className="shareIcon tag"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <MdLocationPin className="shareIcon location"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <BsFillEmojiSunglassesFill className="shareIcon feelings"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share Post</button>
            </div>
        </form>
    </div>
  )
}
