import type { Metadata } from "next";
import { Inter } from "next/font/google"; // You might want to switch to 'Geist Sans' or 'Plus Jakarta Sans' for a more modern look
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kemal Adlığ | Mobile & Cloud Architect",
  description: "Senior Mobile Developer & Cloud Architect. Building scalable applications with React Native, Supabase, and Kubernetes.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kemal.dev',
    title: "Kemal Adlığ | Mobile & Cloud Architect",
    description: "Senior Mobile Developer & Cloud Architect. Building scalable applications with React Native, Supabase, and Kubernetes.",
    siteName: "Kemal Adlığ",
    images: [
      {
        url: '/og-image.png', // Ensure you maintain an OG image
        width: 1200,
        height: 630,
        alt: 'Kemal Adlığ Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kemal Adlığ | Mobile & Cloud Architect",
    description: "Building scalable apps with React Native and Cloud Native tech.",
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn(
        inter.variable,
        "font-sans antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary relative dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.05]"
      )}>
        {/* Radial gradient for the container to give a faded look */}
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[-1]"></div>
        <div className="fixed pointer-events-none inset-0 bg-noise opacity-[0.03] z-[-1] mix-blend-overlay"></div>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Default to dark for that meaningful first impression
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {/* Added relative positioning for z-index layering with global backgrounds if needed */}
          <main className="flex-grow pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-0">
            {children}
          </main>
          <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 mt-20 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2">
              <p>© {new Date().getFullYear()} Kemal Adlığ. Crafted with Next.js & Tailwind.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
