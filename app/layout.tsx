import "./globals.css";

import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { SITE_CONFIG } from "site-config";

import Nav from "@/components/Nav";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.title}`,
  },
  description: "Default description goes here",
  openGraph: {
    title: SITE_CONFIG.title,
    description: "Showcasing the ..",
    url: "https://adamarling.com",
    siteName: SITE_CONFIG.title,
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
    <html lang="en" className={montserrat.className}>
      <body>
        <Nav links={links} />
        <>
          {children}
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
        </>
      </body>
    </html>
  );
}
