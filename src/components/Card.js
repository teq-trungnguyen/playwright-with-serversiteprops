import React from "react";
import Image from "next/image";

const Card = ({ animal }) => {
  return (
    <div className="p-8 border border-solid border-orange-400 rounded bg-pink-500">
      <Image
        src={animal.src}
        alt="Picture of the author"
        width={500}
        height={500}
      ></Image>
      <p className="pt-4">{animal.content}</p>
    </div>
  );
};

export default Card;
