import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto px-18 py-20">
      <div className="relative w-full h-80 rounded-2xl overflow-hidden">
        {/* Background Image */}
        <Image
          src={banner}
          alt="Happy interns"
          width={1050}
          height={500}
          className="object-cover"
          priority
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-white text-2xl md:text-4xl font-bold max-w-3xl mb-8">
            Ready to gain more industry experience and open doors to new
            opportunities
          </h2>

          <Link
            href="/apply"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Become an Intern
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
