import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "text-foreground bg-background",
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
