import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 ">
        <p className="p-5 text-3xl "> Our Socials</p>
        <div className="flex items-center justify-between gap-10 p-5 ">
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/discord.png"
              alt="discord"
              width={100}
              height={100}
              className=""
            />
            <p>Discord</p>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/telegram.png"
              alt="discord"
              width={100}
              height={100}
              className=""
            />
            <p>Telegram</p>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/twitter.png"
              alt="discord"
              width={100}
              height={100}
              className=""
            />
            <p>Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
