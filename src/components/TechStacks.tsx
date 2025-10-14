"use client";

import { techStack } from "@/data";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Progress } from "./ui/Progress";

const TechStacks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#skills") {
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1);
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="px-10 py-20" id="skills" ref={sectionRef}>
      <h2 className="heading">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-7xl mx-auto">
        {techStack.map(({ name, value, icon }, index) => (
          <div
            key={`${name}-${animationKey}`}
            className="flex flex-col gap-4 p-6 rounded-xl bg-black-100 transition-all duration-300 w-full sm:w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1.5rem)]"
            style={{
              animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : "none",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <Image
                  src={icon}
                  alt={name}
                  width={48}
                  height={48}
                  style={{ height: "auto" }}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold">{name}</span>
            </div>
            <Progress
              key={`progress-${animationKey}`}
              value={value}
              className="w-full h-2"
              animate={isVisible}
              delay={index * 0.1}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TechStacks;
