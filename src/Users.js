import React, {useState, useEffect} from "react";
import {Table} from 'react-bootstrap';

export default function Users() {
    const [data, setData] = useState([])
    useEffect( () => {
        function test() {
            let url = "https://jsonplaceholder.typicode.com/users"
            fetch(url).then((response) => {
                response.json().then((result) => {
                    console.warn(result)
                    setData(result)
                })
            }).catch((e) => {
                console.error(e)
            })
        }
        test()

    },[])
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}