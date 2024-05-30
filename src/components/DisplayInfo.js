import React, { useState } from "react";
import './DisplayInfo.scss';

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [displayUser, setDisplayUser] = useState(true);

    const handleDisplay = () => {
        setDisplayUser(!displayUser);
    }

    return (
        <div className='display-info-container'>
            <div>
                <button onClick={() => { handleDisplay() }}>
                    {displayUser ? 'Hide' : 'Display'} User Info
                </button>
            </div>
            {displayUser &&
                <div>
                    {listUsers.map((user) => {
                        // console.log(user);
                        const className = user.age > 21 ? 'green' : 'red';
                        return (
                            <div key={user.id} className={className}>
                                <>
                                    <h2>{user.name}</h2>
                                    <p>Age: {user.age}</p>
                                    <hr />
                                </>
                                <>
                                    <button onClick={() => props.handleDeleteUser(user.id)} >Delete</button>
                                </>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfo;