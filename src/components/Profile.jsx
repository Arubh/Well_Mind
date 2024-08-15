// app/profile/UserProfileClient.js (or your desired path)
'use client'; // Mark as a client component

export default function Profile({ user }) {
    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <div>
                <h2>Score</h2>
                <ul>
                    {Object.entries(user.scores).map(([key, value]) => (
                        <li key={key}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
