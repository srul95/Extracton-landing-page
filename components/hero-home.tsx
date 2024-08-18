"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function HeroHome() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <section id="home" className="relative h-screen">
      {/*<PageIllustration />*/}
      <img
        src={"/images/algae/background.jpg"}
        alt="algae pool"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
        {/* Hero content */}
        {/*<div className="pb-12 pt-50 md:pb-20 md:pt-40">*/}
        <div className="">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 text-6xl font-mono"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Systematic Data Extractor <br className="max-lg:hidden" />
              {/* Through Algae-Based Power Systems */}
            </h1>
            <div className="mx-auto max-w-3xl font-mono">
              <p
                className="mb-8 text-lg text-teal-950	"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Extract web data with pinpoint accuracy, transforming hours of
                manual work into effortless clicks. Streamline your research
                process, gathering precise information across multiple sites in
                mere minutes. Unleash the power of automated extraction and
                watch your productivity soar to new heights.
              </p>
              <div className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group text-xl font-extralight mb-4 w-full bg-gradient-to-t from-violet-500 to-violet-300 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <a
                      href={"#contact"}
                      className="relative inline-flex items-center"
                    >
                      Try Now!
                      <span className="ml-1 tracking-normal text-green-50 transition-transform group-hover:translate-x-0.5">
                        &gt;
                      </span>
                    </a>
                  </a>
                  <a
                    className="btn group text-xl font-extralight mb-4 w-full bg-gradient-to-t from-violet-50 to-violet-300 bg-[length:100%_100%] bg-[bottom] text-teal-950 shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto sm:ml-4 sm:w-auto"
                    // className="btn text-xl font-extralight w-full bg-violet-50 text-gray-800 shadow hover:bg-violet-400 sm:ml-4 sm:w-auto"
                    href="#technology"
                  >
                    Wacth Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
