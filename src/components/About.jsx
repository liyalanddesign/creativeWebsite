import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
    <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
      <p className="font-general text-sm uppercase md:text-[20px] text-primary">
        Welcome to Godlike Esports
      </p>
  
      <AnimatedTitle
        title="E<b>m</b>brace the <b>thrill</b> of<br /> comp<b>e</b>titive gaming"
        containerClass="mt-5 !text-black text-center"
      />
  
      <div className="about-subtext ">
        {/* <p>
          Enter the battlefield where legends are made and victories echo forever.
        </p> */}
        <p className="text-gray-500">
          Godlike Esports is more than a gaming org—it's a community of champions, 
          a legacy of dominance, and a gateway to the future of competitive gaming.
        </p>
      </div>
    </div>
  
    <div className="h-dvh w-screen" id="clip">
      <div className="mask-clip-path about-image">
        <img
          src="img/heroxgod.jpeg"
          alt="Background"
          className="absolute left-0 top-0 size-full object-cover"
        />
      </div>
    </div>
  </div>
  
  );
};

export default About;
