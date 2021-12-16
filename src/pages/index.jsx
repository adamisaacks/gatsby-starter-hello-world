import React from "react"
import { Controller, Scene } from "react-scrollmagic"

export default function Home() {
  return (
    <div>
      <section className="bg-blue-200 h-screen flex justify-center items-center">
        <h1 className="text-8xl text-blue-800">Hi, I'm Adam Isaacks</h1>
      </section>
      <section className="about h-[300vh] flex flex-col lg:flex-row">
        <Controller>
          <Scene
            duration={"1000"}
            triggerHook={"0"}
            triggerElement=".about-title"
            // indicators={true}
            pin
          >
            <div className="about-title lg:w-1/2 w-screen h-screen flex justify-center items-center text-4xl text-blue-200 bg-slate-800 mt-[0px!important]">
              <p>About Me</p>
            </div>
          </Scene>
        </Controller>
        <div className="about-pages lg:w-1/2 w-screen">
          <div className="h-screen flex flex-col justify-around items-center">
            <h2>Project 1</h2>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              delectus harum reiciendis earum eaque! Nesciunt eaque quia nemo!
              Itaque exercitationem enim voluptatibus, debitis nemo excepturi
              possimus adipisci asperiores laboriosam, cum neque mollitia quae
              deleniti sequi esse libero molestiae, rem ea illo! Quae eaque
              aperiam quis omnis placeat iste fuga molestias.
            </p>
          </div>
          <div className="h-screen flex flex-col justify-around items-center">
            <h2>Project 1</h2>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              delectus harum reiciendis earum eaque! Nesciunt eaque quia nemo!
              Itaque exercitationem enim voluptatibus, debitis nemo excepturi
              possimus adipisci asperiores laboriosam, cum neque mollitia quae
              deleniti sequi esse libero molestiae, rem ea illo! Quae eaque
              aperiam quis omnis placeat iste fuga molestias.
            </p>
          </div>
          <div className="h-screen flex flex-col justify-around items-center">
            <h2>Project 1</h2>
            <p className="w-4/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              delectus harum reiciendis earum eaque! Nesciunt eaque quia nemo!
              Itaque exercitationem enim voluptatibus, debitis nemo excepturi
              possimus adipisci asperiores laboriosam, cum neque mollitia quae
              deleniti sequi esse libero molestiae, rem ea illo! Quae eaque
              aperiam quis omnis placeat iste fuga molestias.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
