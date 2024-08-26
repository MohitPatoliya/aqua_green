"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import Inquiry from "@/components/inquiry";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section class=" relative gd_image1">
      <div class="py-8  px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm">
          <h2 class="block antialiased font-sans mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase ">Testimonials</h2>
          {/* <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p> */}
        </div>
        <div className="grid grid-cols-3">
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2 lg:col-span-2 col-span-3">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 bg-opacity-50 backdrop-blur-lg border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Naturally Refreshing</h3>
                <p class="my-4">The aqua green mineral water has a pure, refreshing taste that’s unbeatable.</p>
                <p class="my-4">I love the stylish, eco-friendly bottle design.</p>
                <p class="my-4">I love the stylish, eco-friendly bottle design.</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src="/defaultPerson.jpg" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Hardik Patel</div>
                  {/* <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div> */}
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 bg-opacity-50 backdrop-blur-lg border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Perfect Hydration</h3>
                <p class="my-4">This mineral water tastes incredibly fresh and natural.</p>
                <p class="my-4"> Keeps me feeling hydrated and energized throughout the day.</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src="/defaultPerson.jpg" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Pravin Panchal</div>
                  {/* <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div> */}
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 bg-opacity-50 backdrop-blur-lg border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">High-Quality Water</h3>
                <p class="my-4">The quality of this mineral water is evident in every sip.</p>
                <p class="my-4">The bottle is lightweight and easy to take anywhere.</p>
                <p class="my-4"> It’s perfect for staying hydrated during workouts or outdoor activities.</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <img class="w-9 h-9 rounded-full" src="/defaultPerson.jpg" alt="profile picture" />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Yash Patel</div>
                  {/* <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div> */}
                </div>
              </figcaption>
            </figure>

          </div>
          <div className="lg:col-span-1 col-span-3">
            <Inquiry />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
