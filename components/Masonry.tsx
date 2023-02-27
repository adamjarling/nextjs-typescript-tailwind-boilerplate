"use client";

import "yet-another-react-lightbox/styles.css";

import Image from "next/image";
import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";

import styles from "@/app/page.module.css";

export type MasonryImage = {
  filename: string;
  height: number;
  orientation: number;
  width: number;
  type: string;
};

interface Props {
  dir: string;
  images: MasonryImage[];
}

const MasonryGallery: React.FC<Props> = ({ dir, images }) => {
  const [photoIndex, setPhotoIndex] = useState(-1);

  const handleImageClick = (index: number) => {
    setPhotoIndex(index);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["my-masonry-grid"]}
        columnClassName={styles["my-masonry-grid_column"]}
      >
        {images.map((image, index) => (
          <div key={image.filename}>
            <Image
              onClick={() => handleImageClick(index)}
              width={image.width}
              height={image.height}
              alt={"alt"}
              src={`/${dir}/${image.filename}`}
              placeholder="blur"
              blurDataURL={`/${dir}/${image.filename}`}
            />
          </div>
        ))}
      </Masonry>
      <Lightbox
        open={photoIndex >= 0}
        index={photoIndex}
        close={() => setPhotoIndex(-1)}
        slides={images.map((i) => ({
          src: `/${dir}/${i.filename}`,
          key: i.filename,
          width: i.width,
          height: i.height,
          //   srcSet: images?.map((image) => ({
          //     src: `/${dir}/${i.filename}`,
          //     width: image.width,
          //     height: image.height,
          //   })),
        }))}
      />
    </>
  );
};

export default MasonryGallery;
