

const UserTable = (props) => {

    const { listUsers, handleBtnUpdateUser, handleBtnViewUser, handleBtnDeleteUser } = props;



    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={() => handleBtnViewUser(user)}
                                        >
                                            View
                                        </button>
                                        <button
                                            className="btn btn-primary mx-3"
                                            onClick={() => handleBtnUpdateUser(user)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleBtnDeleteUser(user)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        listUsers && listUsers.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center">Data not found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default UserTable;