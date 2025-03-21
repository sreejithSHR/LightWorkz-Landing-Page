"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

import { Button } from "./button"

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    })

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    })
  })

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-yellow">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <video
            src="/videos/hero-1.mp4"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-white">
        ViSu<b>a</b>l Br<b>a</b>nding
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading  text-white">
            Emb<b>a</b>rk Thr<b>o</b>ugh
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-white">
              Grow To the Unknown Heights of Your Business
            </p>

            <Button id="watch-trailer" leftIcon={TiLocationArrow} containerClass="bg-yellow-300 flex-center gap-1">
              Explore Now
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
      ViSu<b>a</b>l Br<b>a</b>nding
      </h1>
    </section>
  )
}

