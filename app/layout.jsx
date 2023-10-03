import "./globals.css";
import { Inter, Libre_Baskerville, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safnas Kaldeen portfolio",
  description:
    "My name is Safnas Kaldeen and I'm a full stack developer and a data scientist. This is my portfolio website where I showcase my projects and skills. I used Next.js, Tailwind CSS and Framer Motion to build this website and unlike other portfolio websites, this website is fully responsive and dynamic. I can easily add new projects and skills to this website without touching the code with my personal mongoDB database.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
