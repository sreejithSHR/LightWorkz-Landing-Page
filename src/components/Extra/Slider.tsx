"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { AnimatedTitle } from "../animated-title"


interface Card {
  id: number
  image: string
  title: string
  description: string
  rating: number
}

export default function CardSlider() {
  const [activeIndex, setActiveIndex] = useState(1)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const cards: Card[] = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/6592647/pexels-photo-6592647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Audience engagememt",
      description: "Connect, interact, and build lasting relationships for long term Services ",
      rating: 5,
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Brand Visiblity",
      description: "Stand out with a strong and memorable presence among your competitors",
      rating: 5,
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/7598024/pexels-photo-7598024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Growth Strategies",
      description: "Smart, data-driven tactics for sustainable success and to reach your brand in heights",
      rating: 5,
    },
  ]

  useEffect(() => {
    updateCardsPosition()
  }, [activeIndex])

  const updateCardsPosition = () => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const position = index - activeIndex

      gsap.to(card, {
        x: position * 280,
        scale: position === 0 ? 1 : 0.8,
        opacity: position === 0 ? 1 : 0.5,
        zIndex: position === 0 ? 2 : 1,
        duration: 0.6,
        ease: "power2.out",
      })
    })
  }

  const handleNext = () => {
    if (activeIndex < cards.length - 1) {
      setActiveIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white flex flex-col items-center justify-center p-8">
      <div className="relative mb-8 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">Things a Brand Defines</p>
        <AnimatedTitle containerClass="!text-black" >
        {
            "Wh<b>a</b>T  we Pr<b>o</b>mise <br /> "
          }
          </AnimatedTitle>
        <div className="text-center max-w-xl">
          <p className="font-circular-web text-lg">We’re not just another digital marketing agency that delivers leads.</p>
          <p className="font-circular-web mt-3 text-lg ">We’re a creative agency that helps grow your business into a brand with unique strategies beyond digital marketing.</p>
        </div>
      </div>
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="absolute left-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="relative w-[340px] h-full">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] bg-white rounded-3xl shadow-xl overflow-hidden transition-shadow hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt="Thailand landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rating */}
              <div className="px-6 pt-4 flex justify-center">
                
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold  text-gray-800 mb-2">{card.title}</h3>
                <p className="font-circular-web text-lg font-light mb-4">{card.description}</p>
                
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={activeIndex === cards.length - 1}
          className="absolute right-4 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

