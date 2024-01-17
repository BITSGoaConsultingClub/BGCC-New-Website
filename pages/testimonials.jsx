import ClientCard from "@/components/clientCard";
import TestimonialCard from "@/components/TestimonialCard";
import Newsletter from "@/components/Newsletter";
export default function Testimonials() {
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
        <div className="flex flex-col font-poppins">
          <h2 className="text-5xl font-bold">Stories Of Success</h2>
          <h2 className="text-4xl font-bold text-color-bgcc-yellow">
            Our Testimonials
          </h2>
          <h4 className="text-md ">
            A<span className="text-color-bgcc-yellow">Track Record</span> Of
            Success
          </h4>
        </div>
        <div className="flex flex-col items-center lg:flex-row flex-wrap gap-8 lg:gap-10 py-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:justify-around w-full items-center">
            <TestimonialCard ind="0" />
            <TestimonialCard ind="1" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-around w-full items-center">
            <TestimonialCard ind="2" />
            <TestimonialCard ind="3" />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
