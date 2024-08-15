// app/profile/page.js
import { getUserFromDb } from "@/utils/action";
import Profile from "@/components/Profile";

export default async function Page() {
    try {
        // Fetch user data from the database
        const user = await getUserFromDb();

        // Render the user data
        return <Profile user={user} />;
    } catch (err) {
        console.error("Error:", err);
        return <div>Error fetching user data: {err.message}</div>;
    }
}