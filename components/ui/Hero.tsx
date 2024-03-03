"use client";
import React from "react";
import SearchTag from "./SearchTag";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
const socialIcons = [
  { link: "/#", icon: "fb" },
  { link: "/#", icon: "ig" },
  { link: "/#", icon: "tiktok" },
  { link: "/#", icon: "x" },
  { link: "/#", icon: "linkedin" },
];
function Hero() {
  return (
    <div className="flex flex-col py-5">
      <div className="max-w-screen-wrap mx-auto w-full px-5 space-y-5">
        <div className="justify-center rounded-md shadow-md bg-primary xl:px-10 min-h-96 flex items-center">
          <div className="max-w-5xl flex-1 mx-auto space-y-5 md:space-y-10 py-10">
            <h1 className="text-xl md:text-3xl lg:text-3xl text-center text-white">
              Find your building to activate
            </h1>
            <p className="text-3xl lg:text-4xl xl:text-5xl text-white text-center font-semibold">
              Branded Websites, Real Estate Alerts, <br />
              Social Media Posts & Condo Related Articles{" "}
            </p>
            <div className="max-w-3xl mx-auto px-5">
              <SearchTag />
            </div>
          </div>
        </div>
        <div className="justify-between rounded-md shadow-md bg-primary px-5 xl:px-10 flex flex-col lg:flex-row items-center pt-5 gap-5">
          <p className="text-white text-center lg:text-left text-xl lg:text-2xl xl:text-3xl max-w-2xl">
            Activate any building to receive branded marketing content delivered
            to your inbox for easy sharing
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-5">
            <div className="bg-white rounded-t-md p-5 pb-0">
              <h2 className="text-primary text-sm font-bold font-montserrat text-center ">
                NEW LISTINGv
              </h2>
              <p className="text-lg font-semibold text-black/80 text-center font-montserrat ">
                Brickell Tower
              </p>
              <p className="text-primary text-sm font-bold font-montserrat text-center uppercase whitespace-nowrap ">
                2bd 2ba $380,000
              </p>
              <Image
                src="/images/new-listing.png"
                alt="new listing"
                width={250}
                height={50}
                className="mt-2"
              />
            </div>

            <div className="flex gap-2 lg:min-w-72 justify-between items-center">
              {socialIcons.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-white w-8 lg:w-12 h-8 lg:h-12 rounded-md flex justify-center items-center ease-in-out duration-200 hover:text-primary hover:bg-white"
                  >
                    <Icon
                      name={item.icon}
                      className="w-4 h-4 lg:w-auto lg:h-auto"
                      size={28}
                      color="currentColor"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
