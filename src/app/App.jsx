import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BsMoon, BsSun } from "react-icons/bs";
import clsx from "clsx";
import cv from "../assets/files/Ritesh Kumar Singh-PCE21IT044.pdf";

// Corrected import path
import ParticleBackground from "../common/components/ParticleBackground/ParticleBackground";

// Import Style
import style from "./App.module.css";

// Import Icons
import { FaReact, FaMobileAlt } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineEye,
} from "react-icons/ai";
import {
  BiLogoGmail,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoJava,
} from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";

// Import Images
import Ataa from "../assets/images/Ataa.png";
import GlobalShare from "../assets/images/GlobalShare.png";
import SokoNumber from "../assets/images/SokoNumber.png";

// --- Helper Components & Hooks ---
const Loader = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    stroke="var(--color-primary-start)"
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(1 1)" strokeWidth="2">
        <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);
const useIntersectionObserver = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);
  return [setRef, isVisible];
};
const AnimateOnScroll = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={clsx(style.animated, { [style.visible]: isVisible })}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// --- Data Arrays ---
const skills = [
  { name: "HTML 5", icon: <AiFillHtml5 size="22px" /> },
  { name: "CSS 3", icon: <BiLogoCss3 size="22px" /> },
  { name: "JavaScript", icon: <BiLogoJavascript size="22px" /> },
  { name: "TypeScript", icon: <SiTypescript size="22px" /> },
  { name: "React", icon: <FaReact size="22px" /> },
  { name: "Redux Toolkit", icon: <BiLogoRedux size="22px" /> },
  { name: "Recoil", icon: <SiRecoil size="22px" /> },
  { name: "React Query", icon: <SiReactquery size="22px" /> },
  { name: "Responsive Design", icon: <FaMobileAlt size="22px" /> },
  { name: "Git", icon: <BsGit size="22px" /> },
  { name: "Java", icon: <BiLogoJava size="22px" /> },
  { name: "C++", icon: <TbBrandCpp size="22px" /> },
  { name: "Problem Solving", icon: <BsPuzzle size="22px" /> },
];
const projects = [
  {
    name: "Global Share",
    link: "https://github.com/Ritesh8107",
    github: "https://github.com/Ritesh8107",
    description:
      "The Global Share ERP System is an innovative web-based application designed to streamline volunteer recruitment, management, and reward systems, enhancing employee engagement and promoting organizational excellence.",
    image: GlobalShare,
  },
  {
    name: `Ata'a`,
    link: "https://github.com/Ritesh8107",
    github: "https://github.com/Ritesh8107",
    description:
      "Ataa is a web application built with React for managing the operations of a charity organization. It includes a landing page and a dashboard for staff to manage projects, employees, and budgets.",
    image: Ataa,
  },
  {
    name: "Soko Number",
    link: "https://github.com/Ritesh8107",
    github: "https://github.com/Ritesh8107",
    description:
      "Soko Number is a puzzle game built with the React framework. The game consists of 6 challenging levels that will test your problem-solving skills, requiring you to move numbered tiles to designated positions.",
    image: SokoNumber,
  },
];

