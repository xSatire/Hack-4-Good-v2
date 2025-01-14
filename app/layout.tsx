import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace",
  description: "Hack 4 Good Minimart",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={onest.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
