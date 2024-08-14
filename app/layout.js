import { Exo_2 } from "next/font/google";
const exo2 = Exo_2({ subsets: ["latin"], display: "swap" });

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export const metadata = {
  title: { template: "%s / Galactic Gaze", default: "Welcome / Galactic Gaze" },
  description: "Everyting about Space!",
};
//text-violet accent sky
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` text-violet-50 ${exo2.className} min-h-[150vh] bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-950 `}
      >
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
