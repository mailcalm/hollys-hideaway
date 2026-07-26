import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.hollyshideaway.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Holly's Hideaway | Nail Studio in Chelsfield, Orpington",
    template: "%s | Holly's Hideaway",
  },

  description:
    "Calm one-to-one builder gel, gel and nail polish manicures from a private home nail studio in Chelsfield, Orpington.",

  applicationName: "Holly's Hideaway",

  authors: [
    {
      name: "Holly's Hideaway",
      url: siteUrl,
    },
  ],

  creator: "Holly's Hideaway",
  publisher: "Holly's Hideaway",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Holly's Hideaway",
    title: "Holly's Hideaway | Nail Studio in Chelsfield, Orpington",
    description:
      "Calm one-to-one builder gel, gel and nail polish manicures from a private home nail studio in Chelsfield, Orpington.",
    images: [
      {
        url: "/images/studio.png",
        alt: "Holly's Hideaway private nail studio in Chelsfield, Orpington",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Holly's Hideaway | Nail Studio in Chelsfield, Orpington",
    description:
      "Calm one-to-one builder gel, gel and nail polish manicures from a private home nail studio in Chelsfield, Orpington.",
    images: ["/images/studio.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  manifest: "/site.webmanifest",

  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
