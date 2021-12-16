import React from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export default function Home() {
  return (
    <div>
      <Parallax pages={5}>
        {/* Hello banner */}
        <ParallaxLayer offset={0} className="flex justify-center items-center">
          <h1 className="text-8xl text-blue-800">Hi, I'm Adam Isaacks</h1>
        </ParallaxLayer>

        {/* Sticky Section */}

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          className="flex justify-start items-center"
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-slate-800">
            <p className="text-xl text-blue-400">About Me</p>
          </div>
        </ParallaxLayer>

        {/* Moving Section */}
        <ParallaxLayer
          offset={1}
          className="flex justify-end items-center text-4xl "
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-slate-600">
            <p className="text-xl text-blue-400">Moving</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          className="flex justify-end items-center text-4xl "
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-slate-400">
            <p className="text-xl text-blue-800">Grooving</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 4 }}
          className="flex justify-end items-center"
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-green-100">
            <p className="text-xl text-blue-400">Hell Yeah Brother</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          className="flex justify-start items-center text-4xl "
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-green-400">
            <p className="text-xl text-blue-800">Shmooving</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          className="flex justify-start items-center text-4xl "
        >
          <div className="card flex items-center justify-center w-1/2 h-screen bg-green-600">
            <p className="text-xl text-blue-800">Can't believe this worked</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
