import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import clients from "@/utils/clients";
export default function ClientCard({ ind }) {
  const index = parseInt(ind);
  return (
    <Card className="py-4 font-poppins max-w-[325px] ">
      <CardBody className="overflow-visible py-2 flex flex-row justify-center">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={clients[index].imgUrl}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h2 className="font-bold text-2xl text-color-bgcc-yellow text-center w-full">
          {clients[index].name}
        </h2>
        <small className="text-default-500 text-justify">
          {clients[index].description}
        </small>
      </CardHeader>
    </Card>
  );
}
