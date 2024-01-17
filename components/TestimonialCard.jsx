// TestimonialCard.js
import React from "react";
import testimonials from "@/utils/testimonials";

const TestimonialCard = ({ ind }) => {
  //   console.log(testimonials);
  const index = parseInt(ind);
  //   console.log(index);
  return (
    <div className="font-poppins  bg-[#343434] bg-opacity-[50%] text-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg max-w-md relative m-4 lg:m-12">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 rounded-full overflow-hidden h-32 w-32">
        <img
          src={testimonials[index].imgUrl}
          alt={testimonials[index].name}
          className="w-full h-full object-fill"
        />
      </div>
      <div className="text-center mt-24">
        <h2 className="text-lg font-bold text-color-bgcc-yellow">
          {testimonials[index].name}
        </h2>
        <p className="text-lg font-bold text-color-bgcc-yellow">
          {testimonials[index].designation}
        </p>
        <p className="text-white mt-2 text-justify flex-grow">
          {testimonials[index].content}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
