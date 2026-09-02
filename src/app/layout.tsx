import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sochyeah.com"),
  title: {
    default: "AI Development, Software & Automation Agency | SOCHYEAH",
    template: "%s | SOCHYEAH"
  },
  description: "SOCHYEAH is a premier AI development company and product engineering partner. We build custom AI agents, LLM systems, full-stack software, and automated growth engines.",
  keywords: [
    "AI development company",
    "AI development agency",
    "software development company",
    "AI automation company",
    "machine learning development company",
    "product development partner",
    "custom software development",
    "AI agents",
    "RAG development",
    "SaaS development"
  ],
  authors: [{ name: "SOCHYEAH", url: "https://www.sochyeah.com" }],
  creator: "SOCHYEAH",
  publisher: "SOCHYEAH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.sochyeah.com",
  },
  openGraph: {
    title: "AI Development, Software & Automation Agency | SOCHYEAH",
    description: "We turn business problems and ideas into intelligent software systems, machine learning pipelines, and technical growth infrastructure.",
    url: "https://www.sochyeah.com",
    siteName: "SOCHYEAH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development, Software & Automation Agency | SOCHYEAH",
    description: "We turn business problems and ideas into intelligent software systems, machine learning pipelines, and technical growth infrastructure.",
    creator: "@sochyeah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isSevaSubdomain = headersList.get("x-seva-subdomain") === "true";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {!isSevaSubdomain && <Header />}
        <main className={`flex-grow ${isSevaSubdomain ? "" : "pt-[80px]"}`}>{children}</main>
        {!isSevaSubdomain && <Footer />}
      </body>
    </html>
  );
}
