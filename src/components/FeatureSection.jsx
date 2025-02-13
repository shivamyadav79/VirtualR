import React from "react";
import { features } from "../constants/index.jsx";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border border-neutral-800 min-h-[800px] flex flex-col items-center justify-center text-center py-16">
      {/* Badge */}
      <span className="bg-neutral-800 text-orange-500 rounded-full text-sm font-medium px-3 py-1 uppercase">
        Features
      </span>

      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 font-extrabold tracking-tight text-white">
        Easily Build{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          your code
        </span>
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-sm px-6"
          >
            <div className="text-4xl text-orange-500">{feature.icon}</div>
            <h3 className="text-xl font-semibold mt-4 text-white">
              {feature.text}
            </h3>
            <p className="mt-2 text-neutral-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
