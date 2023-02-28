"use client";

import HeroImage from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <HeroImage
          headline="Headline goes here"
          imageUrl="/images/IMG_0221.jpg"
          altText="Hero"
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
