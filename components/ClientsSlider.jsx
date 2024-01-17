import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import upcomingEvents from "@/utils/upcomingEvents";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import clients from "@/utils/clients";
import { useState, useEffect } from "react";
// function useWindowWidth() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return windowWidth;
// }
export default function ClientsSlider({ windowWidth }) {
  //   const windowWidth = useWindowWidth();

  let slidesToShow = 2;
  if (windowWidth <= 640) {
    slidesToShow = 1;
  } else if (windowWidth <= 768) {
    slidesToShow = 2;
  } else if (windowWidth <= 1024) {
    slidesToShow = 3;
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
        //   renderBottomCenterControls={() => null}
      >
        {clients.map((client) => (
          <Card className="py-4 font-poppins max-w-[325px]  border-1 border-gray-400 mb-10 md:mb-14 mx-auto">
            <CardBody className="overflow-visible py-2 flex flex-row justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={client.imgUrl}
                style={{ height: "200px", objectFit: "fill" }}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h2 className="font-bold text-2xl text-color-bgcc-yellow text-center w-full">
                {client.name}
              </h2>
            </CardHeader>
          </Card>
        ))}
      </NukaCarousel>
    </>
  );
}
