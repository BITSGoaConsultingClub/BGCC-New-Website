import { Input, Button, Image } from "@nextui-org/react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const submitEmail = async () => {
    const response = await fetch("/api/sendToSheet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Failed to send email");
    }
  };
  return (
    <div className="flex flex-col font-poppins  gap-6 lg:gap-8 items-center p-6 md:p-12 lg:p-16 xl:p-20">
      {/* section-01 => title */}
      <div className="flex flex-col items-center gap-3 ">
        <h2 className="font-bold text-4xl">
          Subscribe To Our Quarterly{" "}
          <span className="text-color-bgcc-yellow">Newsletter BizBeat</span>
        </h2>
        <h6 className=" text-sm">
          Stay updated about latest happenings in{" "}
          <span className="text-color-bgcc-yellow">
            economy, business and ventures
          </span>
        </h6>
      </div>
      <div className="flex flex-row items-center w-full lg:max-w-[50%]">
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Button
          className="color-bgcc-yellow text-black font-bold -ml-28"
          onClick={submitEmail}
        >
          Subscribe
        </Button>
      </div>
      <div className="flex flex-col gap-10 lg:gap-2 lg:flex-row bg-[#343434] bg-opacity-[50%] p-8 lg:p-12 items-center lg:justify-start border-small rounded-xl">
        <div className="flex flex-col basis-1/2 gap-3">
          <h2 className="font-bold text-4xl">
            Let's <span className="text-color-bgcc-yellow">Work Together</span>
          </h2>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://i.imgur.com/r2Obv7R.png"
          />
          <h2 className="font-bold text-4xl">and Scale!</h2>
        </div>
        <div className="flex flex-col basis-1/2  gap-4 lg:gap-6 ">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl text-color-bgcc-yellow">
              Mailing Address
            </h2>
            <p className="text-sm max-w-[60%]">
              BITS Goa, NH 17B, Bypass, Road, Zuarinagar, Sancoale, Goa 403726
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl text-color-bgcc-yellow">
              Phone Number
            </h2>
            <p className="text-sm max-w-[60%]">(+91) 8591619175</p>
            <p className="text-sm max-w-[60%]">(+91) 7073107659</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl text-color-bgcc-yellow">
              Email Address
            </h2>
            <p className="text-sm max-w-[60%]">bgcc.bitsgoa@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
