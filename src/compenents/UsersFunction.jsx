import axios from "axios";
import React, { useState, useEffect } from "react";
import {Col,} from "react-bootstrap";

function UsersFunction() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setUsers(response.data);
				 console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
    
        
    
		<div style={{paddingLeft: "3rem", textAlign: "left", paddingRight: "3rem", backgroundColor: "ghostwhite"}}>
            <h3  style={{textAlign: "left", color: "blue", paddingTop: "2rem"}}>React Lifecycle Api Function</h3>
        <Col md={6}>
			{users.map((item) => {
				return (
					<div key={item.id}>
						<p>Name:{item.name}</p>
						<p>Username:{item.username}</p>
                        <p>Email:{item.email}</p>
                        <hr/>
					</div>
				);
			})}
        </Col>
		</div>
    
	);
}

export default UsersFunction;