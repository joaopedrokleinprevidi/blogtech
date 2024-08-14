import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 flex flex-col justify-between h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
