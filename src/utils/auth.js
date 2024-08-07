import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/utils/models/User";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectToDB } from "@/utils/dbConnect";
import { authConfig } from "@/utils/auth.config";

const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ username: credentials.username });
 
    if (!user) throw new Error("User does not exist");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Password incorrect");
    return user;
  } catch (err) {
    console.log("99999999999999999"+err);
    throw new Error("Failed to login!");
  }
};

const generateUniqueUsername = async (baseUsername) => {
  let username = baseUsername;
  let counter = 1;

  while (await User.findOne({ username })) {
    username = `${baseUsername}${counter}`;
    counter++;
  }

  return username;
};

export const { handlers: { GET, POST }, auth, signIn, signOut } =
  NextAuth({
    ...authConfig, // Extend the authConfig object here
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      CredentialsProvider({ 
        async authorize(credentials) {
          if (credentials === null) return null;
          try {
            const user = await login(credentials);
            return user;
          } catch (error) {
            console.log("888888888888888"+error);
            throw new Error(error);
          }
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        console.log(account.provider);
        if (account.provider === "google") {
          console.log(profile);
          await connectToDB();
          try {
            let user = await User.findOne({ email: profile.email });

            if (!user) {
              const uniqueUsername = await generateUniqueUsername(profile.name);
              const newUser = new User({
                username: uniqueUsername,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
              });

              await newUser.save();
            }
          } catch (err) {
            console.log(err);
            return false;
          }
        }
        return true;
      },
      ...authConfig.callbacks,
    },
  });
