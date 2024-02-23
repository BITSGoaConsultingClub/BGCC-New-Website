import Image from "next/image";

export default function Loading() {
  return (
    <div className=" h-[100vh] w-full overflow-hidden">
      <Image
        src={
          "[img]https://i.imgur.com/RgN4KDq.gif[/img]"
        }
        alt="jbdsjk"
        width={700}
        height={700}
        className=" ml-6"
      />
    </div>
  );
}
