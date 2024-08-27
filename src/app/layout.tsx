import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
  ),
  title: {
    default: "anyguess",
    template: "%s | anyguess",
  },
  description: 'Create your own "geoguessr" style challenges',
  keywords: [
    "geoguessr",
    "geoguesser",
    "custom geoguesser",
    "guess the location",
    "geoguesser game",
  ],
  creator: "Maciej Król",
  authors: [
    {
      name: "Maciej Król",
      url: "https://github.com/maciejkrol18",
    },
  ],
  openGraph: {
    title: "anyguess",
    description: "Create your own 'geoguessr' style challenges",
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
    siteName: "anyguess",
    type: "website",
    locale: "en_US",
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
