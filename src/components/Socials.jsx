import Image from "next/image";
import React from "react";

const Socials = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 ">
        <p className="text-5xl "> Our Socials</p>
        <div className="flex items-center justify-between gap-10 ">
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/discord.png"
              alt="discord"
              width={200}
              height={200}
              className=""
            />
            <p>Discord</p>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/telegram.png"
              alt="discord"
              width={200}
              height={200}
              className=""
            />
            <p>Telegram</p>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <Image
              src="/twitter.png"
              alt="discord"
              width={200}
              height={200}
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
