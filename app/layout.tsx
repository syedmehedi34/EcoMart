import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s - EcoMart",
    default: "EcoMart Online Store",
  },
  description: "Your one-stop shop for eco-friendly products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="font-poppins">
        <body className="font-poppins antialiased" suppressHydrationWarning>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

/*
use:   sanity for data management  
use:   next-sanity package for easy integration with Next.js
npm:   npx sanity@latest init
web link: https://www.npmjs.com/package/next-sanity

*/
