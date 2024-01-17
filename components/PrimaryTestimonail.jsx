// TestimonialCard.js
import React from "react";
import testimonials from "@/utils/testimonials";
import { landingPageTestimonial } from "@/utils/testimonials";
const PrimaryTestimonialCard = ({ name, title, content, imgUrl }) => {
  return (
    <div className="font-poppins  bg-[#343434] bg-opacity-[50%] text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg max-w-md relative m-4 lg:m-12">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden h-32 w-32">
        <img src={imgUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="text-center mt-24">
        <h2 className="text-lg font-bold text-color-bgcc-yellow">{name}</h2>
        <p className="text-lg font-bold text-color-bgcc-yellow">{title}</p>
        <p className="text-white mt-2 text-justify">{content}</p>
      </div>
    </div>
  );
};

export default PrimaryTestimonialCard;
