import ModalCreateUser from "./ModalCreateUser";
import './ManageUsers.scss';
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";


const ManageUsers = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);


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
                    table of users
                </div>
                <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} />
            </div>
        </div>
    )
}

export default ManageUsers;