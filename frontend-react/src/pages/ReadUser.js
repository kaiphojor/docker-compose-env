import { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';
import UserList from '../components/UserList';

function ReadUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };
        loadUsers();
    }, []);

    return (
        <div>
            <h2>MERN Stack MongoDB Data Load</h2>
            <UserList users={users} />
        </div>
    );
}

export default ReadUser;
