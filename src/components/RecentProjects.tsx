import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const RecentProjects = () => {
  return (
    <div className="pt-20" id="projects">
      <h1 className="heading">
        A small selection of {""}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-6 lg:gap-x-8 xl:gap-x-12 2xl:gap-x-20 mt-10 p-4 w-full">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[400px] lg:w-[440px] xl:w-[500px] 2xl:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[400px] lg:w-[440px] xl:w-[500px] 2xl:w-[570px] w-[80vw] overflow-hidden mb-10">
                {/* <div className="relative w-full aspect-[570/400] overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" fill className="object-cover" />
                </div> */}
                <Image
                  src={img}
                  alt={title}
                  width={570}
                  height={400}
                  className=" w-full h-auto object-contain"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center space-x-1">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                    >
                      <Image src={icon} alt={`icon-${index}`} width={24} height={24} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center ">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">Github</p>
                  <ExternalLink className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
