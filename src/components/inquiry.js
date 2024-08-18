import { Typography } from "@material-tailwind/react";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

const Inquiry = () => {
  return (
    <div className=" isolate  bg-opacity-30 backdrop-blur-xl  ">
      <Typography
        variant="h1"
        color="blue-gray"
        className="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-2xl md:text-xl text-lg  font-bold text-center uppercase"
      >
        Inquiry Form
      </Typography>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-1">
        <form className="px-6  lg:px-8 mt-10">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <div className="">
                  <input
                    id="firstName"
                    className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-4 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-base sm:leading-6"
                    required
                    placeholder="First name"
                    type="text"
                    name="firstName"
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <input
                    id="lastName"
                    className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-4 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-base sm:leading-6"
                    required
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <input
                    id="city"
                    className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-4 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-base sm:leading-6"
                    required
                    placeholder="City"
                    type="text"
                    name="city"
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <input
                    id="country"
                    className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-4 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-base sm:leading-6"
                    required
                    placeholder="Country"
                    type="text"
                    name="Country"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div>
                  <div className="">
                    <input
                      id="email"
                      className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-4 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-base sm:leading-6"
                      required
                      placeholder="you@company.com"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>

                <div className="mt-3.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
                    required
                    placeholder="Leave us a message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                className="transition-all duration-1000 ease-in-out flex items-center gap-2.5 rounded-md bg-gradient-to-br from-[#21960c] to-[#89f241] px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-opacity-75 w-full justify-center text-center"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Inquiry;
