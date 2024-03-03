import type { Metadata } from "next";
import { Inter, League_Spartan, Montserrat} from "next/font/google";
import "./globals.css";
import { ImageResponse } from 'next/og';
import Head from 'next/head'
const inter = Inter({ subsets: ["latin"] });
const leagueSpartan = League_Spartan({ subsets: ["latin"], variable:'--league_lpartan', });
const montserrat = Montserrat({ subsets: ["latin"], variable:'--montserrat', });

export const metadata: Metadata = {
  title: "The Keys Company",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${montserrat.variable} font-sans`} >
      <Head>
      <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-black/5">{children}</body>
    </html>
  );
}
