import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import usePlaceholder from "react-bootstrap/usePlaceholder";

function Add(props) {

    console.log(props.items)
   
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
            [evt.target.name]: value
        });
    }

    function saveProduct() {
        const api = 'https://fakestoreapi.com/products'
        state.id = props.items.length + 1;
        axios.post(api, state).then(() => {
            props.setItems([state, ...props.items]);
        })
    }

    function updateProduct() {
        const api = 'https://fakestoreapi.com/products/' + props.item.id
        let updatedItem = props.item
        updatedItem.title = state.title
        updatedItem.price = state.price
        updatedItem.category = state.category
        // axios.put(api, {updatedItem},
        //     ).then(response => {
        //         console.log(response)
        // })

        axios.put(api, updatedItem).then((response) => {
           // props.setItems([...props.items]);
            
           props.setItems(props.items.filter((items) => items.id !== props.item.id).concat(response.data));
        })
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (props.item) {
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    Update
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update products</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="name">Title:</label>
                        <input type="text" className="form-control" name="title" onChange={handleChange}
                            value={state.title} placeholder={props.item.title} id="title"></input>

                        <label htmlFor="price">Price:</label>
                        <input type="text" className="form-control" name="price" onChange={handleChange}
                            value={state.price} placeholder={props.item.price} id="price"
                        ></input>

                        <label htmlFor="category">Category:</label>
                        <input type="text" className="form-control" name="category" onChange={handleChange}
                            value={state.category} id="category"
                            placeholder={props.item.category}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" name="close" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" class="update" variant="primary" onClick={updateProduct}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    else {
        return (
            <>
                <Button class="addProduct
                " variant="info" onClick={handleShow}>
                    Add
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add products</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" name="title" onChange={handleChange}
                            value={state.title} id="title"
                            placeholder="title"></input>

                        <label htmlFor="price">Price:</label>
                        <input type="text" className="form-control" name="price" onChange={handleChange}
                            value={state.price} id="price"
                            placeholder="price"></input>

                        <label htmlFor="category">Category:</label>
                        <input type="text" className="form-control" name="category" onChange={handleChange}
                            value={state.category} id="category"
                            placeholder="category"></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary" onClick={saveProduct}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default Add;
