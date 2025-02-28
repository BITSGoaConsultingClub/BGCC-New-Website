import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import pastEvents from "@/utils/pastEvents";

export default function PastEvents() {
  return (
    <NukaCarousel
      autoplay={true}
      autoplayInterval={3000}
      wrapAround={true}
      cellAlign="center"
      defaultControlsConfig={{
        pagingDotsStyle: { fill: "white" },
        prevButtonText: "<",
        nextButtonText: ">"
      }}
    >
      {pastEvents.map((event, index) => (
        <div key={index} className="flex justify-center items-center w-full">
          <EventCard
            title={event.title}
            description={event.description}
            imgUrl={event.imgUrl}
            buttonText="Learn More"
            otherDetails={event.otherDetails}
            link={event.link}
          />
        </div>
      ))}
    </NukaCarousel>
  );
}
