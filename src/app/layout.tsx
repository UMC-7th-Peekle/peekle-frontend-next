import type { Metadata } from "next";
import "./styles/globals.css";
import Navbar from "@/common/layout/Navbar";

export const metadata: Metadata = {
  title: "피클",
  description: "피클",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full max-w-[1200px] mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
