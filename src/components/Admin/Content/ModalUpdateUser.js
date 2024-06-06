import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoMdAddCircle } from "react-icons/io";
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiServices';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdateUser, setDataUpdateUser, fetchAllUsers } = props;
    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage('');
        setImagePreview('');
        setDataUpdateUser({});
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataUpdateUser)) {
            setEmail(dataUpdateUser.email);
            setUsername(dataUpdateUser.username);
            setRole(dataUpdateUser.role);
            setImage('');
            if (dataUpdateUser.image) {
                setImagePreview(`data:image/jpeg;base64,${dataUpdateUser.image}`);
            }

        }
    }
        , [dataUpdateUser])

    const handleUploadImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            return;
        }
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        setImage(file);
    }


    const handleSubmitCreateUser = async () => {
        // validate
        if (!username) {
            toast.error('Please enter all fields');
            return;
        }

        // submit
        let data = await putUpdateUser(dataUpdateUser.id, username, role, image);
        if (data) {
            if (data.EC === 0) {
                toast.success(data.EM);
                handleClose();
                await fetchAllUsers();
            }
            else {
                toast.error(data.EM);

            }
        }

    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size='xl'
                backdrop='static'
                className='modal-create-user'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                disabled
                                placeholder='example@gmail.com'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                disabled
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select className="form-select" onChange={(e) => setRole(e.target.value)}>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <div className='col-md-12'>

                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <IoMdAddCircle />Upload File Image
                            </label>
                            <input
                                type='file'
                                id='labelUpload' hidden
                                onChange={(e) => { handleUploadImage(e) }}
                            />
                        </div>
                        <div className='col-md-12 img-preview'>
                            {
                                imagePreview ? <img src={imagePreview} alt='preview' /> : <span>Preview Image</span>
                            }

                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;