import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" flex flex-col justify-center h-auto px-5 mt-10 text-black bg-orange-100 w-[100%] ">
      <div>
        <p className="text-5xl text-center text-black">Our services</p>
      </div>

      <div className="flex flex-col items-center justify-center p-3 lg:flex-row ">
        <div>
          {" "}
          <p className="mt-10 text-4xl font-bold text-center lg:mb-10">
            {" "}
            Sentiment Analysis SA
          </p>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <Image
              src="/horse1.png"
              alt="Logo"
              width={400}
              height={200}
              className=" mt-[70px] "
            />
            <p className=" lg:max-w-[2500px]">
              Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
              laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis
              nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
              convallis nunc massa laoreet.Lorem ipsum dolor sit amet
              consectetur. Nec convallis nunc massa laoreet.Lorem ipsum dolor
              sit amet consectetur. Nec conva Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>
        <div>
          <p className="mt-10 mb-10 text-4xl font-bold text-center ">
            Trading Signals
          </p>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <Image
              src="/horse2.png"
              alt="Logo"
              width={400}
              height={500}
              className=""
            />
            <p className="lg:max-w-[2500px]">
              Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
              laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis
              nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
              convallis nunc massa laoreet.Lorem ipsum dolor sit amet
              consectetur. Nec convallis nunc massa laoreet.Lorem ipsum dolor
              sit amet consectetur. Nec conva
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-3 lg:flex-row ">
        <div>
          {" "}
          <p className="mt-10 text-4xl font-bold text-center lg:mb-10">
            {" "}
            News and Market data
          </p>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <Image
              src="/horse1.png"
              alt="Logo"
              width={400}
              height={200}
              className=" mt-[70px] "
            />
            <p className=" lg:max-w-[2500px]">
              Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
              laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis
              nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
              convallis nunc massa laoreet.Lorem ipsum dolor sit amet
              consectetur. Nec convallis nunc massa laoreet.Lorem ipsum dolor
              sit amet consectetur. Nec conva Lorem ipsum dolor sit amet
              consectetur.
            </p>
          </div>
        </div>
        <div>
          <p className="mt-10 mb-10 text-4xl font-bold text-center ">
            Predictions
          </p>
          <div className="flex flex-col gap-3 lg:flex-row ">
            <Image
              src="/horse2.png"
              alt="Logo"
              width={400}
              height={500}
              className=""
            />
            <p className="lg:max-w-[2500px]">
              Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
              laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis
              nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
              convallis nunc massa laoreet.Lorem ipsum dolor sit amet
              consectetur. Nec convallis nunc massa laoreet.Lorem ipsum dolor
              sit amet consectetur. Nec conva
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
