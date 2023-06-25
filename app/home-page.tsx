"use client";

import Button from "@/components/Button";
import HeroImage from "@/components/Hero";
import ParallaxHero from "@/components/ParallaxHero";

export default function Home() {
  return (
    <>
      <main>
        {/* <HeroImage
          headline="Headline goes here"
          imageUrl="/images/IMG_0221.jpg"
          altText="Hero"
        /> */}

        <ParallaxHero
          imageUrl="/images/IMG_0221.jpg"
          headline="Parallax Banner goes here"
          altText="Yo Mama"
          subHeadline="Some random subheadline content can go here to describe something"
          Button={<Button cb={() => console.log("yo")}>Get Started</Button>}
        />

        <section className="section">
          <h2 className="text-xl bold">Section 1</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />

        <section className="section">
          <h2 className="text-xl bold">Section 2</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />

        <section className="section">
          <h2 className="text-xl bold">Section 3</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />
      </main>
    </>
  );
}
