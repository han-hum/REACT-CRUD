import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from "./products";

const Main = () => {

  const [items, setItems] = useState([]);
    const api = 'https://fakestoreapi.com/products'
    useEffect(()=>{
        const getItems = async () =>{
            const {data:res} = await axios.get(api)
            setItems(res)
        };
        getItems();
    },[]);

    
    const AddItem = async () => {
      const item = {title: 'title', price: 'price', category: 'category'};
      await axios.items(api,item)
      setItems([item,...items]);
  };

    return (
      <div className="App"
      //       style={{
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   marginTop: 20,
      // }}
      >
        <h1 style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop: 20}}>Fake Store API</h1>

        <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
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
              {items.map(items => (
                <tr key={items.id}>
                  <td>{items.title}</td>
                  <td>{items.price}</td>
                  <td>{items.category}</td>
                  <td><button className="btn btn-success" style={{ margin: 2 }}> Update </button></td>
                  <td><button className="btn btn-warning" style={{ margin: 2 }}> Delete </button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop: 20}}>
        <button className="btn btn-info" style={{ margin: 2, width: 200, fontSize: 30 }}> Add </button>
        </div>
      </div>
    );
  };

export default Main;