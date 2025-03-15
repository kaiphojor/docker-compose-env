function UserItem({ user }) {
    return (
        <li>
            {user.name} - {user.email}
        </li>
    );
}

export default UserItem;
