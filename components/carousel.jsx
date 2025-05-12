"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import fcef from "@/assets/fcef.jpg";

const InternshipCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const internships = [
    {
      title: "Digital Services",
      description:
        "Interns Get To Work In Digital Content Management, Database Services & Digital Marketing.",
      image: fcef,
    },
    {
      title: "Administration and policy",
      description:
        "Interns Get Opportunities In The Administrative Support, Policy Research, And Strategy Implementation",
      image: fcef,
    },
    {
      title: "Project Management",
      description:
        "Interns Get To Work In Planning, Executing And Monitoring SCEF's Educational Projects.",
      image: fcef,
    },
    {
      title: "Community Outreach",
      description:
        "Interns Get To Engage With Communities And Help Implement Educational Programs Across Africa.",
      image: fcef,
    },
  ];

  const totalSlides = internships.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * currentSlide;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  return (
    <div className="max-w-6xl mx-auto px-18 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Available internship opportunities
      </h1>

      <div className="flex justify-between items-start mb-6">
        <p className="text-gray-700 max-w-3xl">
          Here are available internship opportunities at SCEF, you can click on
          apply to start interning with SCEF and open doors to new horizon get
          involved in the empowerment of education for all in Africa
        </p>

        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className=" rounded-lg overflow-hidden">
        <div ref={carouselRef} className="flex overflow-x-hidden scroll-smooth">
          {internships.map((internship, index) => (
            <div key={index} className="min-w-full flex gap-4 p-4">
              {[0, 1, 2].map((offset) => {
                const item = internships[(index + offset) % totalSlides];
                return (
                  <div
                    key={offset}
                    className="w-1/3 rounded-lg overflow-hidden bg-gradient-to-b from-blue-400 to-blue-700 text-white"
                  >
                    <div className="relative w-80 h-80">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              currentSlide === index ? "bg-blue-500 w-6" : "bg-gray-300"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InternshipCarousel;
