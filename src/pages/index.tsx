import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Wave from "../components/Wave"

export default function Home() {
  return (
    <div>
      {/* Set up parallax for the entire page */}
      <Parallax pages={7} className="text-center">
        {/* Hello Section */}
        <ParallaxLayer
          offset={0}
          className="flex flex-col justify-center items-center"
        >
          <div>
            <h1 className="text-4xl lg:text-8xl text-blue-800">
              Hi, I'm Adam Isaacks
            </h1>
            <p className="text-md text-blue-600">
              Scroll down to get to know me.
            </p>
            <a href="#end">END</a>
          </div>
          <Wave />
        </ParallaxLayer>

        {/* Engineering Sticky */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="flex justify-center items-center bg-slate-600 -z-10"
        ></ParallaxLayer>

        {/* Software Sticky */}
        <ParallaxLayer
          sticky={{ start: 3, end: 5 }}
          className="flex justify-center items-center bg-rose-600 -z-10"
        ></ParallaxLayer>

        {/* Travel Sticky */}
        <ParallaxLayer
          sticky={{ start: 5, end: 7 }}
          className="flex justify-center items-center bg-black -z-10"
        ></ParallaxLayer>

        {/* Engineer 1 Moving Section */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          className="flex justify-end items-center "
        >
          <div className=" flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="text-blue-200">Im an engineer</p>
          </div>
        </ParallaxLayer>

        {/* Engineer 2 Moving Section */}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          className="flex justify-center items-center lg:text-4xl "
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-blue-200">
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
          offset={3}
          speed={0.5}
          className="flex justify-center items-center text-4xl lg:text-8xl "
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">Web developer</p>
          </div>
        </ParallaxLayer>

        {/* Software 2 Moving Section */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          className="flex justify-center items-center lg:text-4xl"
          id="end"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">
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
          offset={5}
          speed={0.5}
          className="flex justify-center items-center text-4xl lg:text-8xl "
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">Avid traveler</p>
          </div>
        </ParallaxLayer>

        {/* Travel 2 Moving Section */}
        <ParallaxLayer
          offset={6}
          speed={0.5}
          className="flex justify-center items-center lg:text-4xl"
          id="end"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officia magni, adipisci, tenetur eligendi culpa hic explicabo
              nostrum iure possimus, perspiciatis magnam harum facere quisquam
              quae impedit est voluptatibus labore? Consequatur possimus
              veritatis quidem temporibus ratione iste eos? Quia eius, iusto aut
              quisquam facere aliquam recusandae ex. Cupiditate, temporibus hic.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
