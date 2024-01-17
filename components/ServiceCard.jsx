export default function ServiceCard({
  title,
  description,
  imgUrl,
  index,
  logoUrl,
}) {
  const ind = parseInt(index);
  return (
    <div
      className={`mx-6 max-w-[1200px] font-poppins bg-[#343434] bg-opacity-[50%] rounded-lg shadow-2xl md:flex ${
        ind % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        src={imgUrl}
        alt="Boat"
        className="rounded-t-lg 
 md:w-1/3 md:rounded-l-lg md:rounded-t-none"
      />{" "}
      <div className="p-6 flex flex-col justify-center lg:justify-start gap-2">
        <img src={logoUrl} className="w-14 md:w-20 mb-4" />
        <h2 className="font-bold text-2xl md:text-3xl text-color-bgcc-yellow lg:text-left">
          {title}
        </h2>
        <p className="text-white text-md md:text-lg mt-4 lg:mt-6 text-justify lg:text-left">
          {description}
        </p>
      </div>
    </div>
  );
}
