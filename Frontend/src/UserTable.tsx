import { useEffect, useState } from "react";
import type { User } from "./models/user";

const UserTable = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then((res) => res.json())
        .then(setUsers)
        .catch(console.error);
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({id, name}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;