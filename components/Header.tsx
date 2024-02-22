import Link from "next/link";
import React from "react";
import { DiscordLogoIcon, PlusIcon } from "@radix-ui/react-icons";
import { BiSolidServer } from "react-icons/bi";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Header = () => {
  return (
    <div className="md:flex md:flex-row md:gap-5 flex flex-col-reverse items-center justify-center  ">
      <div className=" w-full sm:w-[600px] sm:flex sm:flex-col sm:gap-5 mb-0 container   ">
        <div className="w-full mx-auto sm:mt-44 mt-10 font-bold flex flex-col gap-4">
          <h1 className="text-3xl sm:text-left font-light sm:text-6xl tracking-tight text-white">
            Take a leap,
          </h1>
          <h1 className="text-3xl sm:text-left font-light  sm:text-6xl tracking-tight text-white">
            soar in rhythm
          </h1>
          <div className="w-[440px]">
            <p className="flex w-full text-base py-3  font-medium text-text mt-2 font-quicksand">
              Hop in your voice channel to listen to the high quality music
              without having to leave Discord with your friends.
            </p>
          </div>
        </div>
        <div className="lg:flex flex flex-col text-black  items-center sm:items-start  sm:gap-10  z-[10000]">
          <div className=" xs:gap-10 sm:flex sm:flex-row   flex flex-col font-bold text-md tracking-wider  gap-7 ">
            <div className="xs:py-0  hover:scale-105 duration-300 flex group items-center">
              <Link
                href={"https://moosicbot.pro/invite"}
                target="_blank"
                className="bg-gradient-to-r from-[#E22236] to-[#992820] text-white  py-[1.2rem]  sm:px-7 px-[2.8rem] justify-center rounded-full flex gap-2 font-light "
              >
                <span>Add to server</span>
                <div>
                  <PlusIcon className="hover:transform group-hover:rotate-180 transition duration-500 w-5 h-6" />
                </div>
              </Link>
            </div>
            <div className="xs:py-0 pb-6 hover:scale-105 duration-300 flex group items-center relative">
              <Link
                href={"https://moosicbot.pro/discord"}
                target="_blank"
                className="border-white border-2 text-white hover:bg-gradient-to-r py-4 sm:px-7 px-10 rounded-full flex gap-2 font-normal"
              >
                <span>Join Discord</span>
                <div className="relative">
                  <div>
                    <ChevronRightIcon className="group-hover:translate-x-1 transition duration-500 w-9 h-7" />
                    <div className="absolute left-0 w-2 h-[0.2rem] -translate-y-[0.93rem] rounded-md bg-white group-hover:block hidden translate-x-1 group-hover:translate-x-[0.8rem] duration-300 "></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:translate-y-28">
        <Image
          src="/hero.svg"
          alt="logo"
          width={400}
          height={500}
          className="sm:w-full w-52"
        />
      </div>
    </div>
  );
};

export default Header;
