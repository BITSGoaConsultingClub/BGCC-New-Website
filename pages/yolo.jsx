import Image from "next/image";

export default function Yolo() {
  return (
    <div className=" h-[100vh] w-full">
      <Image
        src={
          "https://cdn.dribbble.com/users/1991554/screenshots/7907346/media/4883405c5ebbb70d93ab4bf3be439db2.gif"
        }
        width={700}
        height={700}
        className=" ml-6"
      />
    </div>
  );
}
