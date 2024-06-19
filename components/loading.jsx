import Image from "next/image";

export default function Loading() {
  return (
    <div className=" h-[100vh] w-full overflow-hidden  flex flex-row md:justify-center">
      <Image
        src={"https://i.imgur.com/EUzxAUw.gif"}
        width={100}
        height={100}
        className=""
      />
    </div>
  );
}
