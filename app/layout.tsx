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
      <html lang="en">
        <body className="font-poppins antialiased" suppressHydrationWarning>
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
