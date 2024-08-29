import { getUserFromDb } from "@/utils/action";
import Profile from "@/components/Profile";

export default async function Page() {
    try {
        const user = await getUserFromDb();
        return <Profile user={user} />;
    } catch (err) {
        console.error("Error:", err);
        return <div>Error fetching user data: {err.message}</div>;
    }
}