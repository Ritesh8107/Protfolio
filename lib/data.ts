import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated High School and Enrolled in B.Tech",
    location: "Poornima College of Engineering, Jaipur, India",
    description:
      "Started my Bachelor's in Information Technology, learning fundamentals in programming, data structures, and computer systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present (Expected Graduation: 2025)",
  },
  {
    title: "Python Developer & Prompt Engineer Intern",
    location: "Requin Solutions PVT LTD, Jaipur",
    description:
      "Engineered prompts for LLMs to automate marketing reports, built Python POCs for customer behavior data, integrated candidate profile data, and contributed to SEO and Gen AI projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Jun 2024",
  },
  {
    title: "Front-End Developer Intern",
    location: "Requin Solutions PVT LTD, Jaipur",
    description:
      "Developed reusable React components improving load times by 35%, integrated REST APIs, and collaborated in an Agile team with UI/UX designers and backend developers.",
    icon: React.createElement(FaReact),
    date: "Jun 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "SQL",
  "Power BI",
  ".NET Core",
  "REST APIs",
  "Firebase",
  "AWS",
  "Microsoft Azure",
  "Machine Learning",
  "Prompt Engineering",
  "Framer Motion",
] as const;
