function PostItem({ post }) {
    return (
        <li>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Created: {new Date(post.createdAt).toLocaleString()}</p>
        </li>
    );
}

export default PostItem;
