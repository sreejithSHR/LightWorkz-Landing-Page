"use client"

import type React  from "react"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedTitle } from "../animated-title"
import { Button } from "../button"


gsap.registerPlugin(ScrollTrigger)

export const FeaturesAbout = () => {
  const sectionRef = useRef(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])
  const glowRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    imagesRef.current.forEach((image) => {
      if (!image) return
      gsap.fromTo(
        image,
        { scale: 1.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        },
      )
    })
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const element = imagesRef.current[index]
    const glow = glowRef.current[index]
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate distance from cursor to center (for glow effect)
    const distanceX = x - centerX
    const distanceY = y - centerY

    // Calculate rotation based on mouse position
    const rotateX = ((y - centerY) / centerY) * -12
    const rotateY = ((x - centerX) / centerX) * 12

    // Apply 3D rotation to the image container
    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power1.out",
    })

    // Move the glow effect to follow the cursor
    if (glow) {
      gsap.to(glow, {
        duration: 0.2,
        x: distanceX * 0.1,
        y: distanceY * 0.1,
        opacity: 0.7,
        ease: "power1.out",
      })
    }
  }

  const handleMouseLeave = (index: number) => {
    const element = imagesRef.current[index]
    const glow = glowRef.current[index]
    if (!element) return

    gsap.to(element, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    })

    if (glow) {
      gsap.to(glow, {
        duration: 0.5,
        x: 0,
        y: 0,
        opacity: 0,
        ease: "power2.out",
      })
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-violet-50 text-white">
      <div className="flex flex-col items-center py-10 pb-24">
        <p className="font-light text-black uppercase tracking-wide text-sm md:text-xs">
          The Multiversal Digital Experience
        </p>

        {/* Animated Title */}
        <AnimatedTitle containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10">
          {"Who We <b>Are?</b>"}
        </AnimatedTitle>

        {/* Images Grid */}
        <div className="relative rounded-lg flex flex-col md:flex-row gap-8 mt-10">
          {[
            "https://cdn.glitch.global/7a0e0471-3353-48a2-9653-4678f75598a7/lightworkz%20Logo.png?v=1741528296019",
          ].map((src, index) => (
            <div key={index} className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] group">
              {/* Interactive container with preserved logo shape */}
              <div
                ref={(el) => {
                  imagesRef.current[index] = el
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="absolute inset-0 transform-gpu transition-all duration-300 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
              >
                {/* Original logo image */}
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Feature Image ${index + 1}`}
                  className="w-full h-full object-contain transform-gpu"
                  style={{ transform: "translateZ(20px)" }}
                />

                {/* Interactive glow effect that follows cursor */}
                <div
                  ref={(el) => {
                    glowRef.current[index] = el
                  }}
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="absolute w-[150%] h-[150%] top-[-25%] left-[-25%] bg-gradient-radial from-white/40 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                {Array.from({ length: 15 }, (_, i) => (

                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: 0.3 + Math.random() * 0.7,
                      }}
                    />
                  ))}
                </div>

                {/* Subtle reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
              </div>

              {/* Interactive highlight ring */}
              <div className="absolute inset-[-10px] border border-white/0 group-hover:border-white/20 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>

        {/* About Text Below Images */}
        <div className="text-center  max-w-3xl mx-auto">
          <p className="font-medium text-black mx-2  tracking-widest text-lg md:text-lg">
          Welcome to Lightworkz Media, where creativity meets strategy to build powerful digital identities. We are a passionate team of storytellers, marketers, and visual artists dedicated to helping small businesses, startups, and vendors establish a strong digital presence. 
          </p>

          <div className="flex justify-center items-center mt-10 mb-10">
            <Button id="realm-button" containerClass="bg-yellow-300 flex items-center justify-center gap-1">
              Explore More
            </Button>
          </div>

          
        </div>
      </div>

      {/* Add keyframes for floating particles */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(${Math.random() > 0.5 ? "50px" : "-50px"});
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}

