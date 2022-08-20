import React, { Component } from 'react';
import {Col} from "react-bootstrap";

class UsersClass extends Component {
    constructor(props){
        super(props);
        this.state = {users: [""]};
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> {
            response.json()
            .then((data) => {
                this.setState({users: data});
                console.log(data);
            })})
            .catch((error) => {
				console.log(error);
			});
            
    }


    render() {
        return (
      
        
            <div style={{paddingLeft: "3rem", textAlign: "left", paddingRight: "3rem", backgroundColor: "ghostwhite"}}>
                <h3  style={{textAlign: "left", color: "blue", paddingTop: "2rem"}}>React Lifecycle Api Class</h3>
            <Col md={6}>
                
                {this.state.users.map((item,index) =>{
                    return(
                        <div key={index}>
                            
                            <p>Name: {item.name}</p>
                            <p>Username: {item.username}</p>
                            <p>Email: {item.email}</p>
                            <hr />   
                        </div>
                    );
                })}
            </Col>
            </div>
        
        );
    }
}
export default UsersClass;
