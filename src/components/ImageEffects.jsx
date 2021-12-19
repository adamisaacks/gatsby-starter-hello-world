import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ParallaxLayer } from "@react-spring/parallax"

function ImageEffects() {
  return (
    <div>
      {/* Engineer Images */}
      <ParallaxLayer offset={1.75} speed={2}>
        <div className="absolute h-[8%] w-[8%] left-1/4">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/AboutMe/AppleLogo.svg"
          />
        </div>

        <div className="absolute h-[15%] w-[15%] -top-1/4 left-3/4">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/AboutMe/TAMULogo.png"
          />
        </div>

        <div className="absolute h-[10%] w-[10%] -top-1/4 left-[10%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/AboutMe/BPLogo.png"
          />
        </div>

        <div className="absolute h-[12%] w-[12%] top-1/4 left-[70%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/AboutMe/TraneLogo.svg"
          />
        </div>

        <div className="absolute h-[8%] w-[8%] top-1/3 left-[15%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/AboutMe/USTLogo.svg"
          />
        </div>
      </ParallaxLayer>

      {/* Software Logos */}
      <ParallaxLayer offset={3} speed={2}>
        <div className="absolute h-[8%] w-[8%] left-[26%] -top-[100%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/GatsbyLogo.png"
          />
        </div>

        <div className="absolute h-[10%] w-[10%] left-[79%] -top-[86%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/CSS3Logo.png"
          />
        </div>

        <div className="absolute h-[10%] w-[10%] left-[34%] -top-[71%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/HTML5Logo.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[10%] -top-[66%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/JSLogo.png"
          />
        </div>

        <div className="absolute h-[10%] w-[10%] left-[60%] -top-[51%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/NodeLogo.png"
          />
        </div>

        <div className="absolute h-[10%] w-[10%] left-[59%] -top-[90%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Software/ReactLogo.png"
          />
        </div>
      </ParallaxLayer>

      {/* Flags */}
      <ParallaxLayer offset={4.9} speed={2}>
        <div className="absolute h-[7%] w-[7%] left-[6%] top-[6%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/br.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[74%] -top-[6%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/ca.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[24%] -top-[10%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/cn.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[86%] top-[9%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/de.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[63%] -top-[34%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/gr.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[18%] top-[36%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/hu.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[8%] -top-[27%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/id.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[47%] ">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/is.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[30%] top-[22%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/jp.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[81%] top-[40%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/mx.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[30%] -top-[38%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/nl.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[74%] top-[75%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/pa.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[24%] top-[60%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/pt.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[57%] top-[57%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/th.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[47%] top-[40%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/us.png"
          />
        </div>

        <div className="absolute h-[7%] w-[7%] left-[14%] top-[80%]">
          <StaticImage
            placeholder="blurred"
            src="../assets/images/Travel/vn.png"
          />
        </div>
      </ParallaxLayer>
    </div>
  )
}

export default ImageEffects
