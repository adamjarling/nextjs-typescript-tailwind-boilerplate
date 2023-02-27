import { promises as fs } from "fs";
import path from "path";

import MasonryGallery, { MasonryImage } from "@/components/Masonry";
const sizeOf = require("image-size");

const GalleryPage = async () => {
  const imageDirectory = path.join(process.cwd(), "/public/masonry-images");
  const imageFilenames = await fs.readdir(imageDirectory);
  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: ifn,
      ...dimensions,
    };
  });

  return (
    <>
      <section className="max-w-3xl py-8 mx-auto text-center">
        Something goes here
      </section>
      <MasonryGallery dir="masonry-images" images={images} />
    </>
  );
};

export default GalleryPage;
