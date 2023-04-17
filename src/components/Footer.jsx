import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-[100vh] text-black bg-orange-100 ">
      <div className="flex flex-col lg:flex-row items-center justify-around lg:gap-[200px] ">
        <div className="lg:hidden">
          <Image
            src="/unicore.png"
            alt="Logo"
            width={200}
            height={200}
            className=""
          />
        </div>

        <div className="flex items-center justify-center lg:gap-[100px] ">
          <div className="flex flex-col items-center gap-4 ">
            <p>Contract</p>
            <p>Tokennomics</p>
            <p>Privacy Policy</p>
            <p>Security</p>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/unicore.png"
              alt="Logo"
              width={200}
              height={200}
              className=""
            />
          </div>

          <form className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center mx-auto mt-5 ">
              <p className=" lg:max-w-[300px]">
                Be the first to know the crypto market pulse with UniCore’s
                exclusive nesletter
              </p>
            </div>
            <div className="flex flex-col items-center">
              <label>Please enter Name here</label>
              <input
                type="text"
                placeholder="Name"
                className="p-2 bg-transparent border border-black rounded-lg "
              />
            </div>

            <div className="flex flex-col items-center">
              <label>Please enter Email here</label>
              <input
                type="email"
                placeholder="email"
                className="p-2 bg-transparent border border-black rounded-lg "
              />
            </div>
          </form>
        </div>
      </div>

      <div></div>
    </footer>
  );
};

export default Footer;
