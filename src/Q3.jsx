import React, { Component } from 'react';
import state from './posts';
import state2 from './users';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pro extends Component {
    render() { 

var id = state.map((items) =>items.id);
var title = state.map((items) =>items.title);
var body = state.map((items) =>items.body);
const styles ={

  margin:"50px",
  padding:"20px",
  width: "18rem"
};
const styles2={
  display: " inline-block",
}




        return (
        state2.map((item) =>
        <React.Fragment>
        <div style={styles2} key = {item.id}>
        <div key = {item.id} className="card" style={styles}>
        <h1>Name:</h1>
         <p  >{item.name}</p>
         <h1>Email:</h1>
        <p >{item.email}</p>
        <h1>Id:</h1>
       <p>{id[item.id - 1]}</p>
       <h1>Titele:</h1>
       <p>{title[item.id - 1]}</p>
       <p>{body[item.id - 1]}</p>
       <hr></hr>
         </div></div>
         
         </React.Fragment>
         
          )
        );
    }
}
 
export default Pro;
