'use server'
import { signIn, signOut } from "@/utils/auth"
import { User } from "@/utils/models/User"
import { connectToDB } from "@/utils/dbConnect"
const bcrypt=require('bcryptjs')

export const handleGithubLogin = async () => {
    'use server'
    await signIn('github')
}

export const handleGithubLogout = async () => {
    'use server'
    console.log("Logout")
    await signOut()
}
export const handleRegister = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
        Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDB();

        const user = await User.findOne({ username });

        if (user) {
            return { error: "Username already exists" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        });

        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}
export const handleLogin = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" }; 
        }
        throw err;
    }
}