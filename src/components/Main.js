import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./products";

const Main = () => {

    const [items, setItems] = useState([]);
    const api = 'https://fakestoreapi.com/products'
    useEffect(() => {
        const getItems = async () => {
            const { data: res } = await axios.get(api)
            setItems(res)
        };
        getItems();
    }, []);

    const handleDelete = async (item) => {
        await axios.delete(api + "/" + item.id );
        setItems(items.filter((items) => items.id !== item.id))
    }

    return (
        <div className="App">
            <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>Fake Store API</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(items => 
                            <tr key={items.id}>
                                <td>{items.title}</td>
                                <td>{items.price}</td>
                                <td>{items.category}</td>
                                <td name={items.id}><Add item={items} items={items} setItems={setItems} className="btn btn-info">Update</Add></td>
                                <td><button id={items.id} className="remove btn btn-warning" onClick={() => handleDelete(items)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div style={{ display: 'flex', alignpost: 'center', justifyContent: 'center', marginTop: 20 }}>
                <Add items={items} setItems={setItems} />
            </div>
        </div>
    );
};

export default Main;