import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ADSOPHOS(EEE) 2026",
  description: "ADSOPHOS 2026 — Innovate, Integrate, Transform. A national-level technical symposium by the Department of EEE, MJCET, Hyderabad.",
  icons: {
    icon: "/Adsophos logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-screen w-full overflow-x-hidden flex flex-col">
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}