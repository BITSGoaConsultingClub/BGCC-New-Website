import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import upcomingEvents from "@/utils/upcomingEvents";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import clients from "@/utils/clients";
import { useState, useEffect } from "react";
// import { Card, CardBody } from "@nextui-org/react";
import StratCard from "@/components/StratCard";
import strategies from "../utils/strategies";
// function useWindowWidth() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowWidth;
// }
const cardElements = strategies.map((ele) => (
  <StratCard no={ele.no} title={ele.title} description={ele.description} />
));
export default function StrategiesSlider({ windowWidth }) {
  //   const windowWidth = useWindowWidth();

  let slidesToShow = 2;
  if (windowWidth <= 640) {
    slidesToShow = 1;
  } else if (windowWidth <= 768) {
    slidesToShow = 2;
  } else if (windowWidth <= 1024) {
    slidesToShow = 2;
  } else {
    slidesToShow = 4;
  }

  return (
    <>
      <NukaCarousel
        slidesToShow={slidesToShow}
        renderCenterLeftControls={() => null}
        renderCenterRightControls={() => null}
        cellSpacing={20}
        autoplay={true}
        pauseOnHover={true}
        // wrapAround={true}
        //   renderBottomCenterControls={() => null}
      >
        <div className="flex flex-row justify-evenly"></div>
      </NukaCarousel>
    </>
  );
}
