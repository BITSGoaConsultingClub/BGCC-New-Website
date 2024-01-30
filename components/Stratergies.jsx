import { Card, CardBody } from "@nextui-org/react";
import StratCard from "@/components/StratCard";
import Strategies from "@/components/StrategiesSlider";
import StrategiesSlider from "@/components/StrategiesSlider";
import strategies from "@/utils/strategies";
export default function Stratergies({ windowWidth }) {
  const cardElements = strategies.map((ele) => (
    <StratCard no={ele.no} title={ele.title} description={ele.description} />
  ));
  return (
    <div className="flex flex-col lg:flex-row  gap-8  overflow-hidden">
      {/* <StrategiesSlider windowWidth={windowWidth} /> */}
      {cardElements}
    </div>
  );
}
