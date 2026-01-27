"use client";

import { useEffect, useState } from "react";

const Users = () => {
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        let ignore = false;

        const loadUsers = async () => {
            const res = await fetch(API_URL);
            const data = await res.json();
            if (!ignore) setUsers(data);
        };

        loadUsers();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
            <h1 className="text-3xl">List of Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
