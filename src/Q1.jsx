import React, { Component } from 'react';
import Pro from './Q3';
// import "../node-module/bootstrap/dist/css/bootstrap.css";

class Pro2 extends Component {
     state = {
        name : "Hello World",
        obj : {name: "Hello World Object"},
        data : ['We', 'are', 'United'], //Show these in seperate tags
        list : [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}], //Show these in seperate tags
        complex : [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' ,'Ionic']}]
            }

    render() { 
        return (
        <React.Fragment>
            <div>
            <h1> Render these into component:</h1>
            <div>{this.state.name}</div>
            <div>{this.state.obj.name}</div>
            <ul>
            {this.state.data.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ul>
            {this.state.list.map((item) => <li key={item.name}>{item.name}</li>)}
            </ul>
            <ul>
            {this.state.complex.map((item) => <li key={item.company}>{item.company},{item.jobs}</li>)}
            </ul>
            </div>
            <h1> Just copy and paste the data from these links and store them into a variable:</h1>
            <Pro/>
        
        </React.Fragment>
        );
    }
}
 
export default Pro2;


