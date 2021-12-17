import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export default function Home() {
  return (
    <div>
      {/* Set up parallax for the entire page */}
      <Parallax pages={7} className="text-center">
        {/* Hello Section */}
        <ParallaxLayer offset={0} className="flex justify-center">
          <div className="flex flex-col justify-center text-center items-center">
            <h1 className="text-4xl lg:text-8xl text-blue-800">
              Hi, I'm Adam Isaacks
            </h1>
            <p className="text-md text-blue-600">
              Scroll down to get to know me.
            </p>
          </div>
        </ParallaxLayer>

        {/* Engineering Sticky */}

        <ParallaxLayer
          sticky={{ start: 1, end: 3 }}
          className="flex justify-center items-center bg-slate-200 -z-10"
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
            <p className="text-slate-700">Im an engineer</p>
          </div>
        </ParallaxLayer>

        {/* Engineer 2 Moving Section */}
        <ParallaxLayer offset={1.75} speed={2}>
          <div className="absolute h-[8%] w-[8%] left-1/4">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/AboutMe/AppleLogo.svg"
            />
          </div>

          <div className="absolute h-[15%] w-[15%] -top-1/4 left-3/4">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/AboutMe/TAMULogo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] -top-1/4 left-[10%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/AboutMe/BPLogo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] top-1/4 left-[70%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/AboutMe/TraneLogo.svg"
            />
          </div>
        </ParallaxLayer>

        {/* Engineer 3 Moving Section */}
        <ParallaxLayer
          offset={1.8}
          speed={0.5}
          className="flex justify-center items-center lg:text-4xl"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-slate-700">
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

        {/* Software Logos */}
        <ParallaxLayer offset={3.75} speed={2}>
          <div className="absolute h-[8%] w-[8%] left-1/4">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/GatsbyLogo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] -top-1/4 left-3/4">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/CSS3Logo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] -top-1/2 left-1/2">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/HTML5Logo.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] top-1/4 left-[10%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/JSLogo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] -top-1/4 left-[10%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/NodeLogo.png"
            />
          </div>

          <div className="absolute h-[10%] w-[10%] top-1/4 left-[70%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Software/ReactLogo.png"
            />
          </div>
        </ParallaxLayer>

        {/* Software 2 Moving Section */}
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

        {/* Travel 1 Static Section */}
        <ParallaxLayer
          offset={5}
          speed={0.5}
          className="flex justify-center items-center text-4xl lg:text-8xl"
        >
          <div className="card flex items-center justify-center w-3/5 h-screen">
            <p className="text-gray-200">Avid traveler</p>
          </div>
        </ParallaxLayer>

        {/* Flags */}
        <ParallaxLayer offset={5.75} speed={2}>
          <div className="absolute h-[7%] w-[7%] left-[6%] top-[6%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Travel/br.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[74%] -top-[6%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Travel/ca.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[24%] -top-[10%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Travel/cn.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[86%] top-[9%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/Travel/de.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[63%] -top-[34%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/gr.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[18%] top-[36%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/hu.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[8%] -top-[27%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/id.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[47%] ">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/is.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[30%] top-[22%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/jp.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[81%] top-[40%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/mx.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[30%] -top-[38%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/nl.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[74%] top-[75%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/pa.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[24%] top-[60%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/pt.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[57%] top-[57%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/th.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[47%] top-[40%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/us.png"
            />
          </div>

          <div className="absolute h-[7%] w-[7%] left-[14%] top-[80%]">
            <StaticImage
              placeholder="tracedSVG"
              src="../assets/images/travel/vn.png"
            />
          </div>
        </ParallaxLayer>

        {/* Travel 2 Moving Section */}
        <ParallaxLayer
          offset={6}
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
