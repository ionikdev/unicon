import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <div className="justify-start ">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>

        <div className="">
          <ul className="flex items-center justify-center gap-5 ">
            <li>Home</li>
            <li>Services</li>
            <li>Tools</li>
            <li>UniCore Protocol</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
