import React, { useEffect } from 'react';
import axios from 'axios';

function DbConnectExample(){
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}`)
            .then(response=> console.log(response.data))
            .catch(error => console.error('API 호출 실패:',error));
    },[]);
    return(
        <div>
            MERN stack db connection
        </div>
    );
}

export default DbConnectExample;