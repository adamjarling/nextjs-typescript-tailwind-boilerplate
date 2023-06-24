import "./globals.css";

import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

const siteTitle = "My Website";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: "Default description goes here",
  openGraph: {
    title: siteTitle,
    description: "Showcasing the ..",
    url: "https://adamarling.com",
    siteName: siteTitle,
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent("/images/IMG_0221.jpg")}`,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const links = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/masonry-gallery",
    label: "Masonry Gallery",
  },
];

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libreFranklin.className}>
      <body>
        <Nav links={links} />
        <>{children}</>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA}');
            `}
        </Script>
      </body>
    </html>
  );
}
