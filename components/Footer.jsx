import imgLinks from "@/utils/images";
import React from "react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
const Footer = () => {
  return (
    <footer className="bg-[#343434] bg-opacity-[50%] text-white py-8 font-poppins text-sm px-6 lg:px-16">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-6 sm:mb-0 sm:mr-8">
          <img src={imgLinks.bgccLogo} alt="Logo" className="h-12" />
        </div>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="mb-6 sm:mb-0 sm:mr-8">
            <div className="flex mb-4 lg:mb-6 justify-evenly">
              <a href="#" className="mr-4">
                <InstagramLogoIcon />
              </a>
              <a href="#" className="mr-4">
                <TwitterLogoIcon />
              </a>
              <a href="#" className="mr-4">
                <LinkedInLogoIcon />
              </a>
            </div>
            <div className="flex">
              <a href="#" className="mr-4">
                Privacy Policy
              </a>
              <a href="#" className="mr-4">
                Terms of Use
              </a>
              <a href="#" className="mr-4">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
