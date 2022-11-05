import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Add(props) {
    const [show, setShow] = useState(false);
    const [state, setState] = React.useState({
        id: 0,
        title: "",
        price: "",
        category: ""
    })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.title]: value
        });
    }

    function saveProduct() {
        const api = 'https://fakestoreapi.com/products'
        state.id = props.items.length+1;
        axios.items(api,state).then(() => {
            props.setItems([state,...props.it]);
        })
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="info" onClick={handleShow}>
                Add products
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" name="title" onChange={handleChange} value={state.title} id="title"
                           placeholder="Input"></input>

                    <label htmlFor="price">Price:</label>
                    <input type="text" className="form-control" name="price" onChange={handleChange} value={state.price} id="price"
                           placeholder="Input"></input>

                    <label htmlFor="category">Category:</label>
                    <input type="text" className="form-control" name="category" onChange={handleChange} value={state.category} id="category"
                           placeholder="Input"></input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={saveProduct}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
export default Add;