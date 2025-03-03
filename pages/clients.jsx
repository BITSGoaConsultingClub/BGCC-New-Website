import ClientCard from "@/components/clientCard";
import Newsletter from "@/components/Newsletter";
import Loading from "../components/loading";
import { useState, useEffect } from "react";
export default function ClientsPage() {
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
  return (
    <div className="flex flex-col gap-12 h-full">
      <div className="flex flex-col h-screen bg-clients-image bg-cover bg-no-repeat  items-center justify-center">
        <h1 className="font-bold lg:-mt-28 text-5xl md:text-7xl tracking-wider mb-2">
          Our Clients
        </h1>
        <h2 className="font-poppins text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest">
          Partners in Success
        </h2>
      </div>
      <div className="flex justify-center py-12">
        <div style={{ position: 'relative', paddingTop: 'max(60%, 324px)', width: '100%', height: 0 }}>
          <iframe
            src="https://online.fliphtml5.com/hpxya/dhki/"
            style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }}
            seamless="seamless"
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16 text-center">
        <div className="flex flex-col font-poppins">
          <h2 className="text-5xl font-bold">Experience Speaks</h2>
          <h2 className="text-4xl font-bold text-color-bgcc-yellow">
            Our Clientele
          </h2>
          <h4 className="text-md ">
            Clients We're{" "}
            <span className="text-color-bgcc-yellow">Happy to Serve</span>
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-8 lg:gap-10 py-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:justify-around w-full">
            <ClientCard ind="0" />
            <ClientCard ind="1" />
            <ClientCard ind="2" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-around w-full">
            <ClientCard ind="3" />
            <ClientCard ind="4" />
            <ClientCard ind="5" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 justify-around w-full">
            <ClientCard ind="6" />
            <ClientCard ind="7" />
            <ClientCard ind="8" />
          </div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
