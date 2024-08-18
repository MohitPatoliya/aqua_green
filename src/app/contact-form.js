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
import { Globe, LocateIcon, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);
  const animationRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleSecond(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (animationRef2.current) {
      observer.observe(animationRef2.current);
    }

    return () => {
      if (animationRef2.current) {
        observer.unobserve(animationRef2.current);
      }
    };
  }, []);

  return (
    <>
      <section className="sm:px-8 px-4 py-10 ">
        <div className={`container mx-auto mb-10 text-center max-w-7xl  `}>
          <div
            className={`block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase animate__animated animate__fadeInLeft ${
              isVisible
                ? " animate__animated  animate__fadeInLeft  visible"
                : "invisible"
            }`}
            ref={animationRef}
          >
            Contact Us
          </div>
          <div
            className={`mx-auto w-full lg:w-10/12 md:text-xl text-sm mt-5 !font-sans !text-gray-700 animate__animated animate__fadeInRight ${
              isVisible
                ? " animate__animated  animate__fadeInRight  visible"
                : "invisible"
            }`}
            ref={animationRef}
          >
            Ready to get started? Feel free to reach out through the contact
            form, and let&apos;s embark on a journey of innovation and success.
          </div>
        </div>
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
                  <a href="mailto:one@legaliser.com" className="flex gap-x-4">
                    <Mail />
                    <dd className="text-base text-gray-600 leading-6">
                      <div className="hover:text-gray-900">
                        info@aquagreen.site
                      </div>
                    </dd>
                  </a>
                  <a
                    href="www.aquagreen.site"
                    target="blank"
                    className="flex gap-x-4"
                  >
                    <Globe />
                    <dd className="text-base text-gray-600 leading-6">
                      <div className="hover:text-gray-900">
                        www.aquagreen.site
                      </div>
                    </dd>
                  </a>
                  <div className="flex gap-x-4">
                    <Phone />
                    <dd className="text-base text-gray-600 leading-6">
                      <a
                        className="hover:text-gray-900"
                        href="callto:91-9574057000"
                      >
                        +91-9574057000
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <Phone />
                    <dd className="text-base text-gray-600 leading-6">
                      <a
                        className="hover:text-gray-900"
                        href="callto:+91-9374725058"
                      >
                        +91-9374725058
                      </a>
                    </dd>
                  </div>
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4412.165124639882!2d72.97679317584473!3d21.208600381576286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be047fc6f9fd3b1%3A0xccdc7e590578eabd!2sAqua%20Green%20Mineral%20Water!5e1!3m2!1sen!2sin!4v1723096509636!5m2!1sen!2sin"
                    target="blank"
                    className="flex gap-x-4"
                  >
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPin />
                    </dt>
                    <div className="text-base text-gray-600 leading-6">
                      280 & 281 Shubham Industry, <br />
                      Makana Village – NH # 8, Kamrej Road, <br />
                      Surat - 394150, <br />
                      Gujarat - India
                    </div>
                  </a>
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
                        className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
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
                          className="block w-full rounded-md border transition-all duration-300 border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-1 focus:outline-none ring-0 focus:ring-[#00b300] focus:border-[#00b300] sm:text-sm sm:leading-6"
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
      </section>
    </>
  );
}

export default ContactForm;
