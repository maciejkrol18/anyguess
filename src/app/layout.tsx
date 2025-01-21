import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "text-foreground bg-background font-sans",
        )}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="container mx-auto grow py-8 relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
