import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatedTitle } from "../animated-title";
import { Button } from "../button";
import { RoundedCorners } from "../rounded-corners";

gsap.registerPlugin(ScrollTrigger);

export const FeaturesAbout = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    imagesRef.current.forEach((image) => {
      if (!image) return;
      gsap.fromTo(
        image,
        { scale: 3, opacity: 0, clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }, // Custom Shape
        {
          scale: 1,
          opacity: 1,
          clipPath: "polygon(15% 10%, 85% 10%, 90% 90%, 10% 90%)", // Smaller Variation
          ease: "power4.out",
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const element = imagesRef.current[index];
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = (index: number) => {
    const element = imagesRef.current[index];
    if (!element) return;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

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
            "https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80",
            
          ].map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                imagesRef.current[index] = el;
              }}
              
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative  w-[300px] h-[400px] md:w-[400px] md:h-[500px]  overflow-hidden shadow-lg"
              style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}
            >
              <img src={src} alt={`Feature Image ${index + 1}`} className="w-full h-full rounded-3xl object-cover" />
              <RoundedCorners />
            </div>
          ))}
        </div>

        {/* About Text Below Images */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <p className="font-light text-black uppercase tracking-wide text-sm md:text-xs">
            We collaborate with enterprises to craft unique digital experiences, offering
            cutting-edge solutions to industry-wide challenges.
          </p>
          
          <div className="flex-center mt-10 mb-10">
            <Button id="realm-button" containerClass="bg-yellow-300 flex-center gap-1">
              Explore More
            </Button>
          </div>

          <p className="font-light text-black uppercase tracking-wide text-sm md:text-xs">
            We specialize in crafting immersive digital solutions...
          </p>
        </div> 
      </div>
    </section>
  );
};
