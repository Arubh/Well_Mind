'use server'
import { signIn, signOut, auth } from "@/utils/auth"
import { User } from "@/utils/models/User"
import { connectToDB } from "@/utils/dbConnect"
const bcrypt = require('bcryptjs')

export const handleGoogleLogin = async () => {
    'use server'
    await signIn('google')
}

export const handleLogout = async () => {
    'use server'
    await signOut()
}
export const handleRegister = async (previousState, formData) => {
    'use server'
    const { username, name, email, password, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDB();

        const user1 = await User.findOne({ username });
        const user2 = await User.findOne({ email });

        if (user1) {
            return { error: "Username already exists. Please choose another username." };
        }
        if (user2) {
            return { error: "Email already in use!" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log("saved to db");

        await signIn("credentials", { username, password });
        return { success: true };
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};
export const handleLogin = async (formData) => {
    console.log("formData",formData);

    try {
        const res = await signIn("credentials", { 
            username: formData.get("username"), 
            password: formData.get("password"),  
            redirect: false, });
        return res;
    } catch (err) {
        console.log("5555555555555555"+err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};

export const updateQuizScores = async (quizScores) => {
    'use server'
    try {
        // Connect to the database
        await connectToDB();

        // Fetch the current session
        const session = await auth();
        if (!session || !session.user || !session.user.email) {
            throw new Error('User not authenticated');
        }

        // Find the user by email (or username if you prefer)
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            throw new Error('User not found');
        }

        // Update or create quiz scores
        const updatedUser = await User.findOneAndUpdate(
            { email: session.user.email },
            { $set: { scores: quizScores } },
            { new: true} // `upsert` creates a new document if one doesn't exist
        );

        console.log("Quiz scores updated:", updatedUser);

        return { success: true };
    } catch (err) { 
        console.error("Error updating quiz scores:", err);
        return { error: err.message };
    }
};

export const getUserFromDb = async () => {
    try {
        await connectToDB();

        // Fetch the current session
        const session = await auth();
        if (!session || !session.user || !session.user.email) {
            throw new Error('User not authenticated');
        }

        // Find the user by email
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (err) {
        console.error("Error fetching user:", err);
        throw new Error(err.message);
    }
};