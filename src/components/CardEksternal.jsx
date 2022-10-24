import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CardEksternal() {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        try {
            const api = "https://reqres.in/api/users?page=2";
            const data = await fetch(api);
            const result = await data.json();
            setUsers(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center py-5">
                <div className="col-lg-8  overflow-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID User</th>
                                <th scope="col">Email User</th>
                                <th scope="col">First Name User</th>
                                <th scope="col">Last Name User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <DisplayData data={users} /> */}
                            {users.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{e.id}</th>
                                        <td>{e.email}</td>
                                        <td>{e.first_name}</td>
                                        <td>{e.last_name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// function DisplayData(data = []) {
//     return data.map((e) => {
//         <tr key={index}>
//             <th scope="row">{e.id}</th>
//             <td>{e.email}</td>
//             <td>{e.first_name}</td>
//             <td>{e.last_name}</td>
//         </tr>;
//     });
// }
