import ModalCreateUser from "./ModalCreateUser";
import './ManageUsers.scss';
import { IoMdAddCircle } from "react-icons/io";
import UserTable from "./UserTable";
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";


const ManageUsers = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
    const [showModalViewUser, setShowModalViewUser] = useState(false);
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [dataUpdateUser, setDataUpdateUser] = useState({});
    const [dataViewUser, setDataViewUser] = useState({});
    const [dataDeleteUser, setDataDeleteUser] = useState({});


    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers()
    }, [])

    const fetchAllUsers = async () => {
        let res = await getAllUsers()
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }

    const handleBtnUpdateUser = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdateUser(user);
    }

    const handleBtnViewUser = (user) => {
        setShowModalViewUser(true);
        setDataViewUser(user);
    }

    const handleBtnDeleteUser = (user) => {
        setShowModalDeleteUser(true);
        setDataDeleteUser(user);
    }

    return (
        <div className="manage-users-container">
            <div className="title">
                Manage users
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}><IoMdAddCircle />Add new user</button>
                </div>
                <div className="table-users-container">
                    <UserTable
                        listUsers={listUsers}
                        handleBtnUpdateUser={handleBtnUpdateUser}
                        handleBtnViewUser={handleBtnViewUser}
                        handleBtnDeleteUser={handleBtnDeleteUser}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchAllUsers={fetchAllUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    dataUpdateUser={dataUpdateUser}
                    setDataUpdateUser={setDataUpdateUser}
                    fetchAllUsers={fetchAllUsers}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setShowModalViewUser}
                    dataViewUser={dataViewUser}
                    setDataViewUser={setDataViewUser}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    dataDeleteUser={dataDeleteUser}
                    fetchAllUsers={fetchAllUsers}
                />
            </div>
        </div>
    )
}

export default ManageUsers;