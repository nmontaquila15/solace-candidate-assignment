import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solace Candidate Assignment",
  description: "Show us what you got",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-2 h-14 fixed z-40 top-0 left-0 w-full bg-gradient-to-r from-sky-50 from-10% to-sky-600/40 to-80%">
          <h1 className="text-2xl">Solace Advocates</h1>
        </div>
        <main className="p-6 h-screen pt-14 bg-zinc-50">{children}</main>
      </body>
    </html>
  );
}
