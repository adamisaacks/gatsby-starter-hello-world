import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Wave from "../components/Wave"

export default function Home() {
  return (
    <div>
      <Parallax pages={5} className="text-center">
        {/* Hello banner */}
        <ParallaxLayer
          offset={0}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="text-4xl lg:text-8xl text-blue-800">
            Hi, I'm Adam Isaacks
          </h1>
          <p className="text-md text-blue-600">
            Scroll down to get to know me.
          </p>
          <Wave />
        </ParallaxLayer>

        {/* Page 1 Sticky */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="flex justify-center items-center bg-slate-600 -z-10"
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 5 }}
          className="flex justify-center items-center bg-rose-600 -z-10"
        ></ParallaxLayer>

        {/* Page 1 Moving Section */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          className="flex justify-end items-center "
        >
          <div className="card flex items-center justify-center w-screen h-screen text-4xl lg:text-8xl">
            <p className="text-blue-200">Im an engineer</p>
          </div>
        </ParallaxLayer>

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

        <ParallaxLayer
          offset={3}
          speed={0.5}
          className="flex justify-center items-center text-4xl lg:text-8xl "
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">A web developer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.5}
          className="flex justify-center items-center lg:text-4xl"
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
