"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="flex items-center justify-between p-10">
        <div className="justify-start ">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-5 text-xl font-bold ">
            <li>Home</li>
            <li>Services</li>
            <li>Tools</li>
            <li>UniCore Protocol</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="p-1 text-white rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "" : "hidden"} md:hidden`}>
        <div className="flex flex-col bg-gray-500 text-white hover:bg-black items-center mx-auto rounded-lg ring-2 ring-white justify-center px-2 pt-2 pb-3 mr-10 space-y-1 border w-[60%] sm:px-3">
          <Link
            href="/home"
            className="block px-3 py-2 text-base font-medium rounded-md "
          >
            Home
          </Link>
          <Link
            href="/Services"
            className="block px-3 py-2 text-base font-medium rounded-md "
          >
            Services
          </Link>
          <Link
            href="/Tools"
            className="block px-3 py-2 text-base font-medium rounded-md "
          >
            Tools
          </Link>
          <Link
            href="/Tools"
            className="block px-3 py-2 text-base font-medium rounded-md "
          >
            UniCore Protocol
          </Link>
          <Link
            href="/Tools"
            className="block px-3 py-2 text-base font-medium rounded-md "
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
