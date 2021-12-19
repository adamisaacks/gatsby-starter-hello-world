import React, { useRef } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ImageEffects from "../components/ImageEffects"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  const goTo = useRef(null)
  return (
    <div className="text-gray-800">
      {/* Set up parallax for the entire page */}
      <Parallax ref={goTo} pages={6.8} className="text-center">
        {/* Welcome Sticky */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }}
          className="flex justify-center items-center bg-[#758173] -z-10"
        ></ParallaxLayer>

        {/* Engineering Sticky */}

        <ParallaxLayer
          sticky={{ start: 1, end: 2.5 }}
          className="flex justify-center items-center bg-[#c5efcb] -z-10"
        ></ParallaxLayer>

        {/* Software Sticky */}
        <ParallaxLayer
          sticky={{ start: 2.5, end: 4 }}
          className="flex justify-center items-center bg-[#758173] -z-10"
        ></ParallaxLayer>

        {/* Travel Sticky */}
        <ParallaxLayer
          sticky={{ start: 4, end: 5.7 }}
          className="flex justify-center items-center bg-[#a9c5a0] -z-10"
        ></ParallaxLayer>

        {/* Contact */}
        <ParallaxLayer
          sticky={{ start: 5.7, end: 6.5 }}
          className="flex justify-center items-center bg-[#c6dec6] -z-10"
        ></ParallaxLayer>

        {/* Hello Moving Section */}
        <ParallaxLayer
          offset={0}
          speed={0.6}
          className="flex justify-center text-white z-10"
        >
          <div className="flex flex-col justify-center text-center items-center">
            <div className="flex absolute top-4 justify-between lg:w-1/2 w-3/4">
              <a
                href="#Engineer"
                onClick={() => goTo.current.scrollTo(1)}
                className="hover:font-extrabold"
              >
                Engineer
              </a>
              <a
                href="#Software"
                onClick={() => goTo.current.scrollTo(2.5)}
                className="hover:font-extrabold"
              >
                Software
              </a>
              <a
                href="#Travel"
                onClick={() => goTo.current.scrollTo(4)}
                className="hover:font-extrabold"
              >
                Travel
              </a>
              <a
                href="#Contact"
                onClick={() => goTo.current.scrollTo(6)}
                className="hover:font-extrabold"
              >
                Contact
              </a>
            </div>
            <StaticImage
              placeholder="blurred"
              src="../assets/images/AboutMe/Me.jpg"
              className="rounded-full w-1/3 lg:w-[20%]"
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
          className="flex justify-center items-center text-4xl lg:text-8xl z-10 text-white"
        >
          <div className=" flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="">Software</p>
          </div>
        </ParallaxLayer>

        {/* Software 2 Moving Section */}
        <ParallaxLayer
          offset={3}
          speed={0.6}
          className="flex justify-center items-center lg:text-4xl text-white"
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
            <p className="lg:text-4xl">
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
