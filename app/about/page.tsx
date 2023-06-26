import Image from "next/image";
import Main from "@/components/Main";
import casey from "@/public/images/IMG_0221.jpg";

const About = () => {
  return (
    <Main>
      <Image src={casey} alt="Casey artwork" />
      <section className="text-center section">Some text goes here</section>
    </Main>
  );
};

export default About;
