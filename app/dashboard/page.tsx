const users = [
    { id : 1 , name : "John"},
    { id: 2, name: "Patrick"}
]

export default function Dashboard() {

    return (
        <main style={{
            padding: 20
        }}>
            <h1>Dashboard</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <a href="/">Back Home</a>
        </main>
    );

}