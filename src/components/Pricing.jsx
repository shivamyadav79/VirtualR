import React from "react";
import { CheckCircle } from "lucide-react";

const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    duration: "/Month",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    duration: "/Month",
    mostPopular: true,
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    duration: "/Month",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10">Pricing</h2>

      {/* Pricing Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="border border-neutral-700 bg-neutral-900 p-8 rounded-xl shadow-lg flex flex-col items-center w-full h-[450px] transform transition-transform hover:scale-105"
          >
            {/* Plan Title */}
            <h3 className="text-2xl font-semibold mb-2">{option.title}</h3>

            {/* Highlight "Most Popular" */}
            {option.mostPopular && (
              <p className="text-orange-500 font-semibold text-sm">
                (Most Popular)
              </p>
            )}

            {/* Price */}
            <p className="text-4xl font-bold mt-2">
              {option.price}
              <span className="text-lg text-neutral-400">
                {" "}
                {option.duration}
              </span>
            </p>

            {/* Features List */}
            <ul className="mt-6 space-y-3 text-neutral-400">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle size={20} className="text-green-400 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Subscribe Button */}
            <button className="mt-auto w-full border border-orange-500 text-orange-500 py-3 rounded-lg font-medium hover:bg-orange-600 hover:text-white transition duration-300">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
