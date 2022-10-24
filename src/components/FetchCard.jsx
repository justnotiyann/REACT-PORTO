import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FetchCard() {
    const [users, setUsers] = useState([]);

    async function fetchData() {
        try {
            const api = "https://reqres.in/api/users?page=2";
            const result = await axios(api);
            setUsers(result.data.data);
        } catch (e) {
            console.log(e);
        }
    }

    async function deleteData() {
        try {
            const data = confirm("yakin?");
            return data
                ? alert("oke berhasil dihapus")
                : alert("tidak jadi dihapus");
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="row justify-content-center py-5">
                <div className="col-lg-8 overflow-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{e.id}</th>
                                        <td>{e.email}</td>
                                        <td>{e.first_name}</td>
                                        <td>{e.last_name}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={deleteData}
                                            >
                                                Hapus Datas
                                            </button>
                                            ||
                                            <button className="btn btn-warning">
                                                Edit Datas
                                            </button>
                                        </td>
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
