import ClientCard from "@/components/clientCard";
import Newsletter from "@/components/Newsletter";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";

import Loading from "../components/loading";
import { useState, useEffect } from "react";
export default function EventsPage() {
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
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col h-[50vh] bg-events-image bg-cover bg-no-repeat items-center justify-center">
        <h1 className="font-bold lg:-mt-28 text-5xl md:text-7xl tracking-wider mb-2">
          Events
        </h1>
        <h2 className="font-poppins text-3xl md:text-3xl text-color-bgcc-yellow tracking-widest">
          Visionary Gatherings
        </h2>
      </div>
      <div className="flex flex-col p-6 md:p-12 lg:p-16 xl:p-20 gap-8 lg:gap-16">
        <div className="flex flex-col font-poppins">
          <h2 className="text-5xl font-bold mb-2">Past Events</h2>

          <h4 className="text-md ">
            Enter whatever{" "}
            <span className="text-color-bgcc-yellow">you want!</span>
          </h4>
        </div>
        <div className="flex flex-col ">
          <PastEvents />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
