import { use, useEffect, useState } from "react";

const FetchDataFromApiAndRender = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const controller = new AbortController();
        fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => {
                if (err.name !== "AbortError") {
                    console.error(err);
                }
            })

        // cleanup function
        return () => {
            controller.abort();
        }
    }, [])
    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchDataFromApiAndRender;