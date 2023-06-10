"use client";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

import { motion } from "framer-motion";
import Image from "next/image";
import { type } from "os";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import styles from "@/app/page.module.css";

export type MasonryImage = {
  filename: string;
  height: number;
  width: number;
  orientation?: number;
  type: string;
};

interface Props {
  dir: string;
  images: MasonryImage[];
  manifest?: {
    [key: string]: {
      title?: string;
      description?: string;
    };
  };
}

function getInfo(src: string, manifest: any) {
  if (!src || !manifest) return "";
  const arr = src.split("/");
  const fileName = src.split("/")[arr.length - 1];

  const info = manifest[fileName];

  return info || "";
}

const MasonryGallery: React.FC<Props> = ({ dir, images = [], manifest }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    //700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.filename}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={image.filename}
              width={image.width}
              height={image.height}
              onClick={() => handleImageClick(index)}
              alt={"alt"}
              className="cursor-pointer"
            />
          </motion.div>
        ))}
      </Masonry>
      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={images.map((i) => ({
          src: i.filename,
          key: i.filename,
          width: i.width,
          height: i.height,
          title: getInfo(i.filename, manifest)?.title || "",
          description: getInfo(i.filename, manifest)?.description || "",
        }))}
        plugins={[Captions]}
        captions={{
          descriptionTextAlign: "center",
        }}
      />
    </>
  );
};

export default MasonryGallery;
