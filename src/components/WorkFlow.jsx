import React from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";

const checklistItems = [
  { title: "Fast Development", description: "Write and test code with minimal setup." },
  { title: "Seamless Integration", description: "Easily integrate with your favorite tools." },
  { title: "High Performance", description: "Optimized for speed and efficiency." },
];

const WorkFlow = () => {
  return (
    <div className="mt-20 text-center px-6">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 font-extrabold tracking-wide text-white">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          coding workflow
        </span>
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img src={codeImg} alt="code workflow" className="max-w-full w-[500px] rounded-lg shadow-lg" />
        </div>

        {/* Checklist Section */}
        <div className="space-y-6 text-left">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle2 size={32} className="text-orange-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-neutral-400">{item.description}</p>
                    
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
