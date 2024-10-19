import BiggerGalaxyButton from "@/components/BiggerGalaxyButton";
import GalaxyButton from "@/components/GalaxyButton";
import StarsCanvas from "@/components/StarBackground";

export const Hero = () => {
  return <section className="bg-[#030014] text-white p-10 w-full overflow-x-clip relative">



<div className="flex flex-col items-center justify-center gap-6 mt-10 z-40">

<h1 className="font-semibold  text-[96px] md:text-[168px] leading-none z-40 gradient-text text-center">Meet Nova</h1>
    <p className=" text-center section-subtext z-40">Enhance your website's visibility with ease using Nova, the cutting-edge AI SEO tool designed to attract new users as efficiently as black holes draw in stars.</p>
    <div ><BiggerGalaxyButton buttonText="Join waitlist  "/></div>  

</div>

<video
        autoPlay
        muted
        loop
        className=" absolute top-[300px]  h-[775px] w-full left-0 z-10 object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>


<StarsCanvas/>

  </section>;
};
