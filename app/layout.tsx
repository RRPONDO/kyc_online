import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KYC Online",
  description: "developed by R Pondo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Theme>
            <NavBar></NavBar>
            <div className="ron">{children}</div>

            <Footer></Footer>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
