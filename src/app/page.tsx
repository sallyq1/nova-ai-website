import { CallToAction } from "@/sections/CallToAction";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import Header from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="bg-[#030014]">
     
      <div className="w-full flex justify-center sticky top-10 z-50">
        <Header />
      </div>
      
      <Hero />
      <LogoTicker/>
   
    <Features/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>

    </div>
  );
}
