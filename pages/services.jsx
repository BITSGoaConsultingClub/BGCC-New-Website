import ServiceCard from "@/components/ServiceCard";
import Newsletter from "@/components/Newsletter";
import servicesList from "@/utils/services";
export default function ServicesPage() {
  const serviceElements = servicesList.map((ele, index) => (
    <ServiceCard
      title={ele.title}
      description={ele.description}
      imgUrl={ele.imgUrl}
      index={index}
      logoUrl={ele.logoUrl}
    />
  ));
  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex  flex-col h-screen bg-services-image bg-cover bg-opacity-[10%]  bg-no-repeat items-center justify-center">
        <h1 className="font-bold lg:-mt-28 brightness-200 text-5xl md:text-7xl tracking-wider mb-2 ">
          Services
        </h1>
        <h2 className="font-poppins bg-[#343434] bg-opacity-[50%] brightness-200 text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest ">
          Tailored Solutions
        </h2>
      </div>
      <div className="flex flex-col p-4 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16 text-center">
        <div className="flex flex-col font-poppins gap-2">
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-bold">
            Our Offerings
          </h2>

          <h4 className="text-md ">
            Supporting your{" "}
            <span className="text-color-bgcc-yellow">growth</span>, partnering
            in <span className="text-color-bgcc-yellow">success</span>
          </h4>
        </div>
        <div className="flex flex-col  gap-8 lg:gap-10 py-6">
          {serviceElements}
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
