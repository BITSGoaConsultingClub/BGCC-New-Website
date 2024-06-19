import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={"https://i.imgur.com/EUzxAUw.gif"}
        width={100}
        height={100}
        className=""
        alt="Loading"
      />
    </div>
  );
}
