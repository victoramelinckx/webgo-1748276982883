"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "react-scroll";
import { Boton } from "./boton";
import { FC } from "react";

interface StatProps {
  number: string;
  description: string;
  index: number;
}

const Stat: FC<StatProps> = ({ number, description, index }) => (
  <motion.div
    className="flex flex-col"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2 * index, // Creates cascade effect
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <p className="text-[78px] font-medium leading-none mb-2">{number}</p>
    <p className="tracking-[.03em] max-sm:font-medium font-[450] text-white/90 text-[16px]">
      {description}
    </p>
  </motion.div>
);

interface MobileStatProps {
  number: string;
  description: string;
  index: number;
  className?: string;
}

const MobileStat: FC<MobileStatProps> = ({
  number,
  description,
  index,
  className = "",
}) => (
  <motion.div
    className={`flex flex-col items-center justify-center ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2 * index,
    }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <p className="text-4xl font-medium leading-none">{number}</p>
    <p className="text-sm self-center text-center whitespace-pre-line">
      {description}
    </p>
  </motion.div>
);

export const Hero1: FC = () => {
  const stats = [
    {
      number: "10.000+",
      description: "Horas en Proyectos de Ingenería",
    },
    {
      number: "52.000",
      description: "M2 en Obras Civiles",
    },
    {
      number: "25.000",
      description: "M2 en Proyectos Inmobiliarios",
    },
  ];

  return (
    <section className="flex flex-col relative w-full justify-center items-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/55 z-[1]" />
        <div
          className="absolute inset-0 z-[2] lg:hidden"
          style={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 35%)",
          }}
        />
        <Image
          src="/fondo1.jpg"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 flex lg:hidden"
        />
        <Image
          src="/fondo-premad.png"
          alt="Construction background"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="z-0 hidden lg:flex"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex max-lg:flex-col max-lg:pt-36 lg:py-[130px] w-full lg:w-11/12 max-w-6xl gap-14 lg:gap-6 lg:justify-between">
        <div className="flex flex-col justify-center text-white md:max-lg:items-center gap-3 sm:gap-6 lg:gap-4 max-w-4xl md:max-lg:text-center max-lg:px-6 lg:mr-10">
          <motion.h1
            className="leading-[40px] tracking-[.01em] font-dmsans max-md:text-center font-extrabold text-[40px] md:text-5xl md:leading-[48px] lg:text-6xl lg:leading-[64px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Innovación y experiencia en obras civiles y construcción.
          </motion.h1>

          <motion.p
            className="max-md:mt-4 md:leading-normal max-lg:text-center max-lg:self-center tracking-[.03em] max-sm:font-medium font-[450] max-w-lg mt-2 text-white/90 sm:max-lg:w-4/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Más de 20 años transformando la construcción con soluciones
            innovadoras de alta eficiencia para proyectos a gran escala
            industriales y edificación.
          </motion.p>

          <motion.div
            className="flex flex-col lg:flex-row max-md:items-center md:space-x-6 mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-row gap-4">
              <Link to="servicios" smooth spy offset={-72}>
                <Boton 
                  variant="default" 
                  className="mt-3 px-6 py-3 font-semibold w-fit text-black"
                >
                  Nuestras áreas
                </Boton>
              </Link>
              <Link to="contacto" smooth spy offset={-72}>
                <Boton 
                  variant="normal"
                  className="mt-3 bg-white/30 border-white text-white px-6 py-3 font-semibold w-fit hover:opacity-70 active:opacity-70 blur-xs border-solid border-2"
                >
                  Contáctenos
                </Boton>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col text-white items-start justify-center space-y-4 pb-14 lg:py-20">
          {/* Mobile Stats */}
          <div className="w-full flex flex-col lg:hidden">
            <div className="flex flex-row justify-around w-full mb-6">
              <MobileStat
                number={stats[0].number}
                description={stats[0].description}
                index={0}
              />
              <MobileStat
                number={stats[1].number}
                description={stats[1].description}
                index={1}
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <MobileStat
                number={stats[2].number}
                description={stats[2].description}
                index={2}
              />
            </div>
          </div>

          {/* Desktop Stats */}
          <div className="hidden lg:flex lg:flex-col space-y-12">
            {stats.map((stat, index) => (
              <Stat
                key={stat.number}
                number={stat.number}
                description={stat.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
