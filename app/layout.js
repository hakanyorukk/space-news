import { Exo_2 } from "next/font/google";
const exo2 = Exo_2({ subsets: ["latin"], display: "swap" });

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: { template: "%s / Stellar News", default: "Stellar News" },
  description: "Everyting about Space!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`text-violet-50 ${exo2.className} min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 `}
      >
        <Header />
        <main className="h-full pt-12 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
