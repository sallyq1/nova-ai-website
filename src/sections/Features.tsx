"use client";

import { h1 } from "framer-motion/client";
import Image from "next/image";
import ProductImage from "@/assets/product-image.png";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import { useEffect, useRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(80px 80px at ${xValue}% ${yValue}%,black,transparent)`;

  // useEffect(() => {
  //   animate(xValue, [0, 100, 100, 0, 0], {
  //     duration: 4,
  //     repeat: Infinity,
  //     ease: "linear",
  //     repeatType: "loop",
  //   });
  // }, []);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) {
      return;
    } else {
      dotLottieRef.current.seek(0);

      dotLottieRef.current.play();
    }
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      className="flex items-center gap-3 thin-border w-full py-3 rounded-xl relative"
    >
      <motion.div
        className="absolute inset-0 -m-px rounded-xl border border-[#a369ff]"
        style={{ maskImage: mask }}
      ></motion.div>

      <div className="thin-border rounded-lg h-10 w-10 ml-3 flex items-center justify-center ">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="w-7 h-7"
        />
      </div>
      <h1 className="paragraph">{tab.title}</h1>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 w-full mt-40 py-20 bg-gradient-to-b from-[#030014] to-black">
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className="section-title z-10 gradient-text">
          Elevate your SEO efforts
        </h1>
        <p className=" text-center section-subtext z-10">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center w-5/6">
        {tabs.map((tab) => (
          <FeatureTab {...tab} key={tab.title} />
        ))}
      </div>

      <div className="p-5 w-5/6 thin-border flex justify-center items-center rounded-2xl h-[348px] md:h-[418px] lg:h-[605px] ">
        <div className="w-auto h-[300px] md:h-[370px] lg:h-[557px] thin-border rounded-xl overflow-y-scroll hide-scrollbar::-webkit-scrollbar hide-scrollbar">
          <Image
            src={ProductImage}
            alt="Product Image"
            className="h-auto w-auto "
          />
        </div>
      </div>
    </section>
  );
};
