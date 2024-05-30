import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'QV', age: 20 },
        { id: 2, name: 'QV2', age: 21 },
        { id: 3, name: 'QV3', age: 22 },
    ]);

    const handleAddUser = (user) => {
        let listUsersNew = [user, ...listUsers];
        setListUsers(listUsersNew);
    }

    const handleDeleteUser = (id) => {
        let listUsersNew = [...listUsers];
        listUsersNew = listUsersNew.filter((user) => user.id !== id);
        setListUsers(listUsersNew);
    }

    return (
        <>
            <AddUserInfo
                addUser={(user) => handleAddUser(user)}
            />
            <DisplayInfo
                listUsers={listUsers}
                handleDeleteUser={(id) => handleDeleteUser(id)}
            />
        </>
    )
}

export default MyComponent;