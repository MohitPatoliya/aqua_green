import { Footer, Navbar } from "@/components";
import Skills from "../skills";
import Products from "@/components/products";

const ProductPage = () => {
  return (
    <div className="gd-image1">
      <Navbar />
      <div className="relative   px-4 sm:px-8 mb-10">
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
        <div className="relative pt-2 lg:pt-2 max-w-[1500px] mx-auto ">
          <div
            className="bg-cover w-full flex justify-center items-center"
            // style={{ backgroundImage: "url('/images/mybackground.jpeg')" }}
          >
            <div className="w-full bg-opacity-40 backdrop-filter backdrop-blur-lg ">
              <div className="w-12/12 w-full overflow-y-auto mx-auto rounded-2xl  backdrop-filter backdrop-blur-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 text-center px-2 mx-auto">
                  <article className="bg-white bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                    <a
                      target="_self"
                      href="/blog/slug"
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    ></a>
                    <div className="relative mb-4 rounded-2xl">
                      <img
                        className="max-h-[400px] rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="/edit-third.png"
                        alt=""
                      />
                    </div>
                  </article>
                  <div className="bg-white flex flex-col gap-5 bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
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

                  <div className="bg-white flex flex-col gap-5 bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
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
                  <article className="bg-white bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
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

                  <article className="bg-white bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
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
                  <div className="bg-white flex flex-col gap-5 bg-opacity-70 backdrop-blur-sm  p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
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
      </div>
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
};
export default ProductPage;
