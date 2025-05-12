"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import test from "@/assets/testimonial.svg";

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Interning at SCEF was a transformative experience. The hands-on projects and guidance from industry experts helped me develop my skills and boosted my confidence. I now have a clear career path and invaluable connections.",
      name: "John Doe",
      position: "Business Development Specialist at Google",
      image: test,
    },
    {
      quote:
        "My internship at SCEF opened doors I never thought possible. The mentorship I received was exceptional, and the projects I worked on gave me real-world experience that employers value highly.",
      name: "Jane Smith",
      position: "Program Manager at Microsoft",
      image: test,
    },
    {
      quote:
        "SCEF's internship program provided me with the perfect blend of challenge and support. I gained technical skills while also developing my leadership abilities. The network I built continues to benefit my career today.",
      name: "Michael Johnson",
      position: "Education Consultant at UNESCO",
      image: test,
    },
    {
      quote:
        "The internship at SCEF was the highlight of my educational journey. Working alongside passionate professionals who are committed to education in Africa inspired me to pursue a career in this field.",
      name: "Sarah Williams",
      position: "Project Coordinator at UNICEF",
      image: test,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-18  py-16">
      <h2 className="text-3xl font-bold mb-3">Hear from our past interns</h2>
      <p className="text-gray-700 mb-12 max-w-2xl">
        Hear what our past interns has to say about interning with SCEF and the
        impact it made in their life and career
      </p>

      <div className="relative">
        {/* Testimonial Card */}
        <div className="flex justify-center mx-auto px-17">
          <div className="border border-blue-500 rounded-lg p-12 bg-[#f8f9ff] relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 ">
              {/* Left side - Image */}
              <div className="md:w-1/3 flex-shrink-0">
                <div className="rounded-lg overflow-hidden relative w-full h-80 md:h-auto">
                  <Image
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={testimonials[currentSlide].name}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="md:w-2/3 flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl font-medium mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg">
                    -{testimonials[currentSlide].name}
                  </p>
                  <p className="text-gray-700">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-48 h-32 bg-blue-500 rounded-tr-full -z-10 opacity-80" />
            <div className="absolute top-0 right-0 w-48 h-32 bg-blue-500 rounded-bl-full -z-10 opacity-80" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-blue-500 h-8" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
