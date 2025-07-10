"use client";

import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingOverlay from "./components/LoadingOverlay";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
      </head>
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Loading overlay component */}
        {showLoader && <LoadingOverlay visible={loading} />}
      </body>
    </html>
  );
}
