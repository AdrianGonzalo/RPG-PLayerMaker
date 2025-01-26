import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "RPG Maker",
  description: "Crate your RPG player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{vt323.className}">{children}</body>
    </html>
  );
}
