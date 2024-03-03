"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

interface PageProps {
  image: string;
  alt: string;
  title: string;
  describ: string;
  unit: number;
  price: number;
  priceDigit: string;
  button: boolean;
}
const ProductCard: React.FC<PageProps> = ({
  image,
  alt,
  title,
  describ,
  unit,
  price,
  priceDigit,
  button,
}) => {
  const [favorite, setFavorite] = useState(false);
  const favorites = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="flex flex-col border-t-8 border-primary rounded bg-white shadow-md">
      <div className="overflow-hidden flex-1 flex justify-center items-center ">
        <Image
          src={`${image}`}
          alt={alt}
          width={250}
          height={150}
          className="object-cover max-w-[none] min-w-full h-auto min-h-full"
        />
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-between gap-2">
          <h3 className="text-xl uppercase text-primary font-semibold truncate">
            {title}
          </h3>{" "}
          <button onClick={favorites} className="w-5 shrink-0">
            <Icon
              name={favorite ? "heartFill" : "heart"}
              size={20}
              color="currentColor"
              className={favorite ? "text-primary" : "text-black/10"}
            />
          </button>
        </div>
        <p className="text-xl text-black/55 max-w-72 font-semibold leading-snug">
          {describ}
        </p>
        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-xs text-black/45 uppercase font-semibold leading-none">
              Units
            </p>
            <p className="text-xl text-black/55 font-semibold leading-none">
              {unit}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-black/45 uppercase font-semibold leading-none">
              Starting From
            </p>
            <p className="text-xl text-black/55 font-semibold leading-none">
              ${price}
              {priceDigit}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={button}
              className="bg-primary hover:bg-primary-2 ease-in-out duration-200 rounded font-semibold text-white w-24 py-1  font-montserrat uppercase text-center"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
