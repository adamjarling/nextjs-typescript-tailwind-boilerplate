import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

import Link from "next/link";
import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { socialMedia } from "nttb-config";

const socialIcons = [
  {
    label: "Instagram",
    Icon: FiInstagram,
    url: socialMedia.instagram.url,
  },
  {
    label: "Facebook",
    Icon: FiFacebook,
    url: socialMedia.facebook.url,
  },
  {
    label: "YouTube",
    Icon: FiYoutube,
    url: socialMedia.youTube.url,
  },
];

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container flex flex-col items-center justify-center py-8 text-sm md:justify-between md:flex-row ">
        <div className="pb-3 md:pb-0">&copy; Website name</div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
