"use client"

import type React from "react"
import { useRef } from "react"
import gsap from "gsap"
import { AnimatedTitle } from "./animated-title"
import { RoundedCorners } from "./rounded-corners"
import { Button } from "./button"

export const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null)

  const handleMouseLeave = () => {
    const element = frameRef.current

    if (!element) return

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e
    const element = frameRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    })
  }

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">Transform Your Creative World with us</p>

        <div className="relative size-full">
          <AnimatedTitle containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10">
            {"The a<b>r</b>t of <br /> Game D<b>e</b>sign"}
          </AnimatedTitle>

          {/* Mobile view (hidden on md and above) */}
          <div className="mx-auto mt-8 block w-full max-w-md px-4 md:hidden">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
              <div className="h-full w-full">
                <img src="/img/DFWOS.png" alt="Entrance" className="h-full w-full object-cover" />
              </div>
              <RoundedCorners />
            </div>
          </div>

          {/* Desktop view (hidden on smaller screens) */}
          <div className="hidden md:block">
            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    src="/img/DFWOS.png"
                    alt="Entrance"
                    className="object-contain"
                  />
                </div>
              </div>
              <RoundedCorners />
            </div>
          </div>
        </div>

        

        {/* Desktop view text section (hidden on smaller screens) */}
        <div className="hidden-mt-40 flex w-full justify-center md:-mt-32 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              We transform your ideas into an Creative World of environment with tons of stories and Discoveries that
              they hold.
            </p>
            <Button id="realm-button" containerClass="mt-5">
              Discover Prologue
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

