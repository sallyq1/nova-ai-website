"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
  // duplicate
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
  //duplicate
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const firstColumn = testimonials.slice(0, 4);
const secondColumn = testimonials.slice(4, 8);
const thirdColumn = testimonials.slice(8, 12);

const TestimonialsColumn = (props: {
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className="flex flex-col gap-6">
    <motion.div
      className="flex flex-col gap-6
    "
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration || 10,
      }}
    >
      {props.testimonials.map((testimonial,index) => (
        <div key={index} className="  flex flex-col gap-5 thin-border-15 card-gradient rounded-xl p-10 items-start justify-center">
          <p className="paragraph text-[24px]">{testimonial.text}</p>
          <div className="flex gap-5 items-center">
            <div className="relative">
              <Image
                src={testimonial.avatarImg}
                alt={testimonial.title}
                className="h-[44px] w-[44px] relative saturate-0 rounded-lg"
              />
              <div className="h-[44px] w-[44px] bg-[#8C45FF]/30 z-20 absolute inset-0 rounded-lg">
                {" "}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-medium">{testimonial.name}</h1>
              <h2 className="font-light text-white/60">{testimonial.title}</h2>
            </div>
          </div>
        </div>
      ))}

      {/* duplicate set of testimonials for animation */}
      {props.testimonials.map((testimonial,index ) => (
        <div key={index}  className=" flex flex-col gap-5 thin-border-15 card-gradient rounded-xl p-10 items-start justify-center">
          <p className="paragraph text-[24px]">{testimonial.text}</p>
          <div className="flex gap-5 items-center">
            <div className="relative">
              <Image
                src={testimonial.avatarImg}
                alt={testimonial.title}
                className="h-[44px] w-[44px] relative saturate-0 rounded-lg"
              />
              <div className="h-[44px] w-[44px] bg-[#8C45FF]/30 z-20 absolute inset-0 rounded-lg">
                {" "}
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-medium">{testimonial.name}</h1>
              <h2 className="font-light text-white/60">{testimonial.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="text-white w-full flex flex-col items-center py-20 h-auto bg-black">
      <div className="py-5 flex flex-col items-center justify-center w-[335px] md:w-[384px] gap-5" >
        <h1 className="section-title gradient-text">Beyond expectations</h1>
        <p className="section-subtext mb-5">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
      </div>

      <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_60%,transparent)] w-full flex justify-center max-h-[400px]  overflow-hidden">
        <div className="flex items-center md:flex gap-6 w-5/6">
          <TestimonialsColumn testimonials={firstColumn} duration={13} />
          <span className="hidden md:block">
            <TestimonialsColumn testimonials={secondColumn} duration={19} />{" "}
          </span>
          <span className="hidden lg:block">
            <TestimonialsColumn testimonials={thirdColumn} duration={14} />{" "}
          </span>
        </div>
      </div>
    </section>
  );
};
