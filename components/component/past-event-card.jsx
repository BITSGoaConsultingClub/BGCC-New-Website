import { Button } from "@nextui-org/react";
export default function PastEventCard({ title, description, imgUrl }) {
  return (
    <div className="mx-6 red-focus max-w-[500px] font-poppins  rounded-lg shadow-2xl md:flex md:flex-col">
      <img
        src={imgUrl}
        alt="Boat"
        className="rounded-t-lg 
  md:rounded-l-lg md:rounded-t-none"
      />
      <div className="p-6 red-focus flex flex-col justify-center items-center lg:items-start gap-2 bg-[#343434] bg-opacity-[50%]">
        <h2 className="font-bold text-xl md:text-3xl text-color-bgcc-yellow text-center lg:text-left">
          {title}
        </h2>
        <p className="text-white text-md md:text-lg mt-4 lg:mt-6 text-justify lg:text-left">
          {description}
        </p>
        <button className="p-4 mb-4 font-semibold max-w-[144px] mt-2 rounded-xl color-bgcc-yellow text-black font-poppins">
          Register Now
        </button>
      </div>
    </div>
  );
}
