import { useEffect, useState } from "react";
import axios from 'axios';
function ReadPost(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/posts`)
            .then(response=>{
                setPosts(response.data);
            })
            .catch(error=>{
                console.error('Error fetching posts:',error);
            });
    },[]);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <p>Author: {post.author}</p>
                        <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}
export default ReadPost;