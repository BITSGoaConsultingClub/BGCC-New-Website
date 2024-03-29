import ClientCard from "@/components/clientCard";
import TestimonialCard from "@/components/TestimonialCard";
import Newsletter from "@/components/Newsletter";
import testimonials from "@/utils/testimonials";
import Loading from "../components/loading";
import { useState, useEffect } from "react";
const testiEle = testimonials.map((t, index) => {
  return <TestimonialCard ind={index} />;
});
export default function Testimonials() {
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   // Simulate a network request to fetch your data
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500); // 2 seconds delay
  // }, []);
  // if (isLoading) {
  //   return <Loading />; // This is your loading screen
  // }
  // console.log(testiEle);
  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col h-screen bg-testimonials-image bg-auto bg-no-repeat items-center justify-center">
        <h1 className="font-bold lg:-mt-28 text-5xl md:text-7xl tracking-wider mb-2 ">
          Testimonials
        </h1>
        <h2 className="font-poppins text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest">
          Partners in Success
        </h2>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16">
        <div className="flex flex-col font-poppins mx-auto">
          <h2 className="text-5xl font-bold">Stories Of Success</h2>
          <h2 className="text-4xl font-bold text-color-bgcc-yellow text-center">
            Our Testimonials
          </h2>
          <h4 className="text-md text-center">
            A<span className="text-color-bgcc-yellow">Track Record</span> Of
            Success
          </h4>
        </div>
        <div className="flex flex-col items-center flex-wrap gap-8 lg:gap-10 py-6">
          {testiEle}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
