import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { fetchPosts } from "../services/api";
function ReadPost(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const loadPosts = async ()=>{
            try{
                const data = await fetchPosts();
                setPosts(data);
            }catch(error){
                console.error(error);
            }
        };
        loadPosts();
    },[]);

    return (
        <div>
            <h2>Posts</h2>
            <PostList posts={posts}/>
        </div>
    );
}
export default ReadPost;