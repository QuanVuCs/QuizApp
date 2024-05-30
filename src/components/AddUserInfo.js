import React, { useState } from 'react';

const AddUserInfo = (props) => {
    // const [userInfo, setUserInfo] = useState({
    //     id: Math.floor(Math.random() * 1000) + 'random',
    //     name: 'John Doe',
    //     address: '123 Main St',
    //     age: 25
    // });
    const [userID, setUserID] = useState(Math.floor(Math.random() * 1000) + 'random');
    const [name, setName] = useState('');
    const [age, setAge] = useState(20);
    // const [address, setAddress] = useState('123 Main St');


    const handleOnChangeName = (event) => {
        // setUserInfo({
        //     ...userInfo,
        //     name: event.target.value
        // });
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        // setUserInfo({
        //     ...userInfo,
        //     age: event.target.value
        // });
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        // setUserInfo({
        //     ...userInfo,
        //     id: Math.floor(Math.random() * 1000) + 'random'
        // });
        setUserID(Math.floor(Math.random() * 1000) + 'random');
        console.log('Form submitted');
        console.log({ id: userID, name: name, age: age });
        props.addUser({ id: userID, name: name, age: age });
    }

    return (
        <div className='add-user-container'>
            My name is {name}.<br />
            I am {age} years old.

            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    required={true}
                    onChange={(event) => handleOnChangeName(event)}
                />
                <br />
                <label>Age:</label>
                <input
                    type="text"
                    placeholder="Enter your age"
                    value={age}
                    required={true}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfo;