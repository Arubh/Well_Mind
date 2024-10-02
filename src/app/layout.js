import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/utils/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wellmind",
  description: "a mental health support website",
  icons: {
    icon: '/app/favicon.ico',
  },
};

export default async function RootLayout({ children }) {
   
  const session = await auth()
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar session={session}/>
          {children}
          <Footer />
      </body>
    </html>
  );
}
