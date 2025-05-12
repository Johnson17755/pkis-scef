import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <main>
      <section className="relative h-[70vh] min-h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Students collaborating in a professional setting"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center p-8 md:p-16 lg:max-w-3xl">
          <h1 className="mb-6 font-sans text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Internship <br />
            opportunities with SCEF
          </h1>

          <p className="mb-8 text-lg text-white md:text-xl">
            Our internships provide real-world experience in educational program
            management, event coordination, and research. Interns at NESA Africa
            will not only contribute to our mission but also develop
            professional skills that will serve them in their future careers.
          </p>

          <div>
            <Link
              href="/apply"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Become an Intern
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
