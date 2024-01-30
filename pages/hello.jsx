import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Stratergies from "@/components/Stratergies";
import Newsletter from "@/components/Newsletter";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import TestimonialSection from "@/components/TestimonialSection";
import SeeAll from "@/components/SeeAll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StratCard from "@/components/StratCard";
import strategies from "../utils/strategies";
import Loading from "../components/loading";
import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowWidth;
}
const cardElements = strategies.map((ele) => (
  <CarouselItem className=" basis-full md:basis-1/2 lg:basis-1/3">
    <StratCard no={ele.no} title={ele.title} description={ele.description} />
  </CarouselItem>
));
export default function Hello() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a network request to fetch your data
    setTimeout(() => {
      setIsLoading(false);
    }, 3500); // 2 seconds delay
  }, []);
  const windowWidth = useWindowWidth();
  // console.log(windowWidth);
  if (isLoading) {
    return <Loading />; // This is your loading screen
  }

  return (
    <div className="flex flex-col   h-full w-full  font-poppins overflow-hidden">
      <div className="flex flex-col h-screen bg-hero bg-cover bg-center bg-no-repeat">
        <section className="landing-text h-full flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-6xl lg:-mt-28 lg:text-7xl font-bold font-poppins text-white text-center md:mx-8">
            BITS Goa Consulting Club
          </h1>
          <h2 className="text-2xl lg:text-4xl text-[#E5CF5F] md:mx-8">
            Insight. Impact. Excellence
          </h2>
        </section>
      </div>
      <Services />
      <div className="flex flex-col items-center gap-4 lg:gap-6 mx-auto mb-10 lg:mb-16  ">
        <div className=" ml-8 mr-auto">
          <SeeAll toPage="/services" />
        </div>
        {/* <Stratergies windowWidth={windowWidth} /> */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>{cardElements}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Clients windowWidth={windowWidth} />
      <TestimonialSection />
      <Team />
      <Newsletter />
    </div>
  );
}
