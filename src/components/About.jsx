import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="text-black bg-orange-100 h-fit">
      <div>
        {" "}
        <p className="m-10 text-5xl text-center ">About UniCore protocol</p>
      </div>
      <div className="flex flex-col items-center justify-between p-5 lg:flex-row ">
        <div>
          <Image
            src="/unicore.png"
            alt="Logo"
            width={400}
            height={200}
            className=""
          />
        </div>
        <div className="flex flex-col gap-5 lg:max-w-[500px] ">
          <p>
            UniCore Isn’t just your everyday trading tool, it is equipped with
            top level AI technology
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Magna ut diam porttitor
            aliquet. Enim accumsan id risus id sit tristique fames. Amet eget
            aliquam dictum pharetra scelerisque porttitor vitae suspendisse nec.
            Eget aenean aliquet felis scelerisque ipsum sed ac tortor. Nunc sed
            volutpat integer donec sed blandit nunc faucibus. Eu risus lobortis
            diam aliquam egestas malesuada congue in. Sit ut enim a lectus diam.
            Suscipit enim id nulla ornare. Tortor egestas nisl netus pharetra ut
            mauris turpis lobortis. Eget elementum turpis enim venenatis proin
            orci blandit in enim. Dolor et feugiat sit.Lorem ipsum dolor sit
            amet consectetur. Magna ut diam porttitor aliquet. Enim accumsan id
            risus id sit tristique fames. Amet eget aliquam dictum pharetra
            scelerisque porttitor vitae suspendisse nec. Eget aenean aliquet
            felis scelerisque ipsum sed ac tortor. Nunc sed volutpat integer
            donec sed blandit nunc faucibus. Eu risus lobortis diam aliquam
            egestas malesuada congue in. Sit ut enim a lectus diam. Suscipit
            enim id nulla ornare. Tortor egestas nisl netus pharetra ut mauris
            turpis lobortis. Eget elementum turpis enim venenatis proin orci
            blandit in enim. Dolor et feugiat sit.
          </p>

          <p className="bg-[#3E5A8C] p-5 w-fit mx-auto rounded-xl">
            Our Ai tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
