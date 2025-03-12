import React, { useEffect, useState} from 'react';
import axios from 'axios';

function DbConnectExample(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}`)
            .then(response=> {
                // console.log(response);
                const data = response.data;
                setUsers(data.users);
                // console.log(data); 
                console.log(data.message); // Logs: "Express 백엔드 동작 중!"
                // console.log(data.users); // Logs the totalUsers value
            })
            .catch(error => console.error('API 호출 실패:',error));
    },[]);
    return(
        <div>
            MERN stack mongodb data load
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default DbConnectExample;