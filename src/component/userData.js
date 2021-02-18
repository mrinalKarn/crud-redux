import React from 'react';

const UserData = (props) => {

    return (
        <div className="post-container">
           <p><b>{props.data.name}</b></p>
           <p><i>{props.data.email}</i></p>
        </div>
    )
}

export default UserData;