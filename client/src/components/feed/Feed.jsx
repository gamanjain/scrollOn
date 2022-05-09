import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/timeline/62471866e493899aa9a9bd7e");
      setPosts(res.data);
    }
    fetchPosts();
  },[]);

  return (
    <div className="feed">
        <div className="feedWrapper">
            <Share/>
            {posts.map(p => (
              <Post key={p.id} post={p}/>
            ))}
        </div>
    </div>
  )
}
