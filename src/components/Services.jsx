import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" flex flex-col justify-center h-auto px-5 mt-10 text-black  w-[100%] ">
      <div>
        <p className="m-2 text-3xl font-bold text-center text-black lg:text-5xl shrink-0">
          Our services
        </p>
      </div>

      <div className="flex flex-col items-center justify-center p-3 lg:flex-row ">
        <div>
          {" "}
          <p className="mt-10 text-2xl font-bold text-center lg:text-4xl lg:mb-10">
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
          <p className="mt-10 mb-10 text-2xl font-bold text-center lg:text-4xl ">
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
          <p className="mt-10 text-2xl font-bold text-center lg:text-4xl lg:mb-10">
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
          <p className="mt-10 mb-10 text-2xl font-bold text-center lg:text-4xl">
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
