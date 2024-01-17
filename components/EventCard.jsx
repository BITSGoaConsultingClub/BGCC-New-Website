import { Button } from "@nextui-org/react";
export default function EventCard({
  title,
  description,
  imgUrl,
  buttonText,
  otherDetails,
  link,
}) {
  return (
    <div className="mx-6  max-w-[1200px] font-poppins  rounded-lg shadow-2xl md:flex md:flex-row-reverse">
      <img
        src={imgUrl}
        alt="Boat"
        className="rounded-t-lg 
 md:w-1/3 md:rounded-l-lg md:rounded-t-none"
      />{" "}
      <div className="p-6 flex flex-col justify-center items-center lg:items-start gap-2 bg-[#343434] bg-opacity-[50%]">
        <h2 className="font-bold text-xl md:text-3xl text-color-bgcc-yellow text-center lg:text-left">
          {title}
        </h2>
        <p className="text-white text-md md:text-lg mt-4 lg:mt-6 text-justify lg:text-left">
          {description}
        </p>
        {otherDetails && (
          <p className="text-white text-md md:text-lg mt-4 lg:mt-6 text-justify lg:text-left">
            {otherDetails}
          </p>
        )}

        <a
          href={link}
          className="p-4 mb-4 font-semibold max-w-[144px] mt-2 rounded-xl color-bgcc-yellow text-black font-poppins"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
