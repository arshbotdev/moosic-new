"use client";
import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  ChatBubbleBottomCenterIcon,
  CreditCardIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const navData = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "Commands", path: "/commands", icon: <ChatBubbleBottomCenterIcon /> },
  {
    name: "Invite",
    path: "https://moosicbot.org/discord",
    icon: <WrenchScrewdriverIcon />,
  },
  { name: "Premium", path: "/premium", icon: <CreditCardIcon /> },
];

const Navbar = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2 sm:px-6 lg:px-8 sticky top-0 bg-transparent font-krona">
              <div className="relative flex md:h-32 h-24 items-center justify-between">
                <div className="flex flex-1 items-center justify-start  sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <Link href={"/"} className=" pl-2">
                      <Image
                        width={160}
                        height={160}
                        className="block lg:hidden"
                        src="/logo.png"
                        alt="Moosic"
                      />
                      <Image
                        width={160}
                        height={160}
                        className="hidden   lg:block"
                        src="/logo.png"
                        alt="Moosic"
                      />
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center">
                    <div className="flex space-x-4 ">
                      {navData.map((item, index) => (
                        <Link
                          key={index}
                          href={item.path}
                          target={`${
                            item.path === "https://moosicbot.org/discord"
                              ? "_blank"
                              : ""
                          }`}
                          className={`${
                            item.name === "Premium" ? "text-gold " : ""
                          }  ${
                            pathname === item.path || item.name === "Premium"
                              ? "text-accent"
                              : "text-white hover:text-accent duration-300"
                          } rounded-md px-2 py-1 text-sm font-medium group`}
                        >
                          <div className="lg:hidden block h-7 w-7">
                            {item.icon}
                          </div>
                          <div className="flex gap-1">
                            <div className="lg:block hidden">{item.name}</div>
                            <div className="lg:block hidden -translate-y-1">
                              {item.name === "Premium" ? (
                                <Image
                                  src="/diamond.svg"
                                  height={25}
                                  width={25}
                                  alt="diamond"
                                  className="group-hover:scale-125"
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden  md:flex items-center mr-10">
                    <div className="bg-red text-white py-3 px-5 rounded-full">
                      LOGIN
                    </div>
                  </div>
                </div>
                <div className="right-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <div className="px-3 pt-2">
                    <button
                      type="button"
                      className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                      onClick={() => setMobileFiltersOpen(true)}
                    >
                      <Image
                        src="/mobile.svg"
                        width={25}
                        height={25}
                        alt="mobile"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as="div"
                className="relative z-40 lg:hidden font-quicksand"
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 " />
                </Transition.Child>

                <div className="fixed inset-0 z-40 flex backdrop-blur-sm">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="relative justify-between ml-auto flex  h-full w-[300px] max-w-xs flex-col overflow-y-auto bg-c1 py-4 pb-12 shadow-xl">
                      <div>
                        <div className="flex items-center justify-end mx-7 mt-4">
                          <button
                            type="button"
                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md   p-2 text-gray-400"
                            onClick={() => setMobileFiltersOpen(false)}
                          >
                            <Image
                              src="/cross.svg"
                              width={20}
                              height={20}
                              alt="mobile"
                            />
                          </button>
                        </div>
                        <div className="flex flex-col gap-5 pt-10 px-10">
                          {navData.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              target={`${
                                item.path === "https://moosicbot.org/discord"
                                  ? "_blank"
                                  : ""
                              }`}
                            >
                              <div
                                className={`${
                                  pathname === item.path
                                    ? "bg-accent text-white"
                                    : "text-gray-300 hover:bg-accent  hover:text-white duration-300"
                                }
                              rounded-md px-2 py-1 text-[16px] font-semibold`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-7 h-7">{item.icon}</div>
                                  <div>{item.name}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex w-full items-center justify-center">
                        <div className="text-xl font-semibold bg-accent w-full flex justify-center mx-10 rounded-md text-white py-1">
                          Login
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
