import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import pastEvents from "@/utils/pastEvents";

export default function PastEvents() {
  return (
    <NukaCarousel
      defaultControlsConfig={{
        pagingDotsStyle: {
          fill: "white",
        },
      }}
      cellAlign="center"
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
    >
      {pastEvents.map((event) => (
        <div className="flex flex-row w-full">
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
