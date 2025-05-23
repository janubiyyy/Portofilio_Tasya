"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDocker,
  FaVuejs,
  FaGitlab,
  FaJenkins,
  FaJira,
} from "react-icons/fa";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiTypescript,
  SiNuxtdotjs,
  SiNextui,
  SiAntdesign,
  SiVuetify,
  SiPython,
  SiMicrosoft,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I am Tasya Khaerani Janubiya, an enthusiastic and dedicated software developer with a passion for creating innovative and user-friendly websites. My journey in the technology industry has been characterized by continuous learning and a commitment to excellence. I am always eager to take on new challenges and contribute to impactful projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tasya Khaerani Janubiya",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 857 7194 2063",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Indonesia",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "As an experienced Front-End Web Developer, I excel in building dynamic, scalable, and user-focused web applications. With a solid foundation in responsive design, I have refined my skills through diverse projects, from optimizing website performance to creating seamless and intuitive user experiences. My passion for modern web technologies enables me to deliver solutions that not only meet user expectations but also contribute to business success.",
  items: [
    {
      company: " PT Mitra Integrasi Informatika ",
      position: "Front End Developer (for Jasa Marga) ",
      duration: "Jan 2025-present",
    },
    {
      company: "PT Penerbit Erlangga Group",
      position: "Front End Website Developer",
      duration: "Aug 2022-Jan 2025",
    },
    {
      company: "PT.Sociolla Bella Indonesia",
      position: "Team Leader",
      duration: "Aug 2021-Aug 2022",
    },
    {
      company: "PT.Smart Computer Indo",
      position: "Admin Purchasing",
      duration: "Jan 2021 - Jun 2021",
    },
    {
      company: "PT.Midi Utama Indoensia Tbk",
      position: "Cashier ",
      duration: "Sep 2019 - Sep 2020",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My academic journey in Informatics has provided me with a solid foundation in computer science and software engineering. This education has been pivotal in developing my technical skills and understanding of the latest industry trends.",
  items: [
    {
      institution: "Universitas Nasional",
      degree: "Information Systems",
      duration: "Aug 2018 - Feb 2022",
    },
    {
      institution: "SMK Negeri 27 Jakarta",
      degree: "",
      duration: "Jun 2015-Jul 2018",
    },
    {
      institution: "SMP Negeri 273 Jakarta",
      degree: "",
      duration: "Jun 2012-Jun 2015",
    },
    {
      institution: "SD Negeri Pancoran 05",
      degree: "",
      duration: "Jun 2006-Jun 2012",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Proficient in a variety of programming languages and frameworks, I excel in developing mobile and web applications. My technical skills are complemented by strong problem-solving abilities, effective teamwork, and excellent communication.",
  skillList: [
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue Js",
    },
    {
      icon: <SiNuxtdotjs />,
      name: "Nuxt Js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiNextui />,
      name: "MUI",
    },
    {
      icon: <SiAntdesign />,
      name: "Ant design",
    },
    {
      icon: <SiVuetify />,
      name: "Vuetify",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
    {
      icon: <FaGitlab />,
      name: "Gitlab",
    },

    {
      icon: <FaJenkins />,
      name: "Jenskin",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <FaJs />,
      name: "Java script",
    },
    {
      icon: <SiTypescript />,
      name: "Type script",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    // {
    //   icon: <img src={'/assets/skills/Official_unity_logo.png'} alt="Unity" width="32" height="32" />,
    //   name: "Unity",
    // },
    // {
    //   icon: (
    //     <Image
    //       src={"/assets/skills/Odoo.png"}
    //       alt="Odoo"
    //       className="object-contain"
    //       quality={100}
    //       fill
    //     />
    //   ),
    //   name: "Odoo",
    // },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience?.title}</h3>
                {/* <h1 className="text-4xl font-bold">{experience?.title}<h1/> */}
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item?.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item?.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60">{item?.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education?.title}</h3>
                {/* <h1 className="text-4xl font-bold">{experience?.title}<h1/> */}
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education?.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item?.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item?.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                            <p className="text-white/60">{item?.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills?.title}</h3>
                  <p classname="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills?.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
