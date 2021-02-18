import React from 'react';
import {useEffect, useState} from 'react';
import UserData from './userData';
import ReactDOM from 'react-dom';
import {fetchUser} from "./service";

const User = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchUser().then(val => setData(val))
    },[])

    return (
        <div className="container">
            {data.map((userData)=> <UserData key={userData.id} data={userData}/>)}
        </div>
    )
}

export default User;