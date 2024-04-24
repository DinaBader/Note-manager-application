"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}> 
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
