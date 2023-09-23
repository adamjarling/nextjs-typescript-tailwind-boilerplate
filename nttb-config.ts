const siteTitle = "Next.js TypeScript Tailwind Boilerplate";
const ogImage = "/images/simone-secci-WNLzDp4elWs-unsplash.jpg";

const config = {
  OPEN_GRAPH: {
    description: "Showcasing the ..",
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(ogImage)}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url: "https://adamarling.com",
  },
  SITE: {
    description: "Description of the site",
    name: "My Website",
    title: siteTitle,
  },
};

const nav = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/masonry-gallery",
    label: "Masonry Gallery",
  },
  {
    href: "/shows",
    label: "Shows",
  },
];

const socialMedia = {
  instagram: {
    handle: "",
    url: "",
  },
  facebook: {
    handle: "",
    url: "",
  },
  twitter: {
    handle: "",
    url: "",
  },
  spotify: {
    handle: "",
    url: "",
  },
  youTube: {
    handle: "",
    url: "",
  },
};

export { config, nav, socialMedia };
