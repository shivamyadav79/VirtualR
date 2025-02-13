import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 lg:mt-24 px-6">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide text-white">
        VirtualR Build Tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "} for Developers
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg sm:text-xl text-neutral-400 max-w-3xl leading-relaxed">
        Empower creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Get Started
        </a>
        <a
          href="#"
          className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Learn More
        </a>
      </div>

      {/* Videos */}
      <div className="flex mt-10 justify-center gap-6">
        <video autoPlay muted loop className="rounded-lg w-2/5 max-h-[300px] border border-orange-700 shadow-lg shadow-orange-500">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay muted loop className="rounded-lg w-2/5 max-h-[300px] border border-orange-700 shadow-lg shadow-orange-500">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
