import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kemal Adlığ | Mobile & DevOps Engineer",
  description: "Personal blog and portfolio of Kemal Adlığ, a Mobile Application Developer and DevOps Engineer based in Istanbul.",
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
          <footer className="py-8 border-t border-gray-200 dark:border-zinc-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Kemal Adlığ. All rights reserved.
              </div>

              <div className="flex items-center gap-6">
                <Link href="https://github.com/kemaladlig" target="_blank" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://linkedin.com/in/kemaladlig" target="_blank" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="mailto:kemaladligdev@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
