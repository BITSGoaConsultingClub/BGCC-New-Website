import NukaCarousel from "nuka-carousel";
import EventCard from "@/components/EventCard";
import upcomingEvents from "@/utils/upcomingEvents";

export default function UpcomingEvents() {
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
      {upcomingEvents.map((event) => (
        <div className="flex flex-row w-full">
          <EventCard
            title={event.title}
            description={event.description}
            imgUrl={event.imgUrl}
            buttonText="Register"
            otherDetails={event.otherDetails}
            link={event.link}
          />
        </div>
      ))}
    </NukaCarousel>
  );
}
