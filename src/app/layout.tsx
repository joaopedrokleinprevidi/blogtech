import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Techformando",
  description: "Um portal de notícias sobre tecnologia.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2883204152245588"
          crossOrigin="anonymous"
        ></script>
        <script src="https://jsc.mgid.com/site/978806.js" async></script>

        <meta name="google-adsense-account" content="ca-pub-2883204152245588" />
      </head>
      <body
        className={`${poppins.className} bg-gray-50 flex flex-col justify-between h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
