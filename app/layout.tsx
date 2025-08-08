// src/app/layout.tsx
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  subsets: ["latin"], // you can add 'latin-ext' if needed
  weight: ["400", "700", "800"], // choose weights you want
  display: "swap", // optional
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sen.className}>
      <body>{children}</body>
    </html>
  );
}
