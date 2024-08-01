import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { User } from "@/utils/models/User"
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { connectToDB } from "@/utils/dbConnect"
import { authConfig } from "@/utils/auth.config"


const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("user does not exist");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("password incorrect");
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { handlers: { GET, POST }, auth, signIn, signOut } =
  NextAuth({
    ...authConfig, //we have to extend the authConfig object here
    providers: [GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (error) {
          console.log(error)
          return null 
        }
      }
    })
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === "github") {
          await connectToDB();
          try {
            const user = await User.findOne({ email: profile.email });

            if (!user) {
              const newUser = new User({
                username: profile.login,
                email: profile.email,
                image: profile.avatar_url,
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
      // authorized({ auth, request }) {
      //we cant use this function here as the auth.js file contains node dependent libraries like bcrypt.
      //so we create another file auth.config.js and extend it later as shown below
      // }
      ...authConfig.callbacks
    }
  })