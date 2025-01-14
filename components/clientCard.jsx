import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import clients from "@/utils/clients";
export default function ClientCard({ ind }) {
  const index = parseInt(ind);
  return (
    <Card className="py-4 flex flex-col font-poppins max-w-[325px] ">
      <CardBody className="h-auto flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-contain rounded-xl max-w-full"
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
