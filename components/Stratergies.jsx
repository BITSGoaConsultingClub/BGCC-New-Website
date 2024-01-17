import { Card, CardBody } from "@nextui-org/react";
import StratCard from "@/components/StratCard";
export default function Stratergies() {
  const cardContent = [
    {
      no: "01",
      title: "Go To Market Stratergy",
      description:
        "We help you build your best strategies for getting your product into the market",
    },
    {
      no: "02",
      title: "Competitor Heatmapping",
      description:
        "We help you analyze your potential  competitors , helping you get that edge to turn all tides",
    },
    {
      no: "03",
      title: "Marketing Strategy",
      description:
        "Provide targeted marketing solutions from brand positioning to pricing strategies",
    },
  ];
  const cardElements = cardContent.map((ele) => (
    <StratCard no={ele.no} title={ele.title} description={ele.description} />
  ));
  return (
    <div className="flex flex-col lg:flex-row gap-8  overflow-hidden">
      {cardElements}
    </div>
  );
}
