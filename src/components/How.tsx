// components/How.tsx
"use client";

import Image from "next/image";
import { Element } from "react-scroll";

interface FuncionamientoProps {
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
}

export const How = ({
  step1Title,
  step1Desc,
  step2Title,
  step2Desc,
  step3Title,
  step3Desc,
}: FuncionamientoProps) => {
  return (
    <Element
      name="funcionamiento"
      className="w-full flex justify-center bg-[#EDF3FC]"
    >
      <section className="flex flex-col lg:flex-row w-full justify-center items-center py-20 px-7 max-lg:gap-[30px] gap-[60px] max-w-6xl">
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <div className="relative bg-[#FAD26E] h-[60px] w-[125px] rounded-3xl">
            <img
              src="vacio.jpg"
              className="w-[80px] absolute -top-8 left-1/2 -translate-x-1/2 transform hover:-translate-y-2 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[22px] font-bold text-center">{step1Title}</p>
            <p className="text-sm text-[#555555] font-medium text-center">
              {step1Desc}
            </p>
          </div>
        </div>
        <div className="flex pt-[10px] flex-col w-[120px] justify-center">
          <img
            src="icons/flecha.svg"
            className="max-lg:h-[60px] w-full h-full max-lg:rotate-90 max-lg:-mt-4 max-lg:mb-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <div className="relative bg-[#FAD26E] h-[60px] w-[125px] rounded-3xl">
            <img
              src="vacio.jpg"
              className="w-[80px] absolute -top-8 left-1/2 -translate-x-1/2 transform hover:-translate-y-2 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[22px] font-bold text-center">{step2Title}</p>
            <p className="text-sm text-[#555555] font-medium text-center">
              {step2Desc}
            </p>
          </div>
        </div>
        <div className="flex pt-[10px] flex-col w-[120px]">
          <img
            src="icons/flecha.svg"
            className="max-lg:h-[60px] w-full h-full max-lg:rotate-90 max-lg:-mt-4 max-lg:mb-2"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[30px]">
          <div className="relative bg-[#FAD26E] h-[60px] w-[125px] rounded-3xl">
            <img
              src="vacio.jpg"
              className="w-[80px] absolute -top-8 left-1/2 -translate-x-1/2 transform hover:-translate-y-2 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[22px] font-bold text-center">{step3Title}</p>
            <p className="text-sm text-[#555555] font-medium text-center">
              {step3Desc}
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};
