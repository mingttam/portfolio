import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <>
      <div>
        <div className="">
          <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
          <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="green" />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="green" />
        </div>
      </div>

      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100  ">
        <div
          className={cn(
            "absolute inset-0 ",
            "[background-size:60px_60px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2
              className="uppercase tracking-widest text-5xl text-center text-blue-100 max-w-80"
              style={{
                animationName: "wave-animation",
                animationDuration: "2.5s",
                animationIterationCount: "infinite",
                transformOrigin: "70% 70%",
                display: "inline-block",
              }}
            >
              👋🏼
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Welcome to my Portfolio"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I&apos;m Minh Tâm, a passionate developer crafting web experiences with React and
              Next.js and aiming to be a full-stack developer in the future.
            </p>

            <a href="#about">
              <MagicButton title="More about me" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
