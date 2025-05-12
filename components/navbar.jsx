"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import donate from "@/assets/Vector.svg";
import group from "@/assets/group.svg";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              <Image className="h-10 w-auto" src={logo} alt="scef logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                About us
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                Get involved
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600">
                News and Update
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/donate"
              className="text-blue-500 border border-blue-500 px-4 py-2 rounded-3xl inline-flex items-center gap-2"
            >
              <Image src={donate} width={16} height={16} alt="donate" />
              Donate
            </Link>

            <Link
              href="/partner"
              className="bg-blue-600 text-white px-4 py-2 rounded-3xl inline-flex items-center gap-2"
            >
              <Image src={group} width={16} height={16} alt="group" />
              Partner with us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Our Services
            </Link>
            <Link
              href="/get-involved"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Get involved
            </Link>
            <Link
              href="/news"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              News and Update
            </Link>
            <div className="mt-4 space-y-2">
              <Link
                href="/donate"
                className="text-blue-500 border border-blue-500 px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <Image src={donate} width={16} height={16} alt="donate" />
                Donate
              </Link>
              <Link
                href="/partner"
                className="bg-blue-600 text-white px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <Image src={group} width={16} height={16} alt="group" />
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
