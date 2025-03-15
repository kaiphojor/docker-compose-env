import PostItem from './PostItem';

function PostList({ posts }) {
    return (
        <ul>
            {posts.map(post => (
                <PostItem key={post._id} post={post} />
            ))}
        </ul>
    );
}

export default PostList;
