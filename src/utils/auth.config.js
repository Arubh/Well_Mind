import { NextResponse, NextRequest } from 'next/server'

export const authConfig = {
    pages: {
        signIn: "/login",
        //This line specifies that the sign-in page for your application is located at the URL path /login.
        //When users need to sign in, NextAuth will redirect them to this URL.
        //When false is returned from the authorized callback, NextAuth will automatically redirect the user to the sign-in page specified by the signIn property.
    },
    providers: [], //we dont have to mention providers as they are already mentioned in the auth.js file (Github and Credentials)
    callbacks: {
        async jwt({ token, user }) {
            //This callback is called whenever a JWT token is created or updated
            if (user) {  
                token.id = user.id 
            }   
            return token
            //using this funciton we can modify our jwt token and add fnew ields to it
        },
        async session({ session, token }) {
            //This callback is called whenever a session is checked or updated.
            if (token) {
                session.user.id = token.id
            }
            return session
            //using this function, we can modify our session through the token
        },
        authorized({ auth, request }) {
            const user = auth?.user
            //to determine which page the user is trying to access.
            const isOnNewsPage = request.nextUrl?.pathname.startsWith("/news");
            const isOnProfPage = request.nextUrl?.pathname.startsWith("/professionals");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");

            //only admins can read /admin page
            if ((isOnNewsPage || isOnProfPage) && !user) {
                return false
                //returning false will redirect the users to the page that we have mentioned above
            }
            
            //only unauthenticated ones can reach /login page
            if ((isOnLoginPage || isOnRegisterPage) && user) {
                return NextResponse.redirect(new URL("/", request.nextUrl));
            }
            return true
        },
    }, 
};   