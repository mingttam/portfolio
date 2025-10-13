import React from "react";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <>
      <footer className="w-full  relative" id="contact">
        <div className="flex justify-center items-center">
          <Image
            src="/footer-grid.svg"
            alt="Footer Image"
            width={800}
            height={500}
            style={{ objectFit: "cover" }}
            className="opacity-50 "
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 space-y-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="heading lg:max-w-[80vw]">Ready to build something great together? </h1>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mingtam.713@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton title="Contact Me" />
          </a>
        </div>
      </footer>
      <div className="flex mt-16 md:flex-grow flex-col justify-between items-center pb-10">
        <p className="text-white-200 md:mt-base text-sm md:font-normal font-light my-5 text-center">
          © 2025 Minh Tam. All rights reserved.
        </p>
        <div className=" flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-200 hover:text-white-100 transition-colors cursor-pointer"
            >
              <Image src={img} alt="socialIcon" width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