function App() {
  const form = useRef();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark"); // Set dark theme as the initial fallback

  // OPTIMIZATION: This useEffect detects the user's system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme based on system preference
    setTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for changes in system preference
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // This useEffect applies the theme class to the body
  useEffect(() => {
    document.body.className = ""; // Clear previous classes
    document.body.classList.add(theme);
  }, [theme]);

  // UseEffect for Water Ripple Click Effect
  useEffect(() => {
    const createRipple = (event) => {
      const ripple = document.createElement("span");
      ripple.className = style.ripple;
      document.body.appendChild(ripple);
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };
    document.addEventListener("click", createRipple);
    return () => {
      document.removeEventListener("click", createRipple);
    };
  }, []);

  // Manual toggle will override the system preference for the session
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_gjbmeus",
        "template_qk6p0pa",
        form.current,
        "HDMwz57k3xrihLg4J"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={clsx(style.app, style[theme])}>
      <ParticleBackground theme={theme} />
      <header className={style.header}>
        <a href="#hero" className={style.logo}>
          <FaReact color="var(--color-primary-start)" size="40px" />
          <h5>Ritesh Singh</h5>
        </a>
        <nav className={clsx(style.navLinks, { [style.open]: menuOpen })}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
        <div className={style.headerActions}>
          <button
            className={style.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <BsMoon size={20} /> : <BsSun size={20} />}
          </button>
          <button
            className={clsx(style.menuToggle, { [style.active]: menuOpen })}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={style.menuIcon}></span>
          </button>
        </div>
      </header>

      <main>
        <nav className={style.socialNav}>
          <a
            href="https://github.com/Ritesh8107"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <AiFillGithub size="24px" />
          </a>
          <a
            href="https://www.linkedin.com/in/ritesh-singh-8417a7229/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="24px" />
          </a>
          <a href="mailto:2021pceitritesh044@poornima.org" aria-label="Email">
            <BiLogoGmail size="24px" />
          </a>
        </nav>

        <section id="hero" className={style.hero}>
          <div className={style.heroContent}>
            <div className={style.heroHeading}>
              <h1>Hey, I'm Ritesh Singh</h1>
            </div>
            <div className={style.heroSubheading}>
              <p>
                A Frontend-focused Web Developer building the user interface of
                Websites and Web Applications that leads to the success of the
                overall product.
              </p>
            </div>
            <div className={style.heroButtonWrapper}>
              <a
                href={cv}
                download="Ritesh-Singh-CV.pdf"
                className={style.heroButton}
              >
                Download CV
              </a>
            </div>
          </div>
        </section>

        <section id="about" className={`${style.section} ${style.about}`}>
          <div className={style.container}>
            <AnimateOnScroll>
              <h2 className={style.sectionTitle}>About Me</h2>
              <p className={style.sectionSubtitle}>
                Here you will find more information about me, what I do, and my
                current skills in terms of programming and technology.
              </p>
            </AnimateOnScroll>
            <div className={style.aboutContent}>
              <AnimateOnScroll>
                <div className={style.aboutInfo}>
                  <h3>Get to know me!</h3>
                  <p>
                    I'm a <span>Frontend Web Developer</span> building the
                    Front-end of Websites and Web Applications. Check out some
                    of my work in the <span>Projects</span> section.
                  </p>
                  <p>
                    I also like sharing content related to what I've learned in{" "}
                    <span>Web Development</span> to help other people in the Dev
                    Community. Feel free to connect with me on my{" "}
                    <a
                      href="https://www.linkedin.com/in/ritesh-singh-8417a7229/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    .
                  </p>
                  <p>
                    I'm open to <span>Job</span> opportunities where I can
                    contribute, learn and grow. If you have a good opportunity
                    that matches my skills, please don't hesitate to{" "}
                    <span>contact</span> me.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <div className={style.mySkills}>
                  <h3>My Skills</h3>
                  <div className={style.skillsGrid}>
                    {skills.map((skill) => (
                      <div key={skill.name} className={style.skill}>
                        <span className={style.skillIcon}>{skill.icon}</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
        <section id="projects" className={`${style.section} ${style.projects}`}>
          <div className={style.container}>
            <AnimateOnScroll>
              <h2 className={style.sectionTitle}>Projects</h2>
              <p className={style.sectionSubtitle}>
                Here you will find some of the personal projects that I have
                created.
              </p>
            </AnimateOnScroll>
            <div className={style.projectsList}>
              {projects.map((project, index) => (
                <AnimateOnScroll key={index}>
                  <div className={style.project}>
                    <div className={style.projectImage}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={project.image}
                          alt={`${project.name} project screenshot`}
                        />
                      </a>
                    </div>
                    <div className={style.projectInfo}>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className={style.projectButtons}>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${style.projectButton} ${style.liveButton}`}
                        >
                          <AiOutlineEye size="20px" /> Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${style.projectButton} ${style.githubButton}`}
                        >
                          <AiFillGithub size="20px" /> GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className={`${style.section} ${style.contact}`}>
          <div className={style.container}>
            <AnimateOnScroll>
              <h2 className={style.sectionTitle}>Contact</h2>
              <p className={style.sectionSubtitle}>
                Feel free to contact me by submitting the form below and I will
                get back to you as soon as possible.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <form
                ref={form}
                onSubmit={sendEmail}
                className={style.contactForm}
              >
                {loading && (
                  <div className={style.formLoader}>
                    <Loader />
                  </div>
                )}
                <div className={style.formGroup}>
                  <label htmlFor="name" className={style.formLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    className={style.formInput}
                    required
                  />
                </div>
                <div className={style.formGroup}>
                  <label htmlFor="email" className={style.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className={style.formInput}
                    required
                  />
                </div>
                <div className={style.formGroup}>
                  <label htmlFor="message" className={style.formLabel}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Your Message"
                    className={style.formTextarea}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={style.submitButton}
                  disabled={loading}
                >
                  <RiSendPlaneFill size="20px" /> Submit
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      <footer className={style.footer}>
        <div className={`${style.container} ${style.footerContainer}`}>
          <div className={style.footerInfo}>
            <div className={style.footerAbout}>
              <h3>Ritesh Singh</h3>
              <p>
                A Frontend-focused Web Developer building beautiful and
                user-friendly interfaces for websites and web applications.
              </p>
            </div>
            <div className={style.footerSocials}>
              <h3>Social</h3>
              <div className={style.socialLinks}>
                <a
                  href="https://github.com/Ritesh8107"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <AiFillGithub size="24px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-singh-8417a7229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <AiFillLinkedin size="24px" />
                </a>
                <a
                  href="mailto:2021pceitritesh044@poornima.org"
                  aria-label="Email"
                >
                  <BiLogoGmail size="24px" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ritesh-singh-8417a7229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <BsFacebook size="24px" />
                </a>
              </div>
            </div>
          </div>
          <div className={style.copyRight}>
            © Copyright {new Date().getFullYear()}. Made by{" "}
            <span>Ritesh Singh</span>.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
