import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anderson's Portfolio",
  description: "Generated to show case skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-gray-50 text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
