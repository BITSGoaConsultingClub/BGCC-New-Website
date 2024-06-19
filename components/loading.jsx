import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={"https://i.imgur.com/EUzxAUw.gif"}
        width={500}
        height={500}
        className=""
        alt="Loading"
      />
    </div>
  );
}
