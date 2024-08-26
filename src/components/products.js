"use client";
import { Typography } from "@material-tailwind/react";

const Products = () => {
  return (
    <div className="relative  bg:opacity-30 gd_image">
      <div className="container mx-auto mb-20 text-center max-w-7xl   ">
        <div className="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase ">
          Products
        </div>
        <div className="mx-auto w-full lg:w-10/12 md:text-xl text-sm mt-5 !font-sans !text-gray-700 ">
          Explore our premium mineral water bottles, crafted to retain natural
          taste and essential minerals. Available in eco-friendly, BPA-free
          packaging, they offer purity, refreshment, and sustainability in every
          sip.
        </div>
      </div>
      <div className="relative pt-2 lg:pt-2 max-w-[1500px] mx-auto ">
        <div
          className="bg-cover w-full flex justify-center items-center"
          style={{ backgroundImage: "url('/images/mybackground.jpeg')" }}
        >
          <div className="w-full  p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl  backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                  <a
                    target="_self"
                    href="/blog/slug"
                    className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                  ></a>
                  <div className="relative mb-4 rounded-2xl">
                    <img
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src="/edit-third.png"
                      alt=""
                    />

                    <div className=" flex flex-col gap-3  p-4 bg-[#00b300] bg-opacity-60 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                      <p className="flex text-white font-base font-medium text-lg">
                        Enhanced with Mineral for Pure and Perfect delicious
                        taste.
                      </p>
                      <p className="flex gap-2   justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISI: “Bureau of Indian Standards” quality standard
                        certifying the water safe for consumption
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISO 9001-2015: International Quality Management System
                        Standard
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        FSSAI – The Food Safety and Standards Authority of
                        India.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-medium text-xl leading-8">
                    <div className="block relative group-hover:text-[#00b300]  transition-colors duration-200 ">
                      200 ML Bottle
                    </div>
                  </h3>
                  <div></div>
                </article>

                <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                  {/* <a
                    target="_self"
                    href="/blog/slug"
                    className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                  ></a> */}
                  <div className="relative mb-4 rounded-2xl">
                    <img
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src="/edit-second.png"
                      alt=""
                    />

                    <div className=" flex flex-col gap-3  p-4 bg-[#00b300] bg-opacity-60 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                      <p className="flex text-white font-base font-medium text-lg">
                        Enhanced with Mineral for Pure and Perfect delicious
                        taste.
                      </p>
                      <p className="flex gap-2   justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISI: “Bureau of Indian Standards” quality standard
                        certifying the water safe for consumption
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISO 9001-2015: International Quality Management System
                        Standard
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        FSSAI – The Food Safety and Standards Authority of
                        India.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full pb-4 mb-auto"></div>
                  <h3 className="font-medium text-xl leading-8">
                    <div
                      className="block relative group-hover:text-[#00b300] transition-colors duration-200 "

                    >
                      500 ML Bottle
                    </div>
                  </h3>
                  <div></div>
                </article>

                <article className="bg-white  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                  {/* <a
                    target="_self"
                    href="/blog/slug"
                    className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                  ></a> */}
                  <div className="relative mb-4 rounded-2xl">
                    <img
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src="/bottle4.png"
                      alt=""
                    />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"></div>

                    <div className=" flex flex-col gap-3  p-4 bg-[#00b300] bg-opacity-60 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100">
                      <p className="flex text-white font-base font-medium text-lg">
                        Enhanced with Mineral for Pure and Perfect delicious
                        taste.
                      </p>
                      <p className="flex gap-2   justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISI: “Bureau of Indian Standards” quality standard
                        certifying the water safe for consumption
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        ISO 9001-2015: International Quality Management System
                        Standard
                      </p>
                      <p className="flex gap-2 justify-center text-start text-white font-normal text-base">
                        <div className="w-2 h-2 rounded-full mt-2 bg-white"></div>
                        FSSAI – The Food Safety and Standards Authority of
                        India.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full pb-4 mb-auto"></div>
                  <h3 className="font-medium text-xl leading-8">
                    <div
                      className="block relative group-hover:text-[#00b300] transition-colors duration-200 "
                    >
                      1 Liter (1000 ML) Bottle
                    </div>
                  </h3>
                  <div></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
