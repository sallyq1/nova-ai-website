import BiggerGalaxyButton from "@/components/BiggerGalaxyButton";
import GalaxyButton from "@/components/GalaxyButton";
import StarsBackground from "@/assets/stars.png";
import Gridlines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 bg-black">
      <div
        className=" thin-border w-5/6  rounded-xl p-32 overflow-hidden relative"
        style={{
          backgroundImage: `url(${StarsBackground.src})`,
        }}
      >
        <div
          className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
          style={{ backgroundImage: `url(${Gridlines.src})` }}
        ></div>

        <div className="relative flex flex-col items-center justify-center gap-10">
          <h1 className="section-title text-[48px] md:text-[60px] leading-none  md:w-[444px] gradient-text p-3">
            AI-driven SEO for everyone.
          </h1>

          <p className="section-subtext w-[288px] -mt-5 leading-relaxed ">
            Achieve clear, impactful results without the complexity.
          </p>

          <BiggerGalaxyButton buttonText="Get started" />
        </div>
      </div>
    </section>
  );
};
