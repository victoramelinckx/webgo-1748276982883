// components/Hero.tsx
"use client";

import Image from "next/image";
import { Link } from "react-scroll";
import { Boton } from "./boton";
import imagen from "../../public/vacio.jpg";
import { BusinessInfo } from "./BusinessInfo";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1: string;
}

export const Hero = ({ headline, subheadline, cta1 }: HeroProps) => {
  return (
    <section
      className="flex flex-col max-lg:pt-4 bg-[#1d65d1] relative 
        bg-[linear-gradient(to_right,rgba(100,150,230,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,150,230,0.15)_1px,transparent_1px)] 
        bg-[size:6rem_4rem] w-full justify-center items-center"
    >
      {/* Radial gradient for the faded look */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#1d65d1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#1d65d1)]"></div>

      <div className="flex flex-col pt-24  max-lg:gap-4 lg:flex-row items-center  max-w-6xl z-20">
        <div className="flex flex-col">
          <div className="mt-2 ">
            <h1 className="text-white font-bold text-[36px] max-md:text-center md:text-6xl max-lg:mt-4">
              {headline}
            </h1>
          </div>
          <div className="mt-6">
            <p className="max-w-lg justify-start max-md:text-center text-[#CCCCCC]">
              {subheadline}
            </p>
          </div>
          <div className="mt-8 flex flex-row space-x-6 max-md:justify-center">
            <Link to="contacto" smooth>
              <Boton variant="default" className="max-lg:mb-4">
                {cta1}
              </Boton>
            </Link>
            {/* <Dialog>
              <DialogTrigger>
                <div className="flex flex-row space-x-2 items-center transition-all ease-in-out duration-300 hover:-translate-y-1">
                  <FaCirclePlay className=" text-primary-500 w-6 h-6" />
                  <p className=" font-semibold">See more</p>
                </div>
              </DialogTrigger>
              <DialogContent className="flex justify-center aspect-video md:aspect-auto rounded-xl overflow-hidden">
                <video
                  className="h-full object-contain rounded-xl"
                  autoPlay
                  controls
                  src="/videos/vsl_compressed.mp4"
                />
              </DialogContent>
            </Dialog> */}
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:h-full lg:w-[60%]">
          <div className="w-full md:w-[37.5rem] aspect-[1.1091449814126393/1] flex flex-row gap-4 md:pt-8">
            <div className="w-[35%] h-full as flex flex-col jus gap-4">
              <div className="h-1/2 w-full flex justify-end items-end">
                <div className="w-[65%] md:w-[55%] h-[75%] md:h-[65%] bg-[#84b0f281] rounded-[10px] flex flex-col justify-center items-center">
                  {/* //icono */}
                  <div className="w-2/5 h-[27%] xs:w-1/2 xs:h-1/3 bg-white/20 flex justify-center items-center rounded-full">
                    <div className="w-[75%] h-[75%] bg-white flex justify-center items-center rounded-full">
                      <img
                        src="/vacio.jpg"
                        alt="calendar"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <p className="text-white text-xs md:text-base leading-normal mt-2 text-center font-medium">
                    Quick <br /> Availability
                  </p>
                </div>
              </div>
              <div className="w-full h-1/2 rounded-[16px] rounded-bl-[70px] overflow-hidden">
                <Image
                  src={imagen}
                  alt=""
                  className="w-full h-full object-cover rounded"
                  priority
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="w-[65%] h-full flex flex-col gap-4">
              <div className="w-full h-[60%] rounded-[16px] rounded-tr-[70px] overflow-hidden">
                <Image
                  src={imagen}
                  alt=""
                  className="w-full h-full object-cover rounded"
                  priority
                  placeholder="blur"
                />
              </div>
              <div className="w-full h-[40%] flex flex-row gap-4">
                <div className="w-[60%] md:w-[70%] h-[60%] rounded-[10px] overflow-hidden">
                  <Image
                    src={imagen}
                    alt=""
                    className="w-full h-full object-cover rounded"
                    priority
                    placeholder="blur"
                  />
                </div>
                <div className="w-[40%] md:w-[30%] h-[100%] md:h-[80%] rounded-[10px] bg-[#84b0f281] flex flex-col justify-center items-center">
                  <div className="w-1/2 h-1/3 bg-white flex justify-center items-center rounded-full">
                    <div className="w-[75%] h-[75%] bg-white flex justify-center items-center rounded-full">
                      <img
                        src="/vacio.jpg"
                        alt="calendar"
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <p className="text-white leading-normal text-xs md:text-base font-semibold mt-1 text-center">
                    <span className=" font-bold text-lg md:text-3xl">250+</span>{" "}
                    <br />
                    Jobs <br /> Done
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessInfo />
    </section>
  );
};
