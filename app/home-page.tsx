"use client";

import HeroImage from "@/components/Hero";

export default function Home() {
  return (
    <>
      <main>
        <HeroImage
          headline="Headline goes here"
          imageUrl="/student-artwork/IMG_0229(1).jpg"
          altText="Hero"
        />

        <section className="section">
          <h2 className="text-xl bold">Educator</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />

        <section className="section">
          <h2 className="text-xl bold">Artist</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />

        <section className="section">
          <h2 className="text-xl bold">Observer</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />

        <section className="section">
          <h2 className="text-xl bold">Yogi</h2>
        </section>

        <div className="w-full h-36 bg-slate-400" />
      </main>
    </>
  );
}
