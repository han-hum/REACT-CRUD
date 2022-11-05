import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import React from 'react';
//import Products from "./components/addProducts";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false
//     }
//   }

//   componentDidMount() {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           items: json,
//           isLoaded: true,
//         })
//       }).catch((err) => {
//         console.log(err);
//       });
//   }

//   render() {
//     const { isLoaded, items } = this.state;
//     if (!isLoaded)
//       return <div>Loading...</div>;


const App = () => {

  const [items, setItems] = useState([]);
    const api = 'https://fakestoreapi.com/products'
    useEffect(()=>{
        const getItems = async () =>{
            const {data:res} = await axios.get(api)
            setItems(res)
        };
        getItems();
    },[]);


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
                <th>title</th>
                <th>price</th>
                <th>category</th>
              </tr>
            </thead>
            <tbody>
              {items.map(items => (
                <tr key={items.id}>
                  <td>{items.title}</td>
                  <td>{items.price}</td>
                  <td>{items.category}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        <div style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop: 20}}>
        <button className="btn btn-info" style={{ margin: 2 }}> Add </button>
        <button className="btn btn-success" style={{ margin: 2 }}> Update </button>
        <button className="btn btn-warning" style={{ margin: 2 }}> Delete </button>
        </div>
      </div>
    );
  };


export default App;