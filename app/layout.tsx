import "./globals.css";

import { FooterSimpleCentered, SocialIcons } from "zuma-blocks";
import { config, nav } from "nttb-config";

import Footer from "@/components/Footer";
import { Libre_Franklin } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/Nav";
import Script from "next/script";

const { OPEN_GRAPH, SITE } = config;

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libreFranklin",
});

export const metadata: Metadata = {
  description: SITE.description,
  openGraph: OPEN_GRAPH,
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
};

const footerInfo = {
  bandName: "Band Name",
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  socials: [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: SocialIcons.FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: SocialIcons.InstagramIcon,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: SocialIcons.TwitterIcon,
    },
  ],
};

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
        <div className="flex flex-col justify-between h-screen ">
          <Nav links={nav} />
          <div className="">{children}</div>
          {/* <Footer /> */}
          <FooterSimpleCentered
            bandName={footerInfo.bandName}
            nav={footerInfo.nav}
            socials={footerInfo.socials}
          />
        </div>

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
