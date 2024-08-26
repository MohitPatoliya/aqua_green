import { Typography } from "@material-tailwind/react";
import Inquiry from "./inquiry";
import Footer from "./footer";

const About = () => {
  return (
    <div className="gd_image1">
      <div className="  z-10 gd_image1 bg-opacity-30 pb-10 ">
        <div className=" lg:flex mt-5">
          <div className="max-w-[1500px] grid grid-cols-3 lg:gap-8 mx-auto md:px-8 px-4">
            <div className="lg:col-span-2 col-span-3">
              <Typography
                variant="h1"
                color="blue-gray"
                className="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase"
              >
                About Us
              </Typography>
              <p className="flex gap-2 mt-10 text-xl text-gray-800 ">
                <div className="w-2 h-2 mt-2  rounded-full bg-green-700 mx-2 "></div>
                AQUA GREEN is leading the packaged drinking water manufacturer
                and supplier in the Western part of India
              </p>
              <p className="flex gap-2 mt-10 text-xl text-gray-800">
                <div className="w-2 h-2 mt-2  rounded-full bg-green-700 mx-2 "></div>
                AQUA GREEN has a pure and refreshing taste, which can be
                attributed to its unique arrangement of minerals and trace
                elements.
              </p>
              <p className="flex flex-row justify-center gap-2 mt-10 text-xl text-gray-800">
                <div className="w-4 h-2 mt-2  rounded-full bg-green-700 mx-2 "></div>
                We start with the Local water supply, which is then filtered by
                reverse osmosis to remove impurities. The purified water is then
                enhanced with a special blend of minerals for the pure, crisp,
                fresh water taste that’s delightfully AQUA GREEN
              </p>

              <p className="flex gap-2 mt-10 text-xl text-gray-800">
                <div className="w-2 h-2 mt-2  rounded-full bg-green-700 mx-2 "></div>
                “AQUA GREEN Delivering an unbeatable combination of quality,
                price, and service through hard work and innovation.”
              </p>
            </div>
            <div className="mt-20 lg:col-span-1 col-span-3">
              <Inquiry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
