import Image from "next/image";
import intern from "@/assets/intern.svg";
import inter from "@/assets/intern1.svg";

const WhyIntern = () => {
  return (
    <main className="container mx-auto px-4 py-12 md:px-18 lg:max-w-6xl">
      <section className="mb-16">
        <h1 className="mb-6 text-3xl font-bold text-black md:text-4xl">
          Why intern with SCEF
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-800 md:text-lg">
          Are you looking to jumpstart your career, gain unparalleled
          experience, and make valuable industry connections? Joining our
          organization as an intern offers you these opportunities and more.
          Here's why you should consider becoming a part of our esteemed team:
        </p>

        <div className="flex flex-col gap-18 md:flex-row">
          {/* Left column - Images */}
          <div className="relative md:w-2/5">
            <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md md:h-72">
              <Image
                src={intern}
                alt="Interns collaborating on a project"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative -mt-24 ml-12 h-64 w-full overflow-hidden rounded-lg shadow-md md:h-72">
              <Image
                src={inter}
                alt="Interns working together"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right column - Benefits */}
          <div className="flex flex-col gap-4 md:w-3/5">
            {/* Benefit 1 */}
            <div className="flex rounded-lg bg-gray-50 p-4">
              <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Professional Growth:
                </h3>
                <p className="text-gray-700">
                  Gain valuable experience and enhance skills by working in a
                  structured and high-performing environment.
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex p-4">
              <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-pink-500 text-2xl font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Networking Opportunities:
                </h3>
                <p className="text-gray-700">
                  Connect with industry professionals, mentors, and peers,
                  expanding your professional network.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex rounded-lg bg-gray-50 p-4">
              <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-teal-300 text-2xl font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Resume Enhancement:
                </h3>
                <p className="text-gray-700">
                  Having a prestigious organization on your resume can make you
                  more attractive to future employers.
                </p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex p-4">
              <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-purple-600 text-2xl font-bold text-white">
                4
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Access to Resources:
                </h3>
                <p className="text-gray-700">
                  Utilize state-of-the-art tools, technologies, and resources
                  that might not be available elsewhere.
                </p>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="flex rounded-lg bg-gray-50 p-4">
              <div className="mr-4 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md bg-yellow-400 text-2xl font-bold text-white">
                5
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Learning from Experts:
                </h3>
                <p className="text-gray-700">
                  Work alongside and learn from experienced professionals and
                  industry leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhyIntern;
