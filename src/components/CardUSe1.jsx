import axios from "axios";
import React, { useEffect, useState } from "react";
import Title from "./Title";

export default function CardUSe1() {
    const [users, setUsers] = useState([]);

    const getApi = (data) => {
        let api = `https://jsonplaceholder.typicode.com/users/${data}`;
    };

    const getUsers = async (data) => {
        try {
            const { data } = await axios(
                `https://jsonplaceholder.typicode.com/users/`
            );
            setUsers(data);
        } catch (error) {
            console.log("Terjadi kesalahan");
        }
    };

    const getUserLive = async (getData) => {
        try {
            const { data } = await axios(
                `https://jsonplaceholder.typicode.com/users/${getData}`
            );
            setUsers(data);
        } catch (error) {
            console.log("Terjadi kesalahan");
        }
    };

    useEffect(() => {
        getUsers();
        getUserLive();
    }, []);
    return (
        <div className="container py-5">
            <Title
                title="Data Fetch API"
                content="Latihan Fetch API Using React"
            />

            <div className="row">
                <div className="col-lg-8 offset-2 ">
                    <input
                        type="text"
                        name=""
                        id=""
                        className={"form-control"}
                        onChange={(e) => getUserLive(e)}
                    />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">User email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
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
