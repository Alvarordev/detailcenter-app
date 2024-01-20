"use client";

import { useModal } from "@/context/modal-provider";
import { CarouselDemo } from "./card-carousel";

interface Props {
  title: string;
  url: string;
}

const Card = ({ title, url }: Props) => {
  const { openModal } = useModal();

  return (
    <div
      className="relative h-[260px] w-[340px] cursor-pointer"
      onClick={() => openModal(<CarouselDemo url={url} />)}
    >
      <div
        className="absolute object-cover z-10 h-full w-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      <div className="absolute bottom-0 z-20 w-full top-0 bg-black opacity-40 rounded-xl"></div>
      <h2 className="flex flex-col h-full justify-end relative z-20 text-card font-semibold text-2xl p-6">
        {title}
      </h2>
    </div>
  );
};

export default Card;
