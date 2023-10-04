// this component is using interactivity and is not static so it should be renderd in the client.
"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { lora, sourceCodePro400 } from "../font";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul
        className="list-disc pl-2 flex gap-6 flex-wrap"
        style={sourceCodePro400.style}
      >
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          HTML
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          CSS
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          VanilaJS
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          NodeJS
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          Express
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          RectJS
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          NextJS
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          Prisma
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          HandleBars
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          MySQL
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          MongoDB
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul
        className="list-disc pl-2 flex gap-6 flex-wrap"
        style={sourceCodePro400.style}
      >
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          AWS Academy
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          University of Moratuwa, Sri Lanka.
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          Coursera
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul
        className="list-disc pl-2 flex gap-6 flex-wrap"
        style={sourceCodePro400.style}
      >
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          Machine Learning A-Z™: Hands-On Python & R In Data Science
        </li>
        <li className="hover:list-none hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:border-white">
          AWS Academy Cloud Foundations
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="My self"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg font-light" style={lora.style}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications and mobile Applications.
            I have experience working with JavaScript, ReactJS, NextJS, Node.js,
            Express, MySQL, Prisma, HTML, CSS, HandleBars and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications. I also have experience with data
            science and machine learning. I have worked with Python and Pandas.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 flex flex-row">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
