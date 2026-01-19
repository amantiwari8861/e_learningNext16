"use client";

import { useEffect, useState } from "react";

const Users = () => {

    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log("Fetched users:", data);
        setUsers(data);
        return data;
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1 className="text-3xl">List of Users</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Users