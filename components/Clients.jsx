import ClientsSlider from "@/components/ClientsSlider";
import SeeAll from "./SeeAll";

export default function Clients({ windowWidth }) {
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="flex flex-col-reverse lg:flex-row p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20 text-center">
        <div className="flex flex-col basis-1/2 gap-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
            Partners In Success
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-color-bgcc-yellow">
            For Our Clientele
          </h2>
          <h6 className="text-md md:text-lg lg:text-xl ">
            Top <span className="text-color-bgcc-yellow">companies</span> we
            have worked with
          </h6>
          <p className="md:text-xl mt-6 text-justify lg:text-left mx-auto lg:mx-0">
            We have a{" "}
            <span className="text-color-bgcc-yellow">
              stellar client roster
            </span>{" "}
            from multiple industries ranging from AgriTech to FinTech and
            Ed-Tech, with many of them coming back for repeat projects.
          </p>
        </div>
        <div className="basis-1/2">
          <img
            className="w-full md:w-2/3 m-auto"
            src="https://imgur.com/8vtL2CK.png"
            alt="Image"
          ></img>
        </div>
      </div>
      <div className="flex flex-col px-6 md:px-12 lg:px-16 xl:px-20">
        <SeeAll toPage="/clients" />
      </div>
      <div className="flex flex-col px-6 md:px-12 lg:px-16 xl:px-20 overflow-x-hidden">
        <ClientsSlider windowWidth={windowWidth} />
      </div>
    </div>
  );
}
