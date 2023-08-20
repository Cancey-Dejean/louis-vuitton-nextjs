"use client"
import Link from "next/link"
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid"
// import { Fragment, useState } from "react"
// import { Dialog, Transition } from "@headlessui/react"
// import MenuModal from "./MenuModal"

import { Dialog, Transition, Popover } from "@headlessui/react"
import { Fragment, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import classNames from "classnames"
import SearchModal from "./SearchModal"

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const [show, setShow] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlHeader = () => {
    if (window.scrollY > 0) {
      if (window.scrollY > 0 && window.scrollY > lastScrollY) {
        setShow("hideHeader")
      } else {
        setShow("showHeader")
      }
    } else {
      setShow("")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlHeader)
    return () => {
      window.removeEventListener("scroll", controlHeader)
    }
  }, [lastScrollY])

  useEffect(() => {
    const checkInitialScroll = () => {
      if (window.scrollY > 0) {
        setShow("showHeader")
      }
    }

    checkInitialScroll() // Check initial scroll position on mount
  }, [])

  // let [isOpen, setIsOpen] = useState(false)
  // let [searchIsOpen, setSearchIsOpen] = useState(false)

  // function closeModal() {
  //   setIsOpen(false)
  // }

  // function openModal() {
  //   setIsOpen(true)
  // }

  // function closeSearchModal() {
  //   setSearchIsOpen(false)
  // }

  // function openSearchModal() {
  //   setSearchIsOpen(true)
  // }

  return (
    <header
      className={classNames(
        `fixed top-0 left-0 w-full h-[56px]  z-10 flex items-center hover:bg-white transition-all duration-[.3s] ease-in-out group ${show}`,
        "md:h-[88px]"
      )}
    >
      <div
        className={classNames(
          "flex px-[16px] flex-1 items-center justify-between group-hover:text-black",
          "md:px-[36px]",
          !show ? "text-white" : "text-black"
        )}
      >
        <div
          className={classNames(
            "flex items-center gap-[16px]",
            "md:gap-[30px]"
          )}
        >
          <button
            type="button"
            aria-label="Menu Button"
            // onClick={openModal}
            className="flex items-center gap-4"
          >
            <Bars3Icon className="h-6 w-6" />
            <span className={classNames("hidden", "md:inline-block")}>
              Menu
            </span>
          </button>

          {/* Menu Modal */}
          {/* <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
              <div className="fixed inset-0" />

              <div className="fixed inset-0 overflow-hidden z-[101]">
                <div className="absolute inset-0 overflow-hidden cursor-pointer bg-black/80">
                  <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="-translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="-translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white pb-6 shadow-xl">
                          <div className="px-4 sm:px-6 h-[88px] flex items-center">
                            <div className="flex items-start justify-between">
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className={classNames(
                                    "flex items-center gap-4"
                                  )}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="absolute" />
                                  <span className="sr-only">Close panel</span>
                                  <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            <nav>
                              <ul>
                                <li>
                                  <Link href="/">
                                    Louis Vuitton x Yayoi Kusama
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition> */}

          <button
            type="button"
            aria-label="Search Button"
            // onClick={openSearchModal}
            className="flex items-center gap-4"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className={classNames("hidden", "md:inline-block")}>
              Search
            </span>
          </button>

          {/* Search Modal */}
          {/* <Transition appear show={searchIsOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={setSearchIsOpen}
            >
              <div className="fixed inset-0" />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden cursor-pointer bg-black/80">
                  <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500"
                      enterFrom="-translate-y-full"
                      enterTo="translate-y-0"
                      leave="transform transition ease-in-out duration-500"
                      leaveFrom="translate-y-0"
                      leaveTo="-translate-y-full"
                    >
                      <Dialog.Panel
                        className="pointer-events-auto w-screen max-w-full"
                        onClick={() => setSearchIsOpen(false)}
                      >
                        <div className="flex flex-col overflow-y-scroll bg-white pb-6 shadow-xl ">
                          <div className="px-4 sm:px-6 h-[88px] flex items-center relative">
                            <div className="flex flex-1 justify-center items-center max-w-[600px] mx-auto">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="you@example.com"
                              />
                            </div>
                            <button
                              type="button"
                              className={classNames(
                                "flex items-center  p-4",
                                "absolute right-0 top-[50%] -translate-y-1/2"
                              )}
                              onClick={() => setSearchIsOpen(false)}
                            >
                              <span className="absolute" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                          <div className="relative mt-6 flex-1 px-4 sm:px-6">
                            Mega Menu
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition> */}
        </div>

        <div
          className={classNames(
            "absolute max-w-[154px] w-full mx-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2",
            "md:max-w-[227px]"
          )}
        >
          <Link href="" className="block" aria-label="Louis Vuitton Logo">
            <svg
              width="151"
              height="16"
              viewBox="0 0 151 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className={classNames(
                "h-[23px] w-full group-hover:fill-black transition-all duration-[.3s] ease-in-out",
                !show ? "fill-white" : "fill-black"
              )}
            >
              <path
                d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="flex items-center gap-[30px]">
          <div
            className={classNames("hidden items-center gap-[30px]", "md:flex")}
          >
            <button className="flex items-center">Wishlist</button>
            <button className="flex items-center">MyLV</button>
          </div>

          {/* Cart */}
          <button className="flex items-start">
            <ShoppingBagIcon className="h-5 w-5" />
            <span
              className={classNames(
                "h-3 w-3 rounded-full border  bg-transparent flex items-center justify-center text-[8px] leading-3  relative top-[-2px] group-hover:text-black group-hover:border-black",

                !show ? "border-white text-white" : "border-black text-black"
              )}
            >
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
