"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBackground";
import { GridGlobe } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import AnimationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { CheckIcon, CopyIcon, ExternalLink } from "lucide-react";
import { resumeLink } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string;
  description?: string | string[] | { text: string; link: string }[];
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [viewResume, setViewResume] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mingtam.713@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleViewResume = () => {
    window.open(resumeLink, "_blank");
    setViewResume(true);
    setTimeout(() => setViewResume(false), 2000);
  };

  return (
    <>
      <div
        className={cn(
          "group/bento overflow-hidden relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl  transition duration-200 hover:shadow-xl  dark:shadow-none border border-white/[0.1]",
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div
          className={`${id === 6 && "flex justify-center"} ${
            id === 4 && "flex  justify-center"
          } h-full`}
        >
          <div className="w-full h-full absolute">
            {img && (
              <Image
                src={img}
                alt={img}
                width="800"
                height="800"
                className={cn(imgClassName, "object-cover object-center")}
              />
            )}
          </div>
          <div className={`absolute right-0 -bottom-5  ${id === 5 && "w-full opacity-80"}`}>
            {spareImg && (
              <Image
                src={spareImg}
                alt={spareImg}
                width="800"
                height="800"
                className={"object-cover object-center w-full h-full"}
              />
            )}
          </div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
            </BackgroundGradientAnimation>
          )}

          <div
            className={cn(
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
              titleClassName
            )}
          >
            {id === 3 ? (
              <>
                <div className="font-sans font-normal text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
                  {typeof description === "string" ? description : ""}
                </div>
                <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 dark:text-neutral-200">
                  {title}
                </div>
              </>
            ) : id === 5 ? (
              <>
                <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 dark:text-neutral-200">
                  {title}
                </div>
                <div className="font-sans font-normal text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300 flex flex-col gap-3">
                  {Array.isArray(description) &&
                    (description as { text: string; link: string }[]).map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-2 bg-[#10132E] p-3 rounded-lg"
                      >
                        <span className="flex-1">{cert.text}</span>
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 hover:bg-purple/20 rounded-md transition-colors"
                        >
                          <ExternalLink size={16} className="text-purple" />
                        </a>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              <>
                <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 dark:text-neutral-200">
                  {title}
                </div>
                <div className="font-sans font-normal text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
                  {typeof description === "string" ? description : ""}
                </div>
              </>
            )}

            {id === 2 && <GridGlobe />}

            {id === 3 && (
              <div className="flex gap-1  w-fit absolute -right-3 lg:-right-2 ">
                <div className="flex flex-col mt-10">
                  {["React.js", "Next.js", "Typescript"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col mr-3">
                  {["HTML/CSS", "Java", "MySQL"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 4 && (
              <div className=" mt-3 relative flex justify-center">
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    options={{
                      loop: viewResume,
                      autoplay: viewResume,
                      animationData: AnimationData,
                      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                    }}
                  />
                </div>
                <MagicButton
                  title={"View my Resume"}
                  icon={<ExternalLink />}
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleViewResume}
                />
              </div>
            )}

            {id === 6 && (
              <div className=" mt-3 relative">
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData: AnimationData,
                      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                    }}
                  />
                </div>
                <MagicButton
                  title={copied ? "Copied!" : "Copy"}
                  icon={copied ? <CheckIcon /> : <CopyIcon />}
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
