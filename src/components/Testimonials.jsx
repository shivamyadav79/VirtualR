import React from "react";
import { testimonials } from "../constants";
import { Quote, User } from "lucide-react";

const Testimonials = () => {
  return (
    
    
    <div className="mt-20 tracking-wide text-white text-center mb-20">
        {/* Divider Line */}
<div className="border-t border-neutral-700 mx-6 my-10"></div>

      {/* Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 lg:my-20">
        What People Are Saying
      </h2>

      {/* Testimonials Grid - 6 Cards (3 per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Testimonial Card */}
            <div className="bg-black p-6 rounded-lg shadow-lg border border-neutral-700 text-left w-full min-h-[280px] flex flex-col justify-between">
              <div>
                {/* Quotation Icon */}
                <Quote size={28} className="text-orange-500 mb-3" />

                {/* Testimonial Text */}
                <p className="text-neutral-300 italic">"{testimonial.text}"</p>
              </div>

              {/* User Info (Profile Image + Name + Company) */}
              <div className="flex items-center mt-6">
                {/* User Image or Default Avatar */}
                {testimonial.image ? (
                  <img
                    className="w-12 h-12 border border-neutral-300 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                ) : (
                  <User size={48} className="text-neutral-500" />
                )}

                {/* Name & Company */}
                <div className="ml-4">
                  <p className="text-sm font-semibold text-orange-400">
                    {testimonial.user}
                  </p>
                  <p className="text-xs text-neutral-400">{testimonial.role} at {testimonial.company}</p>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
