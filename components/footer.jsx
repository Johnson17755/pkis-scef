"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo1.svg";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#0e335e] text-white py-12">
      <div className="container mx-auto px-30">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div>
            <Image
              src={logo}
              alt="SCEF Logo"
              width={160}
              height={60}
              className="mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <p>54, Falolu Street, Surulere, Lagos</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <p>+234-907-962-1110</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <p>+234-810-976-5897</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <p>nesa.africa@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Company Links + Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Company</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/mission"
                  className="hover:text-gray-300 transition"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/vision" className="hover:text-gray-300 transition">
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-gray-300 transition"
                >
                  Get Involved
                </Link>
              </li>
            </ul>

            {/* Newsletter Section inside Company Column */}
            <div className="py-12 w-full">
              <div className="w-140">
                <h3 className="text-xl font-semibold mb-4">
                  Subscribe to our Newsletter
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 mb-4"
                >
                  <input
                    type="email"
                    placeholder="Input your Email address"
                    className="bg-white text-gray-800 px-4 py-2 w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-black px-4 py-2 text-white flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
                <p className="text-sm max-w-sm">
                  Stay in the loop with the latest updates! Subscribe to our
                  newsletter for exclusive insights, exciting announcements, and
                  all things NESA 2025. Don't miss a beat.
                </p>
              </div>
            </div>
          </div>

          {/* Award Category 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Award Category</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nominate"
                  className="hover:text-gray-300 transition"
                >
                  Nominate your Champion
                </Link>
              </li>
              <li>
                <Link
                  href="/timelines"
                  className="hover:text-gray-300 transition"
                >
                  Award Timelines
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship"
                  className="hover:text-gray-300 transition"
                >
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Award Category 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Award Category</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/nominate"
                  className="hover:text-gray-300 transition"
                >
                  Nominate your Champion
                </Link>
              </li>
              <li>
                <Link
                  href="/timelines"
                  className="hover:text-gray-300 transition"
                >
                  Award Timelines
                </Link>
              </li>
              <li>
                <Link
                  href="/sponsorship"
                  className="hover:text-gray-300 transition"
                >
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">SCEF©2025</p>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link
              href="/terms"
              className="text-sm hover:text-gray-300 transition"
            >
              Terms and Condition
            </Link>
            <Link
              href="/privacy"
              className="text-sm hover:text-gray-300 transition"
            >
              Privacy
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <FaYoutube className="w-5 h-5 hover:text-gray-300 transition" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
