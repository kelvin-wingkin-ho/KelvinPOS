import { useEffect, useState } from "react";
import type { users } from '@prisma/client';

const UserTable = () => {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<users[]>([]);


    useEffect(() => {
        // set loading to true
        setLoading(true);

        // fetch data        
        fetch('http://localhost:3000/api/users')
        .then((res) => res.json())
        .then(setUsers)
        .catch(console.error)
        .finally(
            ()=>setLoading(false)
        );
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

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
                    {users.map(({id, username}) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;