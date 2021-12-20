import React, { useRef } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import ImageEffects from "../components/ImageEffects"
import Meta from "../components/Meta"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const navigation = [
  { name: "Home", href: "#", current: true, place: 0 },
  { name: "Engineering", href: "#", current: false, place: 1 },
  { name: "Software", href: "#", current: false, place: 2.5 },
  { name: "Travel", href: "#", current: false, place: 4 },
  { name: "Contact", href: "#", current: false, place: 6 },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Home() {
  const goTo = useRef(null)
  return (
    <div className="text-gray-200">
      {/* All this is the Navbar, trust I me I would have put this in a component if I could */}
      <div className="fixed z-20 w-screen">
        <Disclosure
          as="nav"
          className="bg-transparent z-20 lg:backdrop-blur-md lg:shadow-lg"
        >
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* These are the desktop options */}
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                    <div className="hidden sm:block sm:ml-6 ">
                      <div className="flex space-x-4">
                        {navigation.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? " font-bold text-white"
                                : "text-gray-300 hover:font-bold hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                            onClick={() => goTo.current.scrollTo(item.place)}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* These are the mobile buttons */}
              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map(item => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "font-bold text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onMouseDown={() => goTo.current.scrollTo(item.place)}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <Meta />

      {/* Set up parallax for the entire page */}
      <Parallax pages={6.8} className="text-center" ref={goTo}>
        {/* Welcome Sticky */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          className="flex justify-center items-center bg-[#5c946e] -z-10"
        ></ParallaxLayer>

        {/* Engineering Sticky */}

        <ParallaxLayer
          sticky={{ start: 1, end: 2.5 }}
          className="flex justify-center items-center bg-[#114b5f] -z-10"
        ></ParallaxLayer>

        {/* Software Sticky */}
        <ParallaxLayer
          sticky={{ start: 2.5, end: 4 }}
          className="flex justify-center items-center bg-[#c57b57] -z-10"
        ></ParallaxLayer>

        {/* Travel Sticky */}
        <ParallaxLayer
          sticky={{ start: 4, end: 5.7 }}
          className="flex justify-center items-center bg-[#a72608] -z-10"
        ></ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer
          sticky={{ start: 5.7, end: 6.5 }}
          className="flex justify-center items-center bg-[#30011e] -z-10"
        ></ParallaxLayer>

        {/* Hello Moving Section */}
        <ParallaxLayer
          offset={0}
          speed={0.6}
          className="flex justify-center z-10"
        >
          <div className="flex flex-col justify-center text-center items-center">
            <StaticImage
              placeholder="blurred"
              src="../assets/images/AboutMe/Me.png"
              className="rounded-full w-1/3 lg:w-[20%] shadow-xl"
            />
            <h1 className="text-4xl lg:text-8xl">Hi, I'm Adam Isaacks</h1>
            <p className="text-lg">Scroll down to get to know me.</p>
          </div>
        </ParallaxLayer>

        {/* Engineer 1 Moving Section */}
        <ParallaxLayer
          offset={1}
          speed={0.6}
          className="flex justify-center items-center text-4xl lg:text-8xl z-10"
        >
          <div className=" flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="">Engineer</p>
          </div>
        </ParallaxLayer>

        {/* Engineer 2 Moving Section */}
        <ParallaxLayer
          offset={1.8}
          speed={0.6}
          className="flex justify-center items-center lg:text-4xl"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officia magni, adipisci, tenetur eligendi culpa hic explicabo
              nostrum iure possimus, perspiciatis magnam harum facere quisquam
              quae impedit est voluptatibus labore? Consequatur possimus
              veritatis quidem temporibus ratione iste eos? Quia eius, iusto aut
              quisquam facere aliquam recusandae ex. Cupiditate, temporibus hic.
            </p>
          </div>
        </ParallaxLayer>

        {/* Software 1 Moving Section */}
        <ParallaxLayer
          offset={2.8}
          speed={0.6}
          className="flex justify-center items-center text-4xl lg:text-8xl z-10"
        >
          <div className=" flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="">Software</p>
          </div>
        </ParallaxLayer>

        {/* Software 2 Moving Section */}
        <ParallaxLayer
          offset={3}
          speed={0.6}
          className="flex justify-center items-center lg:text-4xl "
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officia magni, adipisci, tenetur eligendi culpa hic explicabo
              nostrum iure possimus, perspiciatis magnam harum facere quisquam
              quae impedit est voluptatibus labore? Consequatur possimus
              veritatis quidem temporibus ratione iste eos? Quia eius, iusto aut
              quisquam facere aliquam recusandae ex. Cupiditate, temporibus hic.
            </p>
          </div>
        </ParallaxLayer>

        {/* Travel 1 Moving Section */}
        <ParallaxLayer
          offset={4}
          speed={0.6}
          className="flex justify-center items-center text-4xl lg:text-8xl z-10"
        >
          <div className=" flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="">Travel</p>
          </div>
        </ParallaxLayer>

        {/* Travel 2 Moving Section */}
        <ParallaxLayer
          offset={4.99}
          speed={0.6}
          className="flex justify-center items-center lg:text-4xl"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officia magni, adipisci, tenetur eligendi culpa hic explicabo
              nostrum iure possimus, perspiciatis magnam harum facere quisquam
              quae impedit est voluptatibus labore? Consequatur possimus
              veritatis quidem temporibus ratione iste eos? Quia eius, iusto aut
              quisquam facere aliquam recusandae ex. Cupiditate, temporibus hic.
            </p>
          </div>
        </ParallaxLayer>

        {/* Contact Moving Section */}
        <ParallaxLayer
          offset={6}
          speed={0.6}
          className="flex justify-center items-center z-10"
        >
          <div className="card flex-col align-middle items-center justify-center w-3/5 h-screen">
            <p className="text-4xl lg:text-8xl">Contact</p>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officia magni, adipisci, tenetur eligendi culpa hic explicabo
              nostrum iure possimus, perspiciatis magnam harum facere quisquam
              quae impedit est voluptatibus labore? Consequatur possimus
              veritatis quidem temporibus ratione iste eos? Quia eius, iusto aut
              quisquam facere aliquam recusandae ex. Cupiditate, temporibus hic.
            </p>
          </div>
        </ParallaxLayer>
        <ImageEffects />
      </Parallax>
    </div>
  )
}
