"use client"
import { Footer, Navbar } from "@/components";
import Skills from "../skills";
import Products from "@/components/products";
import Inquiry from "@/components/inquiry.js";

const ProductPage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative gd_image">
        <div className="relative max-w-[1500px]   px-4 sm:px-8 mb-10 mx-auto">
          <div className="container mx-auto mb-10 text-center max-w-[1500px]  ">
            <div className="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase ">
              Products
            </div>
            <div className="mx-auto w-full lg:w-10/12 md:text-xl text-sm mt-5 !font-sans !text-gray-700 ">
              Explore our premium mineral water bottles, crafted to retain natural
              taste and essential minerals. Available in eco-friendly, BPA-free
              packaging, they offer purity, refreshment, and sustainability in
              every sip.
            </div>
          </div>
          <div className="max-w-[1500px] bg-white bg-opacity-30  mx-auto grid grid-cols-3">
            <div className="relative pt-2 lg:pt-2 lg:col-span-2 col-span-3  ">
              <div
                className="bg-cover w-full flex justify-center items-center lg:col-span-2 col-span-3"
              // style={{ backgroundImage: "url('/images/mybackground.jpeg')" }}
              >
                <div className="w-full bg-opacity-40 backdrop-filter  backdrop-blur-lg ">
                  <div className="w-12/12 w-full overflow-y-auto mx-auto rounded-2xl  backdrop-filter backdrop-blur-lg">
                    <div className=" gap-3 text-center px-2 mx-auto">
                      <div className="flex md:flex-row flex-col gap-3">
                        <article className="bg-white bg-opacity-50 md:w-1/2 w-full backdrop-blur-md  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          {/* <a
                      target="_self"
                      href="/blog/slug"
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    ></a> */}
                          <div className="relative mb-4 rounded-2xl">
                            <img
                              className="max-h-[400px] rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                              src="/edit-third.png"
                              alt=""
                            />
                          </div>
                        </article>
                        <div className="bg-white flex flex-col gap-5 md:w-1/2 w-full bg-opacity-50 backdrop-blur-md  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          <p className="flex text-gray-800 font-base font-medium text-2xl">
                            Enhanced with Mineral for Pure and Perfect delicious
                            taste.
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISI: “Bureau of Indian Standards” quality standard
                            certifying the water safe for consumption
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISO 9001-2015: International Quality Management System
                            Standard
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            FSSAI – The Food Safety and Standards Authority of India.
                          </p>
                        </div>
                      </div>
                      <div className="flex md:flex-row flex-col-reverse gap-3">
                        <div className="bg-white flex md:w-1/2 w-full flex-col gap-5 bg-opacity-50 backdrop-blur-md   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          <p className="flex text-gray-800 font-base font-medium text-2xl">
                            Enhanced with Mineral for Pure and Perfect delicious
                            taste.
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISI: “Bureau of Indian Standards” quality standard
                            certifying the water safe for consumption
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISO 9001-2015: International Quality Management System
                            Standard
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            FSSAI – The Food Safety and Standards Authority of India.
                          </p>
                        </div>
                        <article className="bg-white  md:w-1/2 w-full bg-opacity-50 backdrop-blur-md   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          <a
                            target="_self"
                            href="/blog/slug"
                            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                          ></a>
                          <div className="relative mb-4 rounded-2xl">
                            <img
                              className="max-h-[400px] rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                              src="/edit-second.png"
                              alt=""
                            />
                          </div>
                          <div></div>
                        </article>
                      </div>
                      <div className="flex md:flex-row flex-col gap-3">
                        <article className="bg-white md:w-1/2 w-full bg-opacity-50 backdrop-blur-md   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          <a
                            target="_self"
                            href="/blog/slug"
                            className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                          ></a>
                          <div className="relative mb-4 rounded-2xl">
                            <img
                              className="max-h-[400px] rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                              src="/bottle4.png"
                              alt=""
                            />
                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"></div>
                          </div>
                        </article>
                        <div className="bg-white flex md:w-1/2 w-full  flex-col gap-5 bg-opacity-50 backdrop-blur-md   p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                          <p className="flex text-gray-800 font-base font-medium text-2xl">
                            Enhanced with Mineral for Pure and Perfect delicious
                            taste.
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISI: “Bureau of Indian Standards” quality standard
                            certifying the water safe for consumption
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            ISO 9001-2015: International Quality Management System
                            Standard
                          </p>
                          <p className="flex gap-2  text-start text-gray-800 font-normal text-lg">
                            <div className="w-2 h-2 rounded-full mt-2 bg-black"></div>
                            FSSAI – The Food Safety and Standards Authority of India.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="mt-20 lg:col-span-1 col-span-3">
            <Inquiry />
          </div> */}
            </div>
            <div className="lg:col-span-1 col-span-3">
              <Inquiry />
            </div>
          </div>
        </div>
      </div>
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default ProductPage;
