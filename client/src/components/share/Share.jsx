import "./share.css"
import { MdPermMedia,MdLocationPin } from "react-icons/md"
import { BsFillTagFill,BsFillEmojiSunglassesFill } from "react-icons/bs"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input placeholder="Share content here" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <MdPermMedia className="shareIcon medias"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
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
                <button className="shareButton">Share Post</button>
            </div>
        </div>
    </div>
  )
}
