import React, { Component } from 'react';

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
                <h1 style={{textAlign: "left", color: "blue", marginTop: "0px"}}>React Lifecycle Api</h1>
                {this.state.users.map((item,index) =>{
                    return(
                        <div key={index}>
                            <p>Name: {item.name}</p>
                            <p>Username: {item.username}</p>
                            <p>Email: {item.email}</p>
                            <hr style={{border: "1px solid blue", marginRight: "85%"}} />   
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default UsersClass;
