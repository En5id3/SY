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
  description: "SOCHYEAH is a premier AI development company. We build custom AI agents, LLM architectures, full-stack software, and automated growth engines.",
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
    description: "SOCHYEAH is a premier AI development company. We build custom AI agents, LLM architectures, full-stack software, and automated growth engines.",
    url: "https://www.sochyeah.com",
    siteName: "SOCHYEAH",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development, Software & Automation Agency | SOCHYEAH",
    description: "SOCHYEAH is a premier AI development company. We build custom AI agents, LLM architectures, full-stack software, and automated growth engines.",
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

const globalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sochyeah.com/#organization",
  "name": "SOCHYEAH",
  "url": "https://www.sochyeah.com",
  "logo": "https://www.sochyeah.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/sochyeah/",
    "https://linkedin.com/company/sochyeah"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalOrganizationSchema) }}
        />
        {!isSevaSubdomain && <Header />}
        <main className={`flex-grow ${isSevaSubdomain ? "" : "pt-[80px]"}`}>{children}</main>
        {!isSevaSubdomain && <Footer />}
      </body>
    </html>
  );
}
