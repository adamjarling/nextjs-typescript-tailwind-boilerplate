"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import ParallaxHero from "@/components/ParallaxHero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <ParallaxHero
          imageUrl="/images/IMG_0221.jpg"
          headline="Parallax Banner goes here"
          altText="Yo Mama"
          subHeadline="Some random subheadline content can go here to describe something"
          Button={<Button cb={() => console.log("yo")}>Get Started</Button>}
        />
        <Banner className="">
          <BannerHeadline>New Single Out Now</BannerHeadline>
          <p>Some subhead content here</p>
        </Banner>

        <Banner className="text-white bg-black">
          <BannerHeadline>Another Banner Headline</BannerHeadline>
          <p>Some subhead content here</p>
        </Banner>
      </main>
    </>
  );
}
