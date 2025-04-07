"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Website JasaMarga Toll Collection Managemnet System ",
    title: "Jasamarga Tcm ",
    description:
      "Developed and maintained an internal web portal for Jasa Marga's Toll Collection Management System (TCMS), improving operational efficiency with a responsive Next.js + TypeScript application. Implemented a real-time traffic monitoring dashboard with dynamic data visualization for enterprise use. Optimized CI/CD workflows using Jenkins and GitBucket to streamline deployments and maintenance.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Jenkins" },
      { name: "BitBucket" },
    ],
    image: "/assets/work/jasamarga-tcm.png",
    live: "https://tcm.jasamarga.co.id/",
    github: "",
  },
  {
    num: "02",
    category: "Website Jaja ID ",
    title: "Jaja ID",
    description:
      "Jaja.id is one of the first Hobby Marketplaces in Indonesia which provides buying and selling facilities from consumer to consumer. Everyone can open an online shop at Jaja.id and serve buyers from all over Indonesia to help fulfill the hobby needs of the Indonesian people.",
    stack: [
      { name: "Vue js" },
      { name: "Vuex" },
      { name: "Flickity" },
      { name: "Boostrap Vue" },
      { name: "Firebase" },
    ],
    image: "/assets/work/jajaid.png",
    live: "https://jaja.id/",
    github: "",
  },
  {
    num: "03",
    category: "Website Jaja Auto ",
    title: "Jaja Auto",
    description:
      "Jaja Auto is a company in the Automotive Sales sector that facilitates New Car, Used Car, Trade in. We strive to provide the best quality service, with a wide selection of quality cars for you",
    stack: [
      { name: "Vue Js" },
      { name: "Vuetify" },
      { name: "Flickity" },
      { name: "Boostrap Vue" },
    ],
    image: "/assets/work/jatoo.png",
    live: "https://auto.jaja.id/",
    github: "",
  },
  {
    num: "04",
    category: "Website Eureka Book House",
    title: "Eureka Book House",
    description:
      "We make it easy for you to buy all products related to Books, ATK, Lifestyle, Toys & Hobbies, Sports & Outdoors and Handmade, just by accessing the Eurekabookhouse.co.id site.",
    stack: [
      { name: "Vue" },
      { name: "Vuex" },
      { name: "Vue Boostrap" },
      { name: "Flickity" },
      { name: "Lodash" },
    ],
    image: "/assets/work/ebhhh.png",
    live: "https://eurekabookhouse.com/",
    github: "",
  },
  {
    num: "05",
    category: "Website CMS Katarasa",
    title: "Katarasa",
    description:
      "website administrator to manage and monitor systems or applications. It provides an overall view of important data and statistics, as well as tools for performing administrative actions.",
    stack: [
      { name: "React" },
      { name: "Antd" },
      { name: "Tailwind" },
      { name: "Vite" },
    ],
    image: "/assets/work/katras.png",
    live: "https://nimda.katarasa.id/auth/signin/",
    github: "",
  },
  {
    num: "06",
    category: "Website CMS Eureka Book House",
    title: "Eureka Book House Admin",
    description:
      "Developed a custom CMS for Eureka Book House to manage book inventory, sales data, and user accounts. The platform provides real-time analytics, order tracking, and content management tools, streamlining backend operations for the bookstore.",
    stack: [
      { name: "React" },
      { name: "Ant Design" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
    ],
    image: "/assets/work/eureka-book-house.png",
    live: "https://dashboard.eurekabookhouse.com/",
    github: "",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{
        opacity: 0,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[365px] relative group flex justify-center items-center bg-transparent">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="xl:object-contain sm:object-cover md:object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
