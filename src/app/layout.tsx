import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import Header from "@/components/Header";
import { profile } from "@/lib/content";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.name,
  description: `Portfolio, resume, and contact info for ${profile.name}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spectral.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
