import { NextResponse, NextRequest } from 'next/server'

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    session: {
        maxAge: 12 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {  
                token.id = user.id 
            }   
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id
            }
            return session
        },
        authorized({ auth, request }) {
            const user = auth?.user

            const isOnNewsPage = request.nextUrl?.pathname.startsWith("/news");
            const isOnQuizPage = request.nextUrl?.pathname.startsWith("/quiz");
            const isOnProfPage = request.nextUrl?.pathname.startsWith("/professionals");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");
            const isOnProfilePage = request.nextUrl?.pathname.startsWith("/profile");
            const isOnChatPage = request.nextUrl?.pathname.startsWith("/chatbot");

            if ((isOnNewsPage || isOnProfPage || isOnQuizPage ||  isOnProfilePage || isOnChatPage) && !user) {
                return false
            }
            
            if ((isOnLoginPage || isOnRegisterPage) && user) {
                return NextResponse.redirect(new URL("/", request.nextUrl));
            }
            return true
        },
    }, 
};   