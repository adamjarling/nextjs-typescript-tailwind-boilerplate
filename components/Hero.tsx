import Image from "next/image";

type HeroImageProps = {
  headline: string;
  imageUrl: string;
  altText: string;
  subHeadline?: string;
};

const HeroImage: React.FC<HeroImageProps> = ({
  headline,
  imageUrl,
  altText,
  subHeadline,
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src={imageUrl} alt={altText} fill className="z-0 object-cover" />
      <div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          {headline}
        </h1>
        {subHeadline && (
          <p className="text-lg text-white md:text-xl">{subHeadline}</p>
        )}
      </div>
    </div>
  );
};

export default HeroImage;
