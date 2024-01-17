export default function Services() {
  return (
    <div className="flex flex-col   p-6 md:p-12 lg:p-16 xl:p-20 gap-8 md:gap-16 lg:gap-20 ">
      {/* Section 1 */}
      <div className="flex items-center flex-col-reverse lg:flex-row lg:justify-between mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        <div className="md:w-1/2 mr-3 text-center lg:text-left">
          <div className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white font-bold mb-4 ">
            Unleashing{" "}
            <span className="text-[#E5CF5F]">Strategic Insights</span> for
            Business Success
          </div>
          <div className="text-md md:text-lg lg:text-xl  text-gray-400 text-center lg:text-left tracking-wide font-semibold mb-8 ">
            Data-Driven Strategies &{" "}
            <span className="text-[#E5CF5F]">Visionary Thinking</span> to Propel
            Your Company to New Heights
          </div>
          <div className=" md:text-xl text-white w-4/5 md:w-6/7 tracking-wide text-justify lg:text-left mx-auto lg:mx-0">
            We are a passionate group of 50+ like-minded students from BITS
            Pilani, Goa Campus. Our vision is to delve into the world of{" "}
            <span className="text-[#E5CF5F]">consulting</span>, working closely
            with clients and gaining hands-on experience in various industries.
          </div>
          {/* TODO: add the 3 boxes saying growth stories, alumns blah blah */}
        </div>
        <div className="flex flex-row items-center justify-center lg:w-1/2 mt-7 md:mt-0 mb-3">
          <img
            className="w-full md:w-2/3 m-auto"
            src="https://imgur.com/E7lmbNX.png"
            alt="Image"
          ></img>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex flex-col-reverse  items-center lg:flex-row-reverse lg:justify-between mb-8 md:mb-12 lg:mb-16 xl:mb-20 text-center lg:text-left">
        <div className="md:w-1/2 mr-3 ">
          <div className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-white font-bold mb-4">
            All Your Needs, Covered By{" "}
            <span className="text-[#E5CF5F]">Our Services</span>
          </div>
          <div className="text-md md:text-lg lg:text-xl  text-gray-400 tracking-wide font-semibold mb-8">
            Consultancy Solutions Tailored to{" "}
            <span className="text-[#E5CF5F]">Empower Your Business</span> Growth
            and Excellence
          </div>
          <div className="md:text-xl lg:text-xl  text-white w-4/5 md:w-6/7 tracking-wide text-justify lg:text-left mx-auto lg:mx-0">
            Whether you're a startup, established business, or somewhere in
            between, we have the{" "}
            <span className="text-[#E5CF5F]">consultancy solutions</span> to
            help you achieve your growth and excellence goals. Our tailored
            services cover a wide range of needs, from strategic planning and
            market research to operations and technology.
          </div>
        </div>
        <div className="flex flex-row items-center justify-center lg:w-1/2 mt-7 md:mt-4 mb-3">
          <img
            className="w-full md:w-2/3"
            src="https://imgur.com/y3VC445.png"
            alt="Image"
          ></img>
        </div>
      </div>
    </div>
  );
}
