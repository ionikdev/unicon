import React from "react";

const Header = () => {
  return (
    <div className="w-[100%] header-bg    ">
      <div className="flex flex-col justify-center gap-10 mt-[100px] ">
        <p className="mx-auto text-5xl text-center lg:text-9xl ">
          Empowering AI
        </p>
        <p className="text-xl text-center lg:text-5xl">with </p>
        <div className="flex justify-center gap-3 text-3xl text-center lg:text-8xl">
          {" "}
          <p className="text-[#3E5A8C]"> Unicore</p> <p>Protocol</p>
        </div>

        <p className=" bg-[#FFC107] rounded-lg p-5 w-fit mx-auto">
          {" "}
          Get Started
        </p>

        <div className="mt-[100px] mx-auto">
          <header className="text-5xl text-center mb-[50px] ">
            UniCore Protocol
          </header>
          <p className="text-2xl text-center lg:max-w-[870px]">
            Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
            laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis nunc
            massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec convallis
            nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
            convallis nunc massa laoreet.Lorem ipsum dolor sit amet consectetur.
            Nec convallis nunc massa laoreet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
