import UserItem from './UserItem';

function UserList({ users }) {
    return (
        <ul>
            {users.map(user => (
                <UserItem key={user._id} user={user} />
            ))}
        </ul>
    );
}

export default UserList;
