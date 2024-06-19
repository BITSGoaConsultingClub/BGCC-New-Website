import Image from "next/image";

export default function Loading() {
  return (
    <div className=" h-[100vh] w-full overflow-hidden  flex flex-row md:justify-center">
      <Image
        src={"https://imgur.com/ckF7KQu.gif"}
        width={500}
        height={500}
        className=""
      />
    </div>
  );
}
