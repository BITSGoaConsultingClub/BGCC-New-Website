import Image from "next/image";

export default function Loading() {
  return (
    <div className=" h-[100vh] w-full overflow-hidden  flex flex-row md:justify-center">
      <Image
        src={"https://i.imgur.com/U8atHTb.gif"}
        alt="jbdsjk"
        width={500}
        height={500}
        className=""
      />
    </div>
  );
}
