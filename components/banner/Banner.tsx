import React from "react";

interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ children, className }) => {
  return (
    <section className={`container text-center py-8 md:py-10 ${className}`}>
      {children}
    </section>
  );
};

export default Banner;
