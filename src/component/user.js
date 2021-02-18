import React from 'react';
import {useEffect} from 'react';
import UserData from './userData';
import {fetchUser} from "./service";
import { useSelector,useDispatch } from 'react-redux';
import { addUser } from "./../action/userAction";

const User = () => {
    const dispatch = useDispatch();
    const dataStore = useSelector(state => state.user);

    useEffect(()=>{
        if(dataStore.length == 0){
            fetchUser().then(val => {
                dispatch(addUser(val));
            });
        }
    },[])

    return (
        <div className="container">
            {dataStore.map((userData)=> <UserData key={userData.id} data={userData}/>)}
        </div>
    )
}

export default User;