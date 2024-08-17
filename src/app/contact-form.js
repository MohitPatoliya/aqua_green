"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { LocateIcon, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  return (
    <>
      <section className="sm:px-8 px-4 py-16 ">
        <div className="container mx-auto mb-20 text-center max-w-7xl  ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase"
          >
            Contact Us
          </Typography>
          <div className="mx-auto w-full lg:w-10/12 md:text-xl text-sm mt-5 !font-sans !text-gray-700 ">
            Ready to get started? Feel free to reach out through the contact
            form, and let&apos;s embark on a journey of innovation and success.
          </div>
        </div>
        {/* <div>
          <Card
            shadow={true}
            className="container mx-auto border border-gray/50"
          >
            <CardBody className="grid grid-cols-1 lg:grid-cols-8 md:gap-10">
              <div className="w-full col-span-4 rounded-lg h-full py-8 p-5 md:p-16 bg-[#8abdfe]">
                <Typography variant="h4" color="white" className="mb-2">
                  Contact Information
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto mb-8 text-base !text-black-500"
                >
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </Typography>
                <div className="flex gap-5 mb-3">
                  <MapPinIcon className="h-6 w-16 text-white" />
                  <Typography
                    variant="h6"
                    color="white"
                    className="mb-2 w-auto"
                  >
                    280 & 281 Shubham Industry, Makana Village – NH # 8, Kamrej
                    Road, Surat - 394150, Gujarat - India
                  </Typography>
                </div>
                <a href={`tel:+919374725058`}>
                  <div className="flex gap-5">
                    <PhoneIcon className="h-6 w-6 text-white" />
                    <Typography variant="h6" color="white" className="mb-2">
                      +91-9374725058
                    </Typography>
                  </div>
                </a>

                <a href={`mailto:info@aquagreen.site`}>
                  <div className="flex my-2 gap-5">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                    <Typography variant="h6" color="white" className="mb-2">
                      info@aquagreen.site
                    </Typography>
                  </div>
                </a>
                <div className="flex mb-10 gap-5">
                  <GlobeAltIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    www.aquagreen.site
                  </Typography>
                </div>
                <div className="flex items-center gap-5">
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-facebook text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-instagram text-lg" />
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <i className="fa-brands fa-github text-lg" />
                  </IconButton>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                <form action="#">
                  <div className="mb-8 grid gap-4 lg:grid-cols-2">
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="First Name"
                      name="first-name"
                      placeholder="eg. Lucas"
                      containerProps={{
                        className: "!min-w-full mb-3 md:mb-0",
                      }}
                    />
                    <Input
                      color="gray"
                      size="lg"
                      variant="static"
                      label="Last Name"
                      name="last-name"
                      placeholder="eg. Jones"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                    />
                  </div>
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Email"
                    name="first-name"
                    placeholder="eg. lucas@mail.com"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />

                  <Textarea
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Your Message"
                    name="first-name"
                    containerProps={{
                      className: "!min-w-full mb-8",
                    }}
                  />
                  <div className="w-full flex justify-end">
                    <Button
                      className="w-full md:w-fit bg-[#8abdfe]"
                      color="gray"
                      size="md"
                    >
                      Send message
                    </Button>
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>
        </div> */}
        <div className="relative isolate bg-white bg-opacity-30 backdrop-blur-xl gd_image1 shadow-xl ">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  ring-1 ring-gray-900/10 lg:w-1/2">
                  <svg
                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                        width="200"
                        height="200"
                        x="100%"
                        y="-1"
                        patternUnits="userSpaceOnUse"
                      >
                        <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill="white"
                    ></rect>
                    <svg
                      x="100%"
                      y="-1"
                      className="overflow-visible fill-gray-50"
                    >
                      <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                    </svg>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                    ></rect>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#00b300]">
                  Get in touch
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  {/* Get in touch with us! We value your feedback and inquiries.
                  Contact our dedicated team for prompt assistance. We're here
                  to help! */}
                </p>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  <div className="flex gap-x-4">
                    <Mail />
                    <dd className="text-base text-gray-600 leading-6">
                      <a
                        className="hover:text-gray-900"
                        href="mailto:one@legaliser.com"
                      >
                        one@legaliser.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPin />
                    </dt>
                    <dd className="text-base text-gray-600 leading-6">
                      19702 Newark,
                      <br />
                      Delaware, USA
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold leading-6 text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="firstName"
                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
                        required
                        placeholder="First name"
                        type="text"
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold leading-6 text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="lastName"
                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
                        required
                        placeholder="Last name"
                        type="text"
                        name="lastName"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="email"
                          className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
                          required
                          placeholder="you@company.com"
                          type="email"
                          name="email"
                        />
                      </div>
                    </div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 mt-2.5 text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-3.5">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
                        required
                        placeholder="Leave us a message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    className="transition-all duration-1000 ease-in-out flex items-center gap-2.5 rounded-md bg-gradient-to-br from-[#00b300] to-[#84e984] px-4 py-2 text-base font-semibold text-white shadow-sm hover:bg-opacity-75 w-full justify-center text-center"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
