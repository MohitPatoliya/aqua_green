"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronDown } from "lucide-react";

const data = [
  {
    name: "AQUA GREEN",
    decs: "The manufacturing of AQUA GREEN packaged drinking water involves multiple levels of stringent filtration processes and tests before it’s served to our customers. Chlorination - Reduces the microbial load in the feed water. Pressure Sand Filter – Removes all the suspended solids and particles, bringing the water substantial clarity. Activated Carbon Filtration - Removes contaminants like color, odor, and various other organic impurities by absorption. Bag Filter - Removes fine particles, to control the load on micron filters.",
  },
  {
    name: "WHO WE ARE",
    decs: "AQUA GREEN is leading the packaged drinking water manufacturer and supplier in the Western part of India.AQUA GREEN has a pure and refreshing taste, which can be attributed to its unique arrangement of minerals and trace elements.We start with the Local water supply, which is then filtered by reverse osmosis to remove impurities. The purified water is then enhanced with a special blend of minerals for the pure, crisp, fresh water taste that’s delightfully AQUA GREEN.",
  },
  {
    name: "Quality Process",
    decs: "Water is carefully collected and received through stainless steel pipes from a local well. Quality testing of the original source is conducted regularly to monitor for abnormalities. A water softener is used to reduce water hardness. Demineralization removes unwanted minerals (through reverse osmosis or distillation).Water received in storage tanks is monitored on a daily basis.",
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSecond, setIsVisibleSecond] = useState(false);
  const [isIndex, setIsIndex] = useState(0);
  const [color, setColor] = useState("#81d4fa");
  const animationRef = useRef(null);
  const animationRef2 = useRef(null);
  const imageArr = [
    {
      img: "/bottle4.png",
      style: { boxShadow: "#81d4fa 20px 60px 200px inset" },
    },
    {
      img: "/edit-second.png",
      style: { boxShadow: "#c8e6c9 0px 0px 150px 60px inset" },
    },
    {
      img: "/edit-third.png",
      style: { boxShadow: "#b39ddb 20px 60px 200px inset" },
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
        case 0:
          setColor("#52c3f7");
          break;
        case 1:
          setColor("#4bb84b");
          break;
        case 2:
          setColor("#b39ddb");
          break;

        default:
      }
    },
    // cssEase: "linear",
  };

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
    <div className="gd_image">
      <div className="sm:px-8 px-4  max-w-8xl mx-auto overflow-x-hidden ">
        <div
          ref={animationRef}
          className={`container mx-auto mb-20 text-center  ${
            isVisible
              ? " animate__animated  animate__fadeInRight  visible"
              : "invisible"
          } `}
        >
          <Typography
            color="blue-gray"
            className="mb-2 mt-14 text-[#00b300] xl:text-6xl md:text-3xl text-xl font-bold text-center uppercase"
          >
            Packaged Mineral Drinking Water
          </Typography>
          <div className="mx-auto w-full lg:w-10/12 md:text-xl text-sm mt-5 !font-sans !text-gray-700">
            AQUA GREEN is leading the packaged drinking water manufacturer and
            supplier in the Western part of India.AQUA GREEN has a pure and
            refreshing taste, which can be attributed to its unique arrangement
            of minerals and trace elements.We start with the Local water supply,
            which is then filtered by reverse osmosis to remove impurities. The
            purified water is then enhanced with a special blend of minerals for
            the pure, crisp, fresh water taste that’s delightfully AQUA GREEN.
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-5">
          <div className="lg:w-1/2 w-full ">
            <Slider {...settings}>
              {imageArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" lg:relative   md:relative   md:z-0   lg:z-0 w-full h-full flex flex-col lg:flex-row justify-center items-center bg-gray-50  animate__animated animate__fadeInLeft  -translate-x-8 lg:-translate-x-12"
                  >
                    <div
                      className="w-full flex justify-center lg:justify-start"
                      style={item.style}
                    >
                      <img
                        src={item.img}
                        className="w-3/4 lg:w-full h-auto !object-cover"
                        alt="Aqua Green Bottle"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="flex lg:w-1/2 w-full flex-col gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white md:p-8 p-4 w-full rounded-lg transition-transform bg-opacity-40 backdrop-blur-md"
                onClick={() => setIsIndex(index === isIndex ? null : index)}
              >
                <div className="flex w-full items-center">
                  <span
                    className="md:text-xl text-base font-semibold "
                    style={{ color: color }}
                  >
                    {item?.name}
                  </span>
                  <span
                    className={`ml-auto transition-transform duration-300 ${
                      isIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown
                      style={{ color: color }}
                      className="md:!text-2xl !h-7 !w-7 !font-bold"
                    />
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-trasform duration-[1500ms] ease-in-out ${
                    isIndex === index ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  {index === isIndex && (
                    <div className="mt-5 opacity-100 transition-opacity duration-300 md:text-lg text-sm font-sans text-gray-700">
                      {item?.decs}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div ref={animationRef2} className={`container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 ${isVisibleSecond ? ' animate__animated  animate__fadeInLeft  visible' : 'invisible'}`}>
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default Skills;
