// app/profile/UserProfileClient.js (or your desired path)
'use client'; // Mark as a client component

export default function Profile({ user }) {
    return (
        <div className="lg:pl-[200px] lg:pr-[400px] px-10 pt-8 mb-[100px] font-serif">
            <h2
                className="lg:text-6xl text-5xl font-bold inline-block text-transparent bg-clip-text"
                style={{
                    backgroundImage: 'linear-gradient(to right, red, pink, pink)',
                    backgroundSize: '200% 200%', // Double the size for smooth animation
                    animation: 'moveGradient 10s ease infinite', // Attach the animation
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                User Profile
            </h2>
            <div className="flex flex-col gap-2 mt-4">
                <p>Username: {user.username}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            <div className="mt-2">
                <h2>Latest Quiz Score: </h2>
                <ul>
                    {Object.entries(user.scores).map(([key, value]) => (
                        <li key={key} className="ml-4 mt-1"><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
