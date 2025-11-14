import type { Metadata } from "next";
import { Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata: Metadata = {
  title: "UNSW PCSoc",
  description: "UNSW Computer Enthusiasts Society",
  icons: {
    icon: "/img/pcsoc_web.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
