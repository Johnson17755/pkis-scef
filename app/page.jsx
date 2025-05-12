import Banner from "@/components/banner";
import InternshipCarousel from "@/components/carousel";
import Hero from "@/components/hero";
import InternshipSteps from "@/components/intershipstep";
import TestimonialCarousel from "@/components/testimonial";
import WhyIntern from "@/components/whyIntern";

const Homepage = () => {
  return (
    <>
      <Hero />
      <WhyIntern />
      <InternshipCarousel />
      <TestimonialCarousel />
      <InternshipSteps />
      <Banner />
    </>
  );
};

export default Homepage;
