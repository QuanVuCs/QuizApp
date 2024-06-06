import axios from '../utils/axiosCustom';
const postCreateUser = (email, password, username, role, image) => {

    // submit data
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.post('v1/participant', data);
};

const getAllUsers = () => {
    return axios.get('v1/participant/all');
};

const putUpdateUser = (id, username, role, image) => {

    // submit data
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);
    return axios.put('v1/participant', data);
};

const deleteUser = (id) => {
    return axios.delete('v1/participant', { data: { id: id } });
}

export { postCreateUser, getAllUsers, putUpdateUser, deleteUser };