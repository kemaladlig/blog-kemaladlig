import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kemal Adlığ | Mobile Developer",
  description: "Mobile developer building cloud-powered applications with React Native and DevOps. Specializing in scalable mobile apps, real-time systems, and automated infrastructure from development to deployment.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev',
    title: "Kemal Adlığ | Mobile Developer",
    description: "Mobile developer building cloud-powered applications with React Native and DevOps. Specializing in scalable mobile apps, real-time systems, and automated infrastructure from development to deployment.",
    siteName: "Kemal Adlığ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemal Adlığ | Mobile Developer",
    description: "Mobile developer building cloud-powered applications with React Native and DevOps. Specializing in scalable mobile apps, real-time systems, and automated infrastructure from development to deployment.",
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev'}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>
          <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Kemal Adlığ. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
