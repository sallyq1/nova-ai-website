"use client";
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulseLogo from "@/assets/logo-pulse.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div>
      <div className=" w-full bg-none overflow-x-clip z-40 text-white mt-[500px] flex flex-col items-center  gap-20">
       
       <h1 className="section-title text-[30px] z-30">Trusted by top innovative teams</h1>
       
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%",

            
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            duration: 20,

          }}>
            <Image src={AcmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={EchoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="logo-ticker" />

            {/* duplicate logos for animation */}

            <Image src={AcmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={EchoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="logo-ticker" />


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
