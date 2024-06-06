import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';


const ModalViewUser = (props) => {
    const { show, setShow, dataViewUser, setDataViewUser } = props;
    const handleClose = () => {
        setShow(false)
        setEmail('');
        setPassword('');
        setUsername('');
        setRole('USER');
        setImage('');
        setImagePreview('');
        setDataViewUser({});
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (!_.isEmpty(dataViewUser)) {
            setEmail(dataViewUser.email);
            setUsername(dataViewUser.username);
            setRole(dataViewUser.role);
            if (dataViewUser.image) {
                setImagePreview(`data:image/jpeg;base64,${dataViewUser.image}`);
            }

        }
    }
        , [dataViewUser])

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
                    <Modal.Title>User info</Modal.Title>
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
                                disabled
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(e) => setRole(e.target.value)}
                                disabled
                            >
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        {/* <div className='col-md-12'>

                            <label className="form-label label-upload" htmlFor='labelUpload'>
                                <IoMdAddCircle />Upload File Image
                            </label>
                            <input
                                type='file'
                                id='labelUpload' hidden
                                onChange={(e) => { handleUploadImage(e) }}
                            />
                        </div> */}
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
                    {/* <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalViewUser;