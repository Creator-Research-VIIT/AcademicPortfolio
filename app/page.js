'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiCalendar, FiChevronUp } from "react-icons/fi";
import { Globe, Flag } from "lucide-react";
import { FaDatabase, FaGlobe } from "react-icons/fa";
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import VisitorCounter from '@/components/VisitorCounter';






import {
  motion,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FiAward,
  FiBook,
  FiPenTool,
  FiZap,
  FiMapPin,
  FiCopy,
  FiList,
  FiActivity,
  FiDatabase,
  FiLayers,
  FiBriefcase,
  FiBookOpen,
  FiCode,
  FiCpu,
  FiWifi,
  FiTool,
  FiUsers,
  FiGlobe,
  FiClock,
  FiMic,
  FiExternalLink,
  FiTarget,
  FiUser,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

const fadeZoom = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};



const timeline = [
  {
    icon: <FaGraduationCap />,
    title: 'Ph.D. in Electronics and Communication Engineering',
    description: 'Sri Satya Sai University of Technology & Medical Sciences, Sehore',
    base: 'bg-[#e0f7fa]',
    hover: 'hover:bg-[#b2ebf2]',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Assistant Professor at VIIT Pune',
    description: 'Guiding students and leading innovative research.',
    base: 'bg-[#fce4ec]',
    hover: 'hover:bg-[#f8bbd0]',
  },
  {
    icon: <FaLightbulb />,
    title: '50+ Publications & 20+ Years Experience',
    description: 'Specializing in Computer Network Security, WSN, IoT, AI, and advanced computing.',
    base: 'bg-[#f3e5f5]',
    hover: 'hover:bg-[#ce93d8]',
  },
];

const stats = [
  { label: 'Publications', count: 50, base: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-brown-700' },
  { label: 'Years Experience', count: 20, base: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-brown-700' },
  { label: 'Students Mentored', count: 200, base: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-brown-700' },
  { label: 'Projects Guided', count: 50, base: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-brown-700' },
];


function StatCard({ count, label, base, hover }) {
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { duration: 2 });
  const displayVal = useTransform(springVal, (val) => `${Math.floor(val)}+`);
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) motionVal.set(count);
    else motionVal.set(0);
  }, [inView, count]);

  return (
    <motion.div
      ref={ref}
      variants={fadeZoom}
      initial="hidden"
      animate="visible"
      className={`${base} ${hover} shadow-md p-6 rounded-xl border transition duration-300 hover:shadow-lg hover:scale-105`}
    >
      {/* Main number (count) in bold brown */}
      <motion.div className="text-3xl font-bold text-brown-700">{displayVal}</motion.div>

      {/* Label in softer brown */}
      <div className="text-sm text-brown-500 mt-2">{label}</div>
    </motion.div>
  );

}

const internships = [
  {
    company: "Healthy Globe Smart Virtual Education Pvt. Ltd. (Padhega Bharat)",
    details: "05 Students (FYBTECH Students), Signed MOU",
    link: "https://www.linkedin.com/company/padhegabharat/?originalSubdomain=in"
  },
  {
    company: "Deep Learning Research & Development (DLRD)",
    details: "11 Students (FYBTECH/SYBTECH Students)",
    link: ""
  },
  {
    company: "PrepBytes, Ghaziabad",
    details: "Conducted Online workshop on Competitive Coding for FYBTECH Students",
    link: "https://www.prepbytes.com/"
  },
  {
    company: "PROGO",
    details: "01 Student (SYBTECH Student)",
    link: ""
  },
  {
    company: "Optimum Data Analytics (ODA), Pune",
    details: "Signed MOU, 20 Students (SYBTECH Students), Completed 4 Industrial Projects",
    link: "https://optimumdataanalytics.com/"
  },
  {
    company: "ASIC Networking Services Pvt. Ltd., Pune",
    details: "Signed MOU",
    link: "https://www.linkedin.com/company/asic-networking-services-pte-ltd/?originalSubdomain=in"
  },
  {
    company: "RIMOTE Private Limited, Singapore",
    details: "06 Students (Final Year), 02 Students (Third Year), Signed MOU",
    link: ""
  },
  {
    company: "Code Gurukul, Pune",
    details: "40+ Students (Final Year/SYBTECH/TYBTECH)",
    link: "https://www.linkedin.com/company/code-gurukul/"
  },
  {
    company: "OXVSYS, Pune",
    details: "02 Students",
    link: "https://oxvsys.com/"
  },
  {
    company: "INNOTEK IT SYSTEMS LLP",
    details: "40 Students (FYBTECH Students)",
    link: "https://innoteksystem.com/"
  },
  {
    company: "CREATOR RESEARCH Pvt. Ltd.",
    details: "04 Students (FYBTECH Students)",
    link: "https://creatorresearch.com/"
  },
  {
    company: "Intenics Private Limited, Jabalpur",
    details: "03 Students (FYBTECH Students), Product Development under Internship – 01 Student",
    link: "https://intenics.in/"
  }
];

const industryVisits = [
  { name: "Mag Power, Pune", link: "https://magpowerpune.com/" },
  { name: "Revogreen Technologies Pvt. Ltd., Pune", link: "https://revogreen.in/" },
  { name: "Halliburton, Pune", link: "https://www.halliburton.com/" },
  { name: "H. B. Fuller", link: "https://www.hbfuller.com/" },
  { name: "Intenics Private Limited, Jabalpur", link: "https://intenics.in/" }
];

export default function Home() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsAbout = useAnimation();

  const [refHero, inViewHero] = useInView({ threshold: 0.2 });
  const [refAbout, inViewAbout] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inViewHero) {
      controlsLeft.start('visible');
      controlsRight.start('visible');
    } else {
      controlsLeft.start('hidden');
      controlsRight.start('hidden');
    }
  }, [inViewHero]);

  useEffect(() => {
    if (inViewAbout) {
      controlsAbout.start('visible');
    } else {
      controlsAbout.start('hidden');
    }
  }, [inViewAbout]);

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
    },
  };






  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-amber-100 to-yellow-50 pt-20 md:pt-28 pb-16 md:pb-20 px-6 md:px-12 overflow-hidden"
      >
        {/* Decorative diagonal */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-yellow-200/40 to-transparent transform -skew-x-12" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          {/* Profile */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden backdrop-blur-lg bg-white/40 shadow-2xl border border-amber-200">
              <Image
                src="/profile11.png"
                alt="Dr. Anup Ingle"
                fill
                className="rounded-full object-cover group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-amber-900">Dr. Anup Ingle</h3>
              <p className="text-sm md:text-base text-gray-700">Assistant Professor, Department of E&TC, VIT, Pune, India</p>
              <div className="p-4">

                {/* Use VisitorCounter here */}
                <VisitorCounter />
              </div>
            </div>
          </div>



          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-amber-900 leading-snug mb-6">
              <Typewriter
                words={["Dr. Anup Ingle"]}
                cursor
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={1000}
                loop={1}
              />
              <span className="block mt-2">Assistant Professor, E&TC.</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0 text-justify">
              PhD-qualified expert in Electronics and Communication Engineering with over 20 years of teaching experience, I am dedicated to academic excellence, research, and innovation. Beyond teaching, I actively contribute to driving both professional and personal growth by providing mentorship, branding strategies, and tailored software solutions. My vision is to bridge academia, industry, and technology to create impactful, future-ready solutions.
            </p>
            <Link
              href="/media"
              className="inline-block bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-700 transition"
            >
              Media Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={refAbout}
        className="bg-yellow-50 py-16 px-4 sm:px-8 md:px-20 border-t border-yellow-200 shadow-inner"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.h2
            variants={fadeZoom}
            initial="hidden"
            animate={controlsAbout}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-amber-900 mb-10 sm:mb-14 tracking-wide"
          >
            About Me
          </motion.h2>

          {/* Intro Text */}
          <motion.p
            variants={fadeZoom}
            initial="hidden"
            animate={controlsAbout}
            className="text-base sm:text-lg text-yellow-900 w-full max-w-5xl mx-auto mb-10 sm:mb-14 leading-relaxed text-justify px-2"
          >
            With a strong foundation in computer networks, security, and web development,
            I specialize in data networks, intrusion detection, and prevention of spoofing
            and denial-of-service attacks. Proficient in C, C++, Java, Python, and modern
            web technologies, I also bring expertise in LAN configuration, routing, and
            advanced tools such as Snort, Weka, Tcpdump, and Wireshark. As an educator,
            advisor, and consultant, I guide students and organizations in networks,
            programming, security solutions, and web-based platforms. I have successfully
            delivered courses in computer networks, data structures, programming languages,
            and educational technologies, empowering learners with industry-ready skills.
            Certified in CCNA and ADCHN, I remain committed to continuous learning and
            professional growth. My research interests include intrusion prevention,
            hardware firewalls, IoT-based smart city solutions, cloud computing, and
            AI/ML/DL-driven security systems. With a vision to strengthen digital
            infrastructures, I aim to integrate teaching, research, consulting, and
            development, contributing toward secure, intelligent, and future-ready
            technologies.
          </motion.p>



          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeZoom}
                initial="hidden"
                animate={controlsAbout}
                className="bg-yellow-100 rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 border border-yellow-300 hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-amber-700 text-3xl sm:text-4xl mb-4 sm:mb-5 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-stone-800 text-lg sm:text-xl mb-2 sm:mb-3 text-center">
                  {item.title}
                </h4>
                <p className="text-yellow-900 text-sm sm:text-base leading-relaxed text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mb-16 md:mb-24">
            {stats.map((item, idx) => (
              <StatCard key={idx} {...item} />
            ))}
          </div>

          <motion.div
            variants={fadeZoom}
            initial="hidden"
            animate={controlsAbout}
            className="flex flex-col md:flex-row justify-center items-center md:gap-6 gap-4"
          >
            {/* Email */}
            <a
              href="mailto:anupingle@gmail.com"
              className="flex items-center gap-3 px-8 py-3 bg-amber-600 text-white rounded-full text-lg font-medium shadow hover:bg-amber-700 transition"
            >
              <FaEnvelope size={24} /> Email
            </a>

            {/* WhatsApp */}
            <a
              href="tel:+919325383604"
              className="flex items-center gap-3 px-8 py-3 bg-white border border-amber-600 text-amber-800 rounded-full text-lg font-medium shadow hover:bg-yellow-100 transition"
            >
              <FaPhoneAlt size={24} /> WhatsApp
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dr-anup-ingle-bb56a1148/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-yellow-100 border border-amber-300 text-amber-900 rounded-full text-lg font-medium shadow hover:bg-yellow-200 transition"
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </motion.div>

        </div>
      </section>




      {/* Academic Portfolio Section */}
      <AcademicPortfolio />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

// Academic Portfolio Component
const tabs = [
  { name: 'Overview', icon: <FiList /> },
  { name: 'Interests', icon: <FiLayers /> },
  { name: 'Professional Competencies', icon: <FiCopy /> },
  { name: 'Teaching', icon: <FiBookOpen /> },
  { name: 'Certifications', icon: <FiAward /> },
  { name: 'Invited Talks', icon: <FiUsers /> },
  { name: 'Projects', icon: <FiCpu /> },
  { name: 'Journals', icon: <FiPenTool /> },
  { name: 'Conferences', icon: <FiZap /> },
  { name: 'Books', icon: <FiBook /> },
  { name: 'Intellectual Property', icon: <FiBriefcase /> },

];
const testimonials = {
  industry: [
     {
      name: "Avinash Sawant",
      designation: "Engineering Director, Seagate Technology",
      message: "I have had the pleasure of working with Anup Ingle, Assistant Professor, and his team in building strong industry-academia collaboration. Through his efforts, we have been able to onboard highly skilled interns at Seagate Technology, which has greatly supported our projects.\n\nAnup consistently provides valuable guidance on bridging the gap between college and industry, ensuring students are well-prepared for real-world challenges. His passion for innovation is evident in the way he and his team work on cutting-edge technologies such as Artificial Intelligence, Machine Learning, and Cybersecurity.\n\nOur experience working with Anup has been excellent, and I truly appreciate his dedication, forward-looking mindset, and commitment to nurturing the next generation of talent."
    },
    {
      name: "Dr Mayur Desai",
      designation: "Director, Creator Research Pvt Ltd",
      message: "Dr Anup sir is very friendly, dedicated to his work. Supported and motivated person."
    },
    {
      name: "Milind Kulkarni",
      designation: "HRBP India Lead, H B Fuller India",
      message: "Dr. Anup demonstrates a strong understanding of organizational requirements and provides collaborative support. His expertise and knowledge are highly valued, and he proactively fosters strong working relationships."
    },
    {
      name: "Sujeet Brahmankar",
      designation: "Software Developer, Edtech",
      message: "I had the privilege of working with Dr. Anup Ingle between 2018–2020, during which he mentored us on an edtech project. His strategic guidance, insightful analysis of students’ needs, and ability to provide practical solutions were invaluable in shaping the project’s direction and success. I highly recommend Dr. Ingle for his expertise and impactful mentorship."
    },
    {
      name: "Anurag Shrikhande",
      designation: "Managing Director, SDPL And Intenics Pvt Ltd",
      message: "It was a pleasure to work with Dr. Anup Ingle for our product designing project Smart Water Info. Initially, it was complicated up to the first phase of the technical stage, but his support and knowledge were highly applicable. I wish him a bright future."
    },
    {
      name: "Amresh Khar",
      designation: "Self Employed, Automobiles",
      message: "Mr. Anup is one of the dedicated members in the industry of academia who takes major decisions to accomplish dreams of his students. A person who takes initiative to bridge industry with academic students. In one word — 'Humble'."
    },
    {
      name: "Dr Purabi Garai",
      designation: "Scientist, DRDO",
      message: "Dr Anup is a specialist in the field of Electronics & Communication and is a learned academician. He has been working on various significant projects and nurtures his students to stand in world-level competition. Best wishes."
    }
   
  ],

  students: [
    {
      name: "Yash Rathod",
      designation: "Student, E&TC 2026, Vishwakarma Institute of Information Technology",
      message: "Learning under Anup Sir has been inspiring — his practical insights and constant encouragement push me to think bigger and do better."
    },
    {
      name: "Dr. Rameez Shamalik",
      designation: "Associate Professor, MIT ADTU, E&TC 2008",
      message: "Anup sir being so young and friendly was the breath of fresh air and a 'Go to' person for all of us. His smile and problem-solving attitude made our final year easy and worth remembering."
    },
    {
      name: "Rujuta Mhaskar",
      designation: "Freelance Consultant, BE E&TC 2015",
      message: "We had the privilege of learning under professors like Anup Sir, whose unwavering commitment to teaching consistently stood above all else. His dedication to his students and their academic growth was truly exceptional."
    },
    {
      name: "Purva Sanjay Gaikwad",
      designation: "SDE, Amazon Web Services, BTech Computer Engineering 2022",
      message: "I’m truly grateful to Dr. Anup Ingale from the Computer Science department for his constant guidance and mentorship. His support was instrumental in helping me secure my internship, and his advice has had a lasting impact on my academic and professional growth."
    },
    {
      name: "Abhishek Mallav",
      designation: "Student, ENTC 2027, Vishwakarma Institute of Information Technology",
      message: "Your teaching in networking was truly exceptional. The way you explained the OSI model, the functions of different network layers, and networking concepts in general was both insightful and engaging. Your guidance not only helped me build a strong understanding of how networks operate but also gave me a clearer perspective on how communication happens between devices over the internet. It was an invaluable learning experience."
    },
    {
      name: "Piyush Bali",
      designation: "Senior Software Engineer, eQTechnologic Pvt Ltd, CSE 2022",
      message: "Dr. Anup Ingale was the first to spark my interest in programming. His guidance, encouragement for research, and the platform he created for competitive programming shaped both my skills and confidence. Under his guidance, I was able to create an environment for competitive programming in college."
    },
    {
      name: "Vaishnav Gonare",
      designation: "Cloud Engineer, Glide Clouds, B.Tech E&TC 2025",
      message: "Learning under Dr. Anup Ingle Sir was a truly enriching experience. His teaching style, mentorship, and constant encouragement inspired me to grow both technically and personally."
    },
    {
      name: "Vedant Bhosale",
      designation: "IT Admin, Trade and Retail, BTech IT 2022",
      message: "Dr. Anup Ingle’s teaching and hands-on lab sessions really strengthened my programming skills. His mentorship made tough concepts easy to understand and gave me the confidence to tackle real-world challenges in the industry."
    }
  ],

  collaborators: []
};



function AcademicPortfolio() {
  const [activeTab, setActiveTab] = useState('Overview');
  const fadeZoom = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };


  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 py-20 px-8 md:px-16 font-sans"

    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center text-amber-800 mb-10 tracking-wide"
        >
          Dr. Anup Ingle – Academic Portfolio
        </motion.h1>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <motion.button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 flex items-center ${isActive
                  ? "bg-amber-700 text-white shadow-lg"
                  : "bg-white text-amber-800 border-2 border-amber-300 hover:bg-amber-100"
                  }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-t-4 border-amber-600"
          >
            {activeTab === "Overview" && <Overview />}
            {activeTab === "Interests" && <Interests />}
            {activeTab === "Professional Competencies" && <TechSkills />}
            {activeTab === "Teaching" && <Teaching />}
            {activeTab === "Certifications" && <Certifications />}
            {activeTab === "Invited Talks" && <InvitedTalks />}
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Journals" && <JournalPubs />}
            {activeTab === "Conferences" && <Conferences />}
            {activeTab === "Books" && <Books />}
            {activeTab === "Intellectual Property" && <Patents />}
            {activeTab === "Corporate Connect & Internships" && <IndustryInteraction />}
          </motion.div>
        </AnimatePresence>

        {/* Academic Profiles */}
        <motion.div
          variants={fadeZoom}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-6 my-20"  // ⬅️ adds margin-top & margin-bottom
        >
          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=rz3NE4kAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-amber-600 text-white rounded-full text-lg font-semibold shadow hover:bg-amber-700 transition"
          >
            <SiGooglescholar size={20} />
            Google Scholar
          </a>

          {/* Scopus */}
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=59007402600"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white border border-amber-600 text-amber-800 rounded-full text-lg font-semibold shadow hover:bg-amber-100 transition"
          >
            <FaDatabase size={20} />
            Scopus
          </a>

          {/* Web of Science */}
          <a
            href="https://www.webofscience.com/wos/author/record/HLX-4154-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-yellow-100 border border-amber-300 text-amber-900 rounded-full text-lg font-semibold shadow hover:bg-yellow-200 transition"
          >
            <FaGlobe size={20} />
            Web of Science
          </a>

          {/* ORCID */}
          <a
            href="https://orcid.org/0000-0003-1159-9453 "
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-amber-200 border border-amber-400 text-amber-900 rounded-full text-lg font-semibold shadow hover:bg-amber-300 transition"
          >
            <SiOrcid size={20} />
            ORCID
          </a>
        </motion.div>

      </div>


      <section id="corporate-connect" className="py-16">
        <div className="space-y-10">
          {/* Heading Above Box */}
          <h2 className="text-5xl font-extrabold text-center text-amber-900 mb-14 tracking-wide pt-[23px] pb-[20px]">
            Corporate Connect & Internships
          </h2>

          {/* Box Wrapper */}
          <div className="border border-amber-200 rounded-xl shadow-md p-6 bg-white max-w-6xl mx-auto">

            {/* Industry Internships */}
            <InfoBlock color="amber">
              <SectionWrapper>
                <div className="flex items-center gap-2 mb-3 text-yellow-900">
                  <FiBriefcase size={22} />
                  <span className="font-semibold">Collaborations & Student Internships</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {internships.map((internship, i) => (
                    <div
                      key={i}
                      className="bg-amber-50 border border-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                      <h3 className="font-medium text-yellow-900">{internship.company}</h3>
                      <p className="text-sm text-yellow-800 mt-1">{internship.details}</p>

                      {/* Show link only if provided */}
                      {internship.link && internship.link.trim() !== "" && (
                        <a
                          href={internship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-sm text-amber-700 hover:text-amber-900 hover:underline"
                        >
                          Company Website <FiExternalLink className="ml-1" size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </InfoBlock>

            {/* Industry Visits */}
            <InfoBlock color="amber">
              <SectionWrapper title="Industry Visits Organized">
                <div className="flex items-center gap-2 mb-3 text-yellow-900">
                  <FiMapPin size={22} />
                  <span className="font-semibold">Practical Exposure & Site Visits</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {industryVisits.map((visit, j) => (
                    <div
                      key={j}
                      className="bg-amber-50 border border-amber-200 px-4 py-2 rounded-lg hover:bg-amber-100 transition"
                    >
                      {visit.link && visit.link.trim() !== "" ? (
                        <a
                          href={visit.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-amber-700 hover:text-amber-900 hover:underline"
                        >
                          {visit.name}
                          <FiExternalLink className="ml-1" size={14} />
                        </a>
                      ) : (
                        <span className="text-amber-700">{visit.name}</span>
                      )}
                    </div>
                  ))}
                </div>
              </SectionWrapper>
            </InfoBlock>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 max-w-6xl mx-auto space-y-12">
        {/* Main Heading */}
        <h2 className="text-5xl font-extrabold text-center text-amber-900 mb-14 tracking-wide">
          Testimonials
        </h2>

        {/* Industry Recognition */}
        <InfoBlock color="amber">
          <SectionWrapper title="Industry Recognition">
            <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 rounded-xl p-6 shadow-md overflow-x-auto flex gap-6 custom-scrollbar">
              {testimonials.industry.map((testimonial, i) => (
                <div
                  key={i}
                  className="inline-block min-w-[280px] max-w-sm bg-white border border-amber-200 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-yellow-800 text-sm">{testimonial.message}</p>
                  <p className='font-semibold text-yellow-900 mt-2'>{testimonial.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                    
                    <span className="text-yellow-700 text-xs">{testimonial.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </InfoBlock>

        {/* Student & Alumni Reflections */}
        <InfoBlock color="amber">
          <SectionWrapper title="Student & Alumni Reflections">
            <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 rounded-xl p-6 shadow-md overflow-x-auto flex gap-6 custom-scrollbar">
              {testimonials.students.map((testimonial, i) => (
                <div
                  key={i}
                  className="inline-block min-w-[280px] max-w-sm bg-white border border-amber-200 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-yellow-800 text-sm">{testimonial.message}</p>
                  <p className='font-semibold text-yellow-900 mt-2'>{testimonial.name}</p>
                  <div className="flex items-center gap-2 mt-2">
                   
                    <span className="text-yellow-700 text-xs">{testimonial.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </InfoBlock>

        {/* Collaborator Endorsements */}
        <InfoBlock color="amber">
          <SectionWrapper title="Collaborator Endorsements">
            <div className="mt-4 border-l-4 border-amber-400 bg-amber-50 rounded-xl p-6 shadow-md overflow-x-auto flex gap-6 custom-scrollbar">
              {testimonials.collaborators.map((testimonial, i) => (
                <div
                  key={i}
                  className="inline-block min-w-[280px] max-w-sm bg-white border border-amber-200 rounded-xl p-4 shadow-sm"
                >
                  <p className="text-yellow-800 text-sm">{testimonial.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-semibold text-yellow-900">{testimonial.name}</span>
                    <span className="text-yellow-700 text-xs">{testimonial.designation}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </InfoBlock>

        {/* Scoped scrollbar styles for all 3 blocks */}
        <style jsx>{`
    .custom-scrollbar {
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #f59e0b #fff8e1;
    }
    .custom-scrollbar::-webkit-scrollbar {
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #fff8e1;
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #f59e0b;
      border-radius: 9999px;
      border: 2px solid #fff8e1;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background-color: #d97706;
    }
  `}</style>
      </section>






    </section>



  );



}

/* Section Wrapper */
const SectionWrapper = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold border-l-4 pl-3 border-teal-400">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

/* InfoBlock */
const InfoBlock = ({ color = 'teal', children }) => {
  const colorClasses = {
    teal: 'bg-teal-50 border-teal-200',
    blue: 'bg-blue-50 border-blue-200',
    amber: 'bg-amber-50 border-amber-200',
    purple: 'bg-purple-50 border-purple-200',
    green: 'bg-green-50 border-green-200',
  };

  return (
    <div className={`rounded-lg border p-4 mb-4 ${colorClasses[color] || colorClasses.teal}`}>
      {children}
    </div>
  );
};

// Overview
function Overview() {
  const iconStyle = "text-amber-700";
  const info = [
    {
      icon: <FiBriefcase className={iconStyle} size={28} />,
      title: "Current Position",
      text: "Assistant Professor, Department of Electronics & Telecommunication Engineering",
    },
    {
      icon: <FiBookOpen className={iconStyle} size={28} />,
      title: "Education",
      text: "Ph.D. in Electronics & Communication Engineering",
    },
    {
      icon: <FiClock className={iconStyle} size={28} />,
      title: "Experience",
      text: "20+ years teaching experience\n1+ year industry experience",
    },
    {
      icon: <FiTarget className={iconStyle} size={28} />,
      title: "Research Focus",
      text: "FLOW-BASED PATTERN MATCHING APPROACH TO MITIGATE THE DENIAL OF SERVICE ATTACK ON COMMUNICATION NETWORK ",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Professional Profile */}
      <SectionWrapper
        title={
          <span className="text-amber-900 text-2xl font-bold">
            Professional Profile
          </span>
        }
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {info.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-white border border-amber-100 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-amber-900 mb-1">
                {item.title}
              </h3>
              <p className="text-stone-700 text-sm whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Professional Summary */}
      <SectionWrapper
        title={
          <span className="text-amber-900 text-2xl font-bold">
            Professional Summary
          </span>
        }
      >
        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <p className="text-base text-stone-800 leading-relaxed text-justify">
            Dr. Anup Ingle is an accomplished academic and researcher with expertise in computer networks,
            security, and IoT. His research focuses on intrusion detection systems, DDoS attack mitigation,
            and network anomaly detection. With extensive experience in both academia and industry, he has
            published numerous papers in reputed journals and conferences, authored several textbooks, and
            actively contributes to student development through industry collaborations and internships.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}



// Interests - Card-based Design
function Interests() {
  const researchInterests = [
    'Intrusion Detection and Prevention Systems (IDS/IPS) using tools such as Snort',
    'Detection and mitigation of Denial of Service (DoS) attacks (ICMP, UDP, TCP SYN, IP Spoofing, ARP Poisoning)',
    'Offline and Online Solutions for Network Attack Prevention',
    'Data Mining Techniques (using Weka) for Network and Cloud Security',
    'Routing Protocols and Router Configuration for Secure Communication',
    'Design and Development of Hardware Firewalls for Comprehensive Network Protection',
    'IoT-based Smart City Applications with Cloud Computing Integration',
    'Application of Artificial Intelligence, Machine Learning, and Deep Learning (Python-based) for Network Security and IoT Solutions'
  ];

  const teachingInterests = [
    'Computer Networks',
    'Telecommunication Switching and Systems',
    'Management Information System',
    'Computer Networks and Security',
    'Mobile Communication',
    'Computer Fundamentals/Programming (C, C++, Embedded C)',
    'Data Structure and Algorithm'
  ];
  const areaofInterests = [
    ' Computer Networks and Security',
    'Data Communication and Networking',
    'Programming Languages (C, C++, Python)',
    'Internet of Things (IoT) and Smart City Applications',
    'Cloud Computing',
    'Educational Technology and Interactive Online Learning Platforms'

  ]

  const InterestCard = ({ icon: Icon, title, items }) => (
    <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-amber-100 rounded-full text-amber-800 shadow">
          <Icon size={20} />
        </div>
        <h3 className="font-semibold text-lg text-amber-900">{title}</h3>
      </div>
      <ul className="space-y-2 text-stone-700">
        {items.map((interest, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-amber-700 mt-1">•</span>
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Research & Teaching Interests in Grid */}
      <SectionWrapper
        title={<span className="text-amber-900 text-2xl font-bold">Interests</span>}
      >
        <div className="grid md:grid-cols-1 gap-8">
          <InterestCard icon={FiBookOpen} title="Areas Of Interest" items={areaofInterests} />
          <InterestCard icon={FiCpu} title="Research Interests" items={researchInterests} />

        </div>
      </SectionWrapper>

      {/* Ultimate Goal */}
      <SectionWrapper
        title={<span className="text-amber-900 text-2xl font-bold">Ultimate Research Goal</span>}
      >
        <div className="bg-gradient-to-r from-amber-50 to-yellow-100 border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-amber-600 text-white rounded-full shadow">
              <FiTarget size={20} />
            </div>
            <h3 className="font-semibold text-lg text-amber-900">Long-Term Vision</h3>
          </div>
          <p className="text-stone-800 text-base leading-relaxed">
            To <span className="font-semibold text-amber-800">Design Hardware Firewall</span>
            to prevent networks from various attacks.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}



// Technical Skills - Grid Cards
function TechSkills() {
  const sections = [
    {
      title: "Network Skills",
      icon: FiWifi,
      color: "bg-yellow-50 border-yellow-200",
      items: [
        "LAN Configuration",
        "Switch and Router Configuration",
        "Network Programming",
        "Internet Traffic Monitoring (Tcpdump, Wireshark)"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      color: "bg-amber-50 border-amber-200",
      items: [
        "Snort (Intrusion Detection System)",
        "Weka (Data Mining)",
        "hping3 (Network Testing)",
        "Network Monitoring Tools"
      ]
    },
    {
      title: "Programming Languages",
      icon: FiCode,
      color: "bg-yellow-50 border-yellow-200",
      items: ["C, C++", "Java", "Python", "Embedded C"]
    },
    {
      title: "Other Technical Skills",
      icon: FiCpu,
      color: "bg-amber-50 border-amber-200",
      items: ["Website Development", "IoT System Design", "Machine Learning Implementation"]
    }
  ];

  const SkillCard = ({ section }) => (
    <div
      className={`rounded-xl shadow-sm border p-6 hover:shadow-md transition ${section.color}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-800 rounded-full shadow">
          <section.icon size={20} />
        </div>
        <h3 className="font-semibold text-lg text-amber-900">{section.title}</h3>
      </div>

      {/* Skills as tags */}
      <div className="flex flex-wrap gap-2">
        {section.items.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-white border border-amber-200 rounded-full text-stone-700 hover:bg-amber-100 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <SectionWrapper
      title={<span className="text-amber-900 text-2xl font-bold">Professional Competencies</span>}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, idx) => (
          <SkillCard key={idx} section={section} />
        ))}
      </div>
    </SectionWrapper>
  );
}


// Teaching - Minimal Professional (Amber Borders)
function Teaching() {
  const coursesTaught = [
    'Computer Networks and Security',
    'Telecommunication Switching and Systems',
    'Management Information System',
    'Object Oriented Programming',
    'Operating System',
    'Mobile Communication',
    'Computer Fundamentals/Programming (C, C++, Embedded C)',
    'Data Structure and Algorithm'
  ];

  const projectGuidance = [
    'BE/BTech Final Year Projects: 30+',
    'BE/BTech Third Year Projects: 20+',
    'BE/BTech Second Year Projects: 20+',
    'FY BTech Project-Based Learning: 700+'
  ];

  return (
    <div className="space-y-12">
      {/* Courses Taught */}
      <SectionWrapper title="Courses Taught">
        <div className="border border-[#FFC107] rounded-xl bg-[#FFFDF7] shadow-sm p-6">
          <h3 className="text-[#5C2E00] text-lg font-bold mb-4 flex items-center gap-2">
            <FiBookOpen /> Subjects & Topics
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {coursesTaught.map((course, idx) => (
              <li
                key={idx}
                className="px-3 py-2 bg-[#FFF8E1] border border-[#FFC107] rounded-md text-[#4E342E]"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Project Guidance */}
      <SectionWrapper title="Project Advisory Role">
        <div className="border border-[#FFC107] rounded-xl bg-[#FFFDF7] shadow-sm p-6">
          <h3 className="text-[#5C2E00] text-lg font-bold mb-4 flex items-center gap-2">
            <FiUsers /> Mentorship & Supervision
          </h3>
          <ul className="space-y-3">
            {projectGuidance.map((proj, idx) => (
              <li
                key={idx}
                className="px-3 py-2 border-l-4 border-[#FFC107] bg-[#FFF8E1] rounded text-[#4E342E]"
              >
                {proj}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </div>
  );
}



// Certifications
function Certifications() {
  const certs = [
    {
      name: "Advanced Diploma in Computer Hardware and Networking (ADCHN)",
      details: "Jetking, Noida | First Class (66.00%)",
      link: "https://www.linkedin.com/school/jetkingnoida/",
      linkText: "Jetking Website",
      provider: "Jetking",
      year: "2001"
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      details: "Score: 100%",
      link: "https://www.linkedin.com/company/cisco/",
      linkText: "About CCNA",
      provider: "Cisco",
      year: "2007"
    },
    {
      name: "ICSI | CNSS Certified Network Security Specialist",

      link: "https://www.linkedin.com/company/defensityone-uk/",
      linkText: "DefenseityOne Website",
      provider: "DefensityOne",
      year: "2020"
    },

    {
      name: "Programming for Everybody (Getting Started with Python)",

      link: "https://www.coursera.org/account/accomplishments/certificate/KXR9P4WEUAVL",
      linkText: "Certificate",
      provider: "Coursera",
      year: "2020"
    },
    {
      name: "Python 3 Network Programming ",

      link: "https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.India_dev.&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=&utm_content=deal4584&utm_term=_._ag_133043842301_._ad_595460368494_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9062116_._pd__._&matchtype=b&gad_source=1&gad_campaignid=17099057432&gbraid=0AAAAADROdO0GaqhjFQO640YVzppCTf0cH&gclid=Cj0KCQjw8KrFBhDUARIsAMvIApYmHgafx-tvtp9-BQ62pL5_fFCC9SYGc_qaWts1LyJvG8FIQWP0JisaAtYwEALw_wcB",
      linkText: "Udemy Website",
      provider: "Udemy",
      year: "2020"
    }


  ];

  return (
    <SectionWrapper title="Professional Certifications">
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#FFF8E1] border border-[#FFE082] rounded-lg p-6 shadow-sm hover:shadow-md transition group min-h-[200px] flex flex-col justify-between"
          >
            {/* Year Badge */}
            <span className="absolute top-3 right-3 bg-[#FFE082] text-[#5C2E00] text-xs font-semibold px-3 py-0.5 rounded-full shadow-sm">
              {cert.year}
            </span>

            <div>
              {/* Icon + Title */}
              <div className="flex items-center mb-3">
                <FiAward className="text-[#5C2E00] mr-2 flex-shrink-0" size={24} />
                <h3 className="font-semibold text-[#3E2723] text-lg">{cert.name}</h3>
              </div>

              {/* Details */}
              <p className="text-sm text-[#4E342E] mb-1">{cert.details}</p>
              <p className="text-xs text-[#6D4C41] mb-2">Provider: {cert.provider}</p>
            </div>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#5C2E00] hover:underline text-sm mt-3"
            >
              {cert.linkText} <FiExternalLink className="ml-1" size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}


// Invited Talks
function InvitedTalks() {
  const talks = [
    {
      college: "Bharti Vidyapeeth Women's College of Engineering, Pune",
      topic: "Computer Network",
      link: "https://coewpune.bharatividyapeeth.edu/"
    },
    {
      college: "Trinity College of Engineering and Research, Pune",
      topic: "Computer Network and Architecture",
      link: "https://www.kjei.edu.in/tcoer/"
    }
  ];

  return (
    <div className="space-y-8">
      <InfoBlock color="amber">
        <SectionWrapper title="Guest Lectures">
          <div className="flex items-center gap-2 mb-4 text-amber-900">
            <FiMic size={22} />
            <span className="font-semibold">Invited Talks & Sessions</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {talks.map((talk, index) => (
              <div
                key={index}
                className="bg-yellow-100 border border-amber-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-stone-800">{talk.college}</h3>
                <p className="text-sm text-stone-700 mt-1">
                  <span className="font-medium text-amber-900">Topic:</span> {talk.topic}
                </p>
                <a
                  href={talk.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 hover:underline inline-flex items-center mt-2 text-sm"
                >
                  College Website <FiExternalLink className="ml-1" size={14} />
                </a>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </InfoBlock>
    </div>
  );
}


// Project

function Projects() {
  // Skills
  const skills = [
    "IoT & Embedded Systems",
    "AI & Machine Learning",
    "Cybersecurity",
    "Wireless Sensor Networks",
    "Blockchain",
    "Edge & Cloud Computing",
    "Academic Research",
    "Technical Mentoring",
  ];

  // Projects
  const projects = [
    {
      title: "Smart IoT Security System",
      shortDescription:
        "An AI-powered intrusion prevention system for IoT devices in smart cities.",
      type: {
        label: "Industry Sponsored",
        company: "TechSecure Pvt Ltd",
        url: "https://techsecure.com",
      },
      image: "/images/iot-project.jpg",
      testimonial:
        "This collaboration provided us with groundbreaking solutions in IoT security. – CTO, TechSecure Pvt Ltd",
      ytLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      linkedinPost: "https://www.linkedin.com/posts/example",
      skills: ["IoT & Embedded Systems", "Cybersecurity", "AI & Machine Learning"], // 👈 linked to skills
    },
    {
      title: "Network Monitoring Dashboard",
      shortDescription:
        "In-house project developing real-time visualization tools for network administrators.",
      type: { label: "In-House" },
      image: "/images/dashboard.jpg",
      testimonial:
        "This tool greatly simplified our monitoring process and reduced downtime. – Internal Team",
      skills: ["Edge & Cloud Computing", "Cybersecurity"], // 👈 linked to skills
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(null);

  // Filter projects based on selected skill
  const filteredProjects = selectedSkill
    ? projects.filter((proj) => proj.skills.includes(selectedSkill))
    : projects;

  return (
    <div className="space-y-12">
      {/* Skills */}
      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedSkill(skill)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
        cursor-pointer px-5 py-2 sm:px-7 sm:py-3 rounded-full shadow-md text-sm sm:text-base font-medium
        transition-all duration-300 relative
        ${selectedSkill === skill
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-lg"
                : "bg-yellow-100 text-amber-900 hover:bg-yellow-200 hover:shadow-lg"
              }
      `}
          >
            {/* Decorative glow when active */}
            {selectedSkill === skill && (
              <span className="absolute inset-0 rounded-full ring-2 ring-amber-500 animate-pulse"></span>
            )}

            <span className="relative z-10">{skill}</span>
          </motion.div>
        ))}

        {selectedSkill && (
          <button
            onClick={() => setSelectedSkill(null)}
            className="ml-4 text-base font-semibold text-red-600 hover:text-red-800 underline"
          >
            ✕ Clear
          </button>
        )}
      </div>


      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-[#FFF8E1] border border-[#FFC107] rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#5C2E00]">{proj.title}</h3>
              {proj.shortDescription && (
                <p className="text-[#4E342E] text-sm leading-relaxed">
                  {proj.shortDescription}
                </p>
              )}

              {proj.type && (
                <p className="text-sm font-medium text-[#8D6E63]">
                  {proj.type.label}
                  {proj.type.url && (
                    <a
                      href={proj.type.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D35400] ml-2 hover:underline inline-flex items-center"
                    >
                      {proj.type.company} <FiExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </p>
              )}

              {proj.testimonial && (
                <blockquote className="text-sm italic text-[#6D4C41] border-l-4 border-[#FFC107] pl-3">
                  {proj.testimonial}
                </blockquote>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                {proj.ytLink && (
                  <a
                    href={proj.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:underline"
                  >
                    YouTube
                  </a>
                )}
                {proj.linkedinPost && (
                  <a
                    href={proj.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500">No projects found for this skill.</p>
      )}
    </div>
  );
}



function JournalPubs() {
  const [openIndex, setOpenIndex] = useState(null);

  const publications = [
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "Mohnish Awade, A. W. Ingle",
      journal: "International Journal of Research in Computer Science & Information Technology (IJRCSIT)",
      details: "ISSN: 2319-5010, Vol 1, Issue 1(A), 2013",
      link: "https://ijrcsit.com/",
      type: "international",
    },
    {
      title: "Intrusion Detection for TCP-SYN Flood Attack",
      authors: "Mohnish Awade, A. W. Ingle",
      journal: "International Journal of Advanced Research in Computer Science (IJARCS)",
      details: "Vol 4, No 5, 2013",
      link: "https://ijarcs.info/index.php/Ijarcs/issue/view/47",
      type: "international",
    },
    {
      title: "Update on Next Generation Network Attacks — A review",
      authors: "Ahmed; Shaikh; Ingle; et al.",
      journal: "International Journal of Electrical, Electronics & Computer Systems (IJEECS)",
      details: "ISSN: 2347-2820, Vol 3, Issue 4, 2015",
      link: "https://ijecs.in/",
      type: "international",
    },
    {
      title: "Statistical Approaches For Network Anomaly Detection For UDP Spoofing",
      authors: "A. Ingle et al.",
      journal: "International Journal of Advanced Computational Engineering & Networking (IJACEN)",
      details: "ISSN: 2320-2106, Vol 4, Issue 7, 2016",
      link: "https://ijacen.iraj.in/",
      type: "international",
    },
    {
      title: "DDoS Attack Detection Algorithms Based on Pattern Classification & ML",
      authors: "Anup Ingle",
      journal: "Journal of University of Shanghai for Science & Technology (JUSST)",
      details: "ISSN: 1007-6735, Vol 23, Issue 2, 2021",
      link: "https://jusst.org/",
      type: "international",
    },
    {
      title: "Artificial intelligence-based classification performance evaluation in monophonic and polyphonic Indian classical instruments recognition with hybrid domain features amalgamation",
      authors: "Abhijit V. Chitre, Kirti Wanjale, Aradhanaa Deshmukh, Shyamsunder P. Kosbatwar, Anup Ingle, Sheela Hundekari",
      journal: "Journal of Information & Optimization Sciences (JIOS)",
      details: "ISSN: 0252-2667 / 2169-0103, Vol 44, Issue 3, 2023",
      link: "https://doi.org/10.47974/jios-1345",
      type: "international",
    },
    {
      title: "Intelligent Conversational Agents Based Custom Question Answering System",
      authors: "N. Sakhare, J. Bangare, D. Ajalkar, G. Walunjkar, M. Borawake, A. Ingle",
      journal: "International Journal of Intelligent Systems & Applications in Engineering (IJISAE)",
      details: "ISSN: 2147-6799, Vol 11, Issue 6s, 2023",
      link: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85168152238",
      type: "international",
    },
    {
      title: "Smart Traffic: Integrating Machine Learning, and YOLO for Adaptive Traffic Management System",
      authors: "N. Sakhare, M. Hedau, B. Gokul, O. Malpure, T. Shah, A. Ingle",
      journal: "International Journal of Intelligent Systems & Applications in Engineering (IJISAE)",
      details: "ISSN: 2147-6799, Vol 12, Issue 12s, 2024",
      link: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85185285108",
      type: "international",
    },
    {
      title: "Lightweight authenticated key management mechanism for enhanced data transmission in the Internet of Things framework",
      authors: "R.V. Mahadik, S.C. Hembade, S.S. Sorte, D. Khubalkar, A. Ingle, S. Thorat",
      journal: "Journal of Discrete Mathematical Sciences & Cryptography (JDMSC)",
      details: "ISSN: 0972-0529, 2024",
      link: "https://doi.org/10.47974/JDMSC-1960",
      type: "international",
    },
    {
      title: "Unified Institute Management System for Efficient Administration and Accurate Data Management",
      authors: "Ketki Kshirsagar, Smita Bhagwat, Rajeshree Shinde, Alka Barhatte, Swati Patil, Anup Ingle",
      journal: "Journal of Information Systems Engineering & Management (JISEM)",
      details: "ISSN: 2468-4376, Vol 10, Issue 5s, 2025",
      link: "https://jisem-journal.com/index.php/journal/article/view/769",
      type: "international",
    },
    {
      title: "Augmenting Robotic Navigation: An Analytical Examination of X-Y with Yaw Tolerance Modulations within ROS2 and the Dynamic Window Paradigm using fusion of Nav2 Stack with DWA Algorithm",
      authors: "Pramod U. Chavan , Rahul S. Pol , Vijaya N. Aher , Amar B. Deshmukh , Ajay Talele , Anup Ingle",
      journal: "Journal of Information Systems Engineering & Management (JISEM)",
      details: "ISSN: 2468-4376, Vol 10, Issue 23s, March 2025",
      link: "https://jisem-journal.com/index.php/journal/article/view/3695",
      type: "international",
    },
    {
      title: "Memory Efficient Summarization of Real-Time CCTV Surveillance System",
      authors: "Amar B. Deshmukh, Vijaya N. Aher , Vidya More , Rahul S. Pol , Ajay Talele, Anup Ingle",
      journal: "Journal of Information Systems Engineering & Management (JISEM)",
      details: "ISSN: 2468-4376, Vol 10, Issue 23s, March 2025",
      link: "https://jisem-journal.com/index.php/journal/article/view/3696",
      type: "international",
    },
    {
      title: "SolarGrowNet: Autonomous Greenhouse Monitoring and Control System for Gerbera",
      authors: "Vijaya N. Aher, Vidya More, Rahul S. Pol, Amar B. Deshmukh, Sharad T. Jadhav, Anup Ingle",
      journal: "Journal of Information Systems Engineering & Management (JISEM)",
      details: "ISSN: 2468-4376, Vol 10, Issue 23s, March 2025",
      link: "https://jisem-journal.com/index.php/journal/article/view/3699",
      type: "international",
    },
  ];



  const extractYear = (details) => {
    const match = details.match(/(20\d{2}|19\d{2})/);
    return match ? match[0] : null;
  };

  const highlightDetails = (text) => {
    return text.replace(/(Volume|Vol|Issue|ISSN|DOI)/gi, "🔹$1");
  };

  const toggleOpen = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // ✅ Separate International vs National
  const internationalPubs = publications.filter((pub) => pub.type === "international");
  const nationalPubs = publications.filter((pub) => pub.type === "national");

  const renderSection = (pubs) => (
    <div className="space-y-3">
      {pubs.length === 0 && <p className="text-sm text-gray-500">No journals found.</p>}
      {pubs.map((pub) => {
        const year = extractYear(pub.details);
        const isOpen = openIndex === pub.title;

        return (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-amber-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleOpen(pub.title)}
              className="w-full flex justify-between items-center px-5 py-3 bg-amber-50 hover:bg-amber-100 transition"
            >
              <div className="text-left">
                <h3 className="font-semibold text-amber-900">
                  {pub.title}   {/* Full name always */}
                </h3>
                {year && (
                  <span className="text-xs text-amber-700 flex items-center gap-1">
                    <FiCalendar size={14} className="text-yellow-900" /> {year}
                  </span>
                )}
              </div>
              <span className="ml-2 text-yellow-900">
                {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
              </span>
            </button>

            {/* Accordion Body */}
            {isOpen && (
              <div className="px-5 py-3 border-t border-amber-200 bg-yellow-50">
                <p className="text-sm text-gray-700 mb-1">{pub.authors}</p>
                <p className="text-sm italic text-gray-600 mb-1">{pub.journal}</p>
                <p className="text-xs text-gray-500">{highlightDetails(pub.details)}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-amber-700 hover:text-amber-900 hover:underline text-sm"
                  >
                    Journal <FiExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <SectionWrapper title="Journal Publications">
      {/* National Journals */}
      <div className="mb-4 flex items-center gap-2 text-[#8B4513]">
        <Flag size={22} className="text-[#8B4513]" />
        <span className="font-semibold text-2xl">National Journals</span>
      </div>
      {renderSection(nationalPubs)}

      {/* International Journals */}
      <div className="mt-8 mb-4 flex items-center gap-2 text-[#8B4513]">
        <Globe size={22} className="text-[#8B4513]" />
        <span className="font-semibold text-2xl">International Journals</span>
      </div>
      {renderSection(internationalPubs)}
    </SectionWrapper>
  );
}




function Conferences() {
  const [openIndex, setOpenIndex] = useState(null);

  const conferences = [
    {
      title: "Intrusion Detection for ICMP-Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      event: "2nd National Conference on Computer Communication and Information Technology (NC3IT-2013)",
      details: "Sinhgad Institute of Computer Science, Pandharpur, India, 15-16 Feb 2013",
      link: "",
      type: "national",
    },
    {
      title: "Intrusion Detection for TCP-SYNC Flood Attack",
      authors: "A. W. Ingle, Mohnish Awade",
      event: "National Conference on Networks & Soft Computing (NCNSC-13)",
      details: "Department of CSE, Vignan University, Vadlamudi, Guntur, India, 25-26 Mar 2013. Sponsored by DST, Govt. of India and technically sponsored by IJARCS, ISTE",
      link: "",
      type: "national",
    },

    {
      title: "Computational Intelligence based Intrusion Detection Systems for Wireless Communication and Pervasive Computing Networks",
      authors: "Abhishek Gupta, Om Jee Pandey, Mahendra Shukla, Anjali Dadhich, Samar Mathur, Anup Ingle",
      event: "IEEE International Conference on Computational Intelligence and Computing Research (ICCICR 2013)",
      details: "Enathi, India, 2013, pp. 1-7, doi: 10.1109/ICCIC.2013.6724156",
      link: "https://ieeexplore.ieee.org/document/6724156",
      type: "international",
    },
    {
      title: "Intelligent Perpetual Echo Attack Detection on User Datagram Protocol Port 7 Using Ant Colony Optimization",
      authors: "Abhishek Gupta; Om Jee Pandey; Mahendra Shukla; Anjali Dadhich; Anup Ingle; Vishal Ambhore",
      event: "International Conference on Electronic Systems, Signal Processing and Computing Technologies (ICESC 2014)",
      details: "Nagpur, India, 2014, pp. 419-424, doi: 10.1109/ICESC.2014.82",
      link: "https://ieeexplore.ieee.org/document/6745415",
      type: "international",
    },
    {
      title: "Towards Context-aware Smart Mechatronics Networks: Integrating Swarm Intelligence and Ambient Intelligence",
      authors: "Abhishek Gupta; Om Jee Pandey; Mahendra Shukla; Anjali Dadhich; Anup Ingle; Pravin Gawande",
      event: "International Conference on Issues and Challenges in Intelligent Computing Techniques (ICICT 2014)",
      details: "Ghaziabad, India, 2014, pp. 64-69, doi: 10.1109/ICICICT.2014.6781254",
      link: "https://ieeexplore.ieee.org/document/6781254",
      type: "international",
    },
    {
      title: "ICMP Denial of Service (DoS) Attack Detection System",
      authors: "Sanket Lokhande, Anup Ingle, Nilshree Damani, Aditi Mallavarapu, Mohnish Awade, Piyush Mathurkar",
      event: "International Conference on Science and Technology (ICST-2K14)",
      details: "S B Patil College of Engineering, Indapur, Pune, India, 21-22 Feb 2014",
      link: "",
      type: "international",
    },
    {
      title: "Update on Next Generation Network Attack: A Review Paper on Network Attacks Classified into Mobile & Computer Base",
      authors: "Ansari Mohsin Jaweed Ahmed, Shaikh Mohd Rehan, Anup Ingle, Sanket Lokhande, Rohan Saswadkar",
      event: "International Conference on Electrical, Electronics and Computer Science Engineering (ICEESCE 2015)",
      details: "Pune, India, 25 Jan 2015, ISBN: 978-2-642-24819-2",
      link: "",
      type: "international",
    },
    {
      title: "Smart Parking System",
      authors: "Anup Ingle, Ashutosh Pathrabe, Tukaram Panchal, Rajat Pandharpurkar",
      event: "International Conference on Recent Trends in Engineering and Technology (VISHWACON 2016-17)",
      details: "VIIT Pune, India, 17-18 Feb 2017, ISBN: 978-93-85665-68-4",
      link: "",
      type: "international",
    },
    {
      title: "Hardware Entity for Anomaly Detection of Network Traffic",
      authors: "Anup Ingle, Rishabh Rodkar, Makarand Potdar, Akshay K. Kalbhor",
      event: "International Conference on Recent Trends in Engineering and Technology (VISHWACON 2016-17)",
      details: "VIIT Pune, India, 17-18 Feb 2017, ISBN: 978-93-85665-68-4",
      link: "",
      type: "international",
    },
    {
      title: "Traffic Flow Optimization Using CNN and GCN for Adaptive Signal Control",
      authors: "Sanket Kolte; Anup Ingle; Ketki Kshirsagar; P. G. Gawande; Kalpana A. Kumbhar; Rupa S. Kawchale",
      event: "3rd Asian Conference on Innovation in Technology (ASIANCON 2023)",
      details: "Ravet, India, 2023, pp. 1-4, doi: 10.1109/ASIANCON58793.2023.10269944",
      link: "https://ieeexplore.ieee.org/document/10269944",
      type: "international",
    },
    {
      title: "Enhanced Honey Badger Algorithm for Resource Allocation and Task Scheduling in Cloud Environment",
      authors: "R. Rajagopal, A. Arunarani, A. Arivarasi, A. Ingle, R. T, R. V. Prakash",
      event: "4th International Conference on Smart Electronics and Communication (ICOSEC 2023)",
      details: "Trichy, India, 2023, pp. 1375-1380, doi: 10.1109/ICOSEC58147.2023.10275908",
      link: "https://ieeexplore.ieee.org/document/10275908",
      type: "international",
    },
    {
      title: "Analyzing Convolutional Neural Networks as Feature Extractors for Video Regression",
      authors: "S. Jain, R. Ghotekar, A. Dawande, A. Pawar, A. W. Ingle, V. M. Marathe",
      event: "7th International Conference on Computing, Communication, Control and Automation (ICCUBEA 2023)",
      details: "Pune, India, 2023, pp. 1-5, doi: 10.1109/ICCUBEA58933.2023.10392012",
      link: "https://ieeexplore.ieee.org/document/10392012",
      type: "international",
    },
    {
      title: "Improving UHVDC Wall Bearings Electric Reliability: Grading Ring Optimization and Field Investigation",
      authors: "Prashant Kumar; D. Anandhasilambarasan; Brijesh Kumar; P. Karthigaikumar; Anup Ingle",
      event: "International Conference on Advances in Computation, Communication and Information Technology (ICAICCIT 2023)",
      details: "India, 2023, doi: 10.1109/ICAICCIT60255.2023.10466033",
      link: "https://ieeexplore.ieee.org/document/10466033",
      type: "international",
    },
    {
      title: "Enhancing Silicone Rubber Efficiency: Effects of Aluminum Tri-Hydrate Surface Treatment on Electric and Permeation Characteristics",
      authors: "A. Raturi, G. Kumar, U. K. Verma, G. Ravivarman, G. Premananthan, A. Ingle",
      event: "International Conference on Power Energy, Environment and Intelligent Control (PEEIC 2023)",
      details: "India, 2023, doi: 10.1109/PEEIC59336.2023.10451429",
      link: "https://ieeexplore.ieee.org/document/10451429",
      type: "international",
    },
    {
      title: "Federated Machine Learning for Cardiac Disease Detection Using Internet of Medical Things",
      authors: "K. Aggarwal, V. R. Vimal, U. Patil, S. C, A. Ingle, T. S. Kumar",
      event: "International Conference on Self Sustainable Artificial Intelligence Systems (ICSSAS 2023)",
      details: "Erode, India, 2023, pp. 1326-1331, doi: 10.1109/ICSSAS57918.2023.10331771",
      link: "https://ieeexplore.ieee.org/document/10331771",
      type: "international",
    },
    {
      title: "Web Scraping-Based Cryptocurrency Prediction and Analysis",
      authors: "Dhawal Thombare; Atharva Khadake; Rameshwar Kumbhar; Anup Ingle; M.S. Deshmukh; Manish Wadhwani",
      event: "2025 3rd International Conference on Intelligent Data Communication Technologies and Internet of Things (IDCIoT)",
      details: "Bengaluru, India, 2025, doi: 10.1109/IDCIOT64235.2025.10915045",
      link: "https://ieeexplore.ieee.org/document/10915045",
      type: "international",
    },
    {
      title: "The Cram of Network Safety with its Sharp Attacks and Protective Measures",
      authors: "Sakshi Deshpande; Aniket Devare; Malhar Dhakulkar; Anup Ingle; Srinivas Chippalkatti; Arati Deshpande",
      event: "2025 1st International Conference on AIML-Applications for Engineering & Technology (ICAET)",
      details: "Pune, India, 2025, doi: 10.1109/ICAET63349.2025.10932286",
      link: "https://ieeexplore.ieee.org/document/10932286",
      type: "international",
    },
    {
      title: "Neighborhood Selection for Secure and Efficient Data Transmission in Wireless Sensor Network",
      authors: "Lakshya Swarup; Latha B; Hitesh Kalra; Hannah Jessie Rani R; Anup Ingle; G. Premananthan",
      event: "2024 IEEE 4th International Conference on ICT in Business Industry & Government (ICTBIG)",
      details: "Indore, India, 2025, doi: 10.1109/ICTBIG64922.2024.10911192",
      link: "https://ieeexplore.ieee.org/document/10911192",
      type: "international",
    },
    {
      title: "Enhancing Cyber Security Against DDoS Attacks: A Comprehensive Review and Future Directions",
      authors: "Smruti Jagtap; Vikrant Kavitkar; Mahek Jain; Anup Ingle; Jayashree P. Tamkhade; Ketki Kshirsagar",
      event: "2025 1st International Conference on AIML-Applications for Engineering & Technology (ICAET)",
      details: "Pune, India, 2025, doi: 10.1109/ICAET63349.2025.10932273",
      link: "https://ieeexplore.ieee.org/document/10932273",
      type: "international",
    },
    {
      title: "Real-Time Data Management in Embedded Systems Using a Circular Queue for Efficient Memory Utilization",
      authors: "Pragati Patil; Atharva Joshi; Aryan Wale; Tanushri Rajput; Minal Deshmukh; Anup Ingle",
      event: "2025 International Conference on Computational, Communication and Information Technology (ICCCIT)",
      details: "Indore, India, 2025, doi: 10.1109/ICCCIT62592.2025.10928031",
      link: "https://ieeexplore.ieee.org/document/10928031",
      type: "international",
    },
    {
      title: "Real-Time Supply Chain Management using Automation and Big Data in the Cloud",
      authors: "Shweta Saxena; Mansi Kukreja; Anup Ingle; A. Thangamani; Rajeev Sharma; S Murugeswari",
      event: "2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      details: "Bhopal, India, 2025, doi: 10.1109/ICCCNT61001.2024.10724731",
      link: "https://ieeexplore.ieee.org/document/10928031",
      type: "international",
    },
    {
      title: "Delving Into Virtual Ventures and The Growing Vi-Gnettes of Vehicular Innovations",
      authors: "X. Mercilin Raajini; Lalit Khanna; Malathi H; Anup Ingle; G. R. Vijayshankar; Danish Kundra",
      event: "2024 IEEE 2nd International Conference on Innovations in High Speed Communication and Signal Processing (IHCSP)",
      details: "Kamand, India, 2025, doi: 10.1109/IHCSP63227.2024.10960022",
      link: "https://ieeexplore.ieee.org/document/10960022",
      type: "international",
    },
    {
      title: "Enhancing Watershed Segmentation for Precise Mammogram Detection and Classification with the Application of Feedforward Neural Network Strategies",
      authors: "S. Kannimuthu; Amritpal Sidhu; P. Chandrakala; Yuvraj Parmar; Shrishail B Sollapur; Anup Ingle",
      event: "2024 IEEE 4th International Conference on ICT in Business Industry & Government (ICTBIG)",
      details: "Indore, India, 2025, doi: 10.1109/ICTBIG64922.2024.10911243",
      link: "https://ieeexplore.ieee.org/document/10911243",
      type: "international",
    },
  ];





  // Extract year from details text
  const extractYear = (details) => {
    const match = details.match(/(20\d{2}|19\d{2})/);
    return match ? match[0] : null;
  };

  const toggleOpen = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Separate National vs International
  const nationalConfs = conferences.filter((c) => c.type === "national");
  const internationalConfs = conferences.filter((c) => c.type === "international");

  // Render Section
  const renderSection = (title, confs) => (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-amber-900 border-b border-amber-300 pb-2">
        {title}
      </h3>

      {confs.length === 0 && (
        <p className="text-sm text-gray-500">No conferences found.</p>
      )}

      {confs.map((conf) => {
        const year = extractYear(conf.details);
        const isOpen = openIndex === conf.title;

        return (
          <motion.div
            key={conf.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white border border-amber-200 rounded-lg shadow-sm overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleOpen(conf.title)}
              className="w-full flex justify-between items-center px-5 py-3 bg-amber-50 hover:bg-amber-100 transition"
            >
              <div className="text-left">
                <h4 className="font-semibold text-amber-900">
                  {conf.title.length > 70
                    ? conf.title.slice(0, 70) + "..."
                    : conf.title}
                </h4>
                {year && (
                  <span className="text-xs text-amber-700 flex items-center gap-1">
                    <FiCalendar className="text-yellow-900" size={14} />
                    {year}
                  </span>
                )}
              </div>
              <span className="ml-2 text-yellow-900">
                {isOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
              </span>
            </button>

            {/* Accordion Body */}
            {isOpen && (
              <div className="px-5 py-3 border-t border-amber-200 bg-yellow-50">
                <p className="text-sm text-gray-700 mb-1">{conf.authors}</p>
                <p className="text-sm italic text-gray-600 mb-1">{conf.event}</p>
                <p className="text-xs text-gray-500">{conf.details}</p>

                {conf.link && conf.link !== "#" && (
                  <a
                    href={conf.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-amber-700 hover:text-amber-900 hover:underline text-sm"
                  >
                    <FiExternalLink className="mr-1 text-yellow-900" size={14} />
                    {conf.link.includes("ieeexplore")
                      ? "IEEE Xplore"
                      : "Conference Website"}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );



  return (
    <SectionWrapper title="Conference Publications">
      {/* National Conferences */}
      <div className="mb-4 flex items-center gap-2 text-[#8B4513]">
        <Flag size={22} className="text-[#8B4513]" />
        <span className="font-semibold text-2xl">National Conferences</span>
      </div>
      {renderSection("", nationalConfs)}

      {/* International Conferences */}
      <div className="mt-8 mb-4 flex items-center gap-2 text-[#8B4513]">
        <Globe size={22} className="text-[#8B4513]" />
        <span className="font-semibold text-2xl">International Conferences</span>
      </div>
      {renderSection("", internationalConfs)}
    </SectionWrapper>
  );

}




// Books - Searchable Accordion Style
function Books() {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      title: "Internet of Things",
      course: "Second Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/internet-things-second-year-sy-degree-artifical-intelligence-data-science-semester-4/p/itmacd4162afea0c"
    },
    {
      title: "Fundamentals of Artificial Intelligence and Machine Learning",
      course: "Second Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/fundamentals-artificial-intelligence-machine-learning-second-year-sy-degree-ai-ml-semester-4/p/itma80b1223298ac"
    },
    {
      title: "Modernized IoT",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/modernized-iot-final-year-degree-course-electronics-telecommunication-engineering-semester-7-sppu/p/itmad50a3e06e835"
    },
    {
      title: "Mobile Computing",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/mobile-computing-final-year-degree-course-electronics-telecommunication-engineering-semester-8-sppu/p/itma5a016621bb51?pid=9788119115044"
    },
    {
      title: "Cloud Computing",
      course: "Final Year Degree Course in ELECTRONICS & TELECOMMUNICATION ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.viit.ac.in/Image%20Processing%20-%20Final%20Year%20Degree%20Course%20in%20COMOUTER%20ENGINEERING%20-%20Nirali%20Publication"
    },
    {
      title: "Image Processing",
      course: "Final Year Degree Course in COMPUTER ENGINEERING (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/image-processing-final-year-degree-course-computer-engineering-semester-8-sppu/p/itm0022ef1f48058"
    },
    {
      title: "Video Analytics",
      course: "Third Year (TY) B.Tech Course in Artificial Intelligence and Machine Learning AIML",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/video-analytics-third-year-ty-b-tech-artificial-intelligence-machine-learning-aiml-semester-6-sppu/p/itm06436aa3af9bc"
    },
    {
      title: "Industrial Internet of Things",
      course: "Final Year Degree Course in ARTIFICIAL INTELLIGENCE & DATA SCIENCE (SPPU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/industrial-internet-things-final-year-b-tech-artificial-intelligence-data-science-ai-ds-semester-7-sppu/p/itm957e3a6776d27"
    },
    {
      title: "Wireless Sensor Networks",
      course: "Final Year BTech. Course in Electronics and Telecommunication Engineering/ Electronics Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/wireless-sensor-networks-dbatu-final-year-b-tech-course-electronics-telecommunication-engineering-engineering-semester-7/p/itmab4a57f5dad4e"
    },
    {
      title: "Blockchain Technology",
      course: "Final Year BTech Course in Computer Engineering/ Computer Science and Engineering (BATU)",
      publisher: "Nirali Publication",
      link: "https://www.flipkart.com/blockchain-technology-dbatu-semester-7-final-year-b-tech-course-computer-engineering-science-engineering/p/itm1a6aeb6c2942c"
    },
    {
      title: "Deep Learning",
      course: "Final Year B.Tech Course In Computer Engineering, Computer Science & Engineering and Information Technology (BATU)",
      publisher: "Nirali Publication",
    }
  ];

  // Filter books by title, course, or publisher
  const filteredBooks = books.filter((book) => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      book.title.toLowerCase().includes(lowerTerm) ||
      book.course.toLowerCase().includes(lowerTerm) ||
      book.publisher.toLowerCase().includes(lowerTerm)
    );
  });

  return (
    <div className="space-y-12">
      {/* Authored Books */}
      <SectionWrapper title="Authored Books">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition bg-white border ${index % 2 === 0 ? "border-amber-200" : "border-yellow-200"
                }`}
            >
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-amber-900 font-semibold text-lg mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-yellow-900 mb-1">{book.course}</p>
                <p className="text-xs text-amber-700 mb-3">
                  Published by:{" "}
                  <span className="font-medium">{book.publisher}</span>
                </p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-center bg-amber-800 text-white py-1.5 rounded-lg hover:bg-amber-900 transition font-medium"
                >
                  Link <FiExternalLink className="inline ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contributed Book Chapters */}
      {/* Book Chapters */}
      <SectionWrapper title="Book Chapters">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              year: "2025",
              chapterTitle: "Impacts of Digital Technologies Across Generations",
              bookTitle:
                "Bridging Academia and Industry Through Cloud Integration in Education",
              doi: "10.4018/979-8-3693-6705-6.ch001",
              doiLink: "https://doi.org/10.4018/979-8-3693-6705-6.ch001",
              isbn: "9798369367070, 9798369367056",
              coAuthors: "K.P. Kshirsagar; A. Ingle",
              scopusLink: "https://www.scopus.com/record/display.uri?eid=2-s2.0-85218055676",
              crossrefLink: "",
            },
            {
              year: "2025",
              chapterTitle:
                "Human-centric IT Management: Enhancing Employee Productivity and Satisfaction",
              bookTitle:
                "Tech-Driven Strategies: Leveraging Information Technology in Business Management",
              doi: "— (no Crossref DOI listed yet)",
              doiLink: "",
              isbn: "9798895303986, 9798895302606",
              coAuthors: "O. Bagaria; S. Mohammed; R. Kamalraj; A. Ingle",
              scopusLink: "https://www.scopus.com/pages/publications/86000193063",
              crossrefLink: "",
            },
            {
              year: "2025",
              chapterTitle:
                "Empowering Individuals with Disabilities: The Role of Mobile Health Apps in Enhancing Accessibility and Health Outcomes",
              bookTitle:
                "Modern Digital Approaches to Care Technologies for Individuals with Disabilities",
              doi: "10.4018/979-8-3693-7560-0.ch004",
              doiLink: "https://doi.org/10.4018/979-8-3693-7560-0.ch004",
              isbn: "9798369375600, 9798369375624",
              coAuthors: "A.W. Ingle; K.P. Kshirsagar; P.G. Gawande",
              scopusLink: "https://www.scopus.com/pages/publications/105005127645",
              crossrefLink: "https://doi.org/10.4018/979-8-3693-7560-0.ch004",
            },
          ].map((book, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition bg-white border ${index % 2 === 0 ? "border-amber-200" : "border-yellow-200"
                }`}
            >

              <div className="p-4 text-sm space-y-2">
                <p className="font-semibold text-amber-700">{book.chapterTitle}</p>
                <p className="italic text-gray-700">{book.bookTitle}</p>
                <p><span className="font-medium">Year:</span> {book.year}</p>
                <p>
                  <span className="font-medium">DOI:</span>{" "}
                  {book.doiLink ? (
                    <a
                      href={book.doiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {book.doi}
                    </a>
                  ) : (
                    book.doi
                  )}
                </p>
                <p><span className="font-medium">ISBN(s):</span> {book.isbn}</p>
                <p><span className="font-medium">Co-Authors:</span> {book.coAuthors}</p>
                <p className="flex flex-wrap gap-3">
                  <div className="space-x-2">
                    {book.scopusLink && (
                      <a
                        href={book.scopusLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Scopus Record
                      </a>
                    )}
                    {book.scopusLink && book.crossrefLink && <span>/</span>}
                    {book.crossrefLink && (
                      <a
                        href={book.crossrefLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        Crossref
                      </a>
                    )}
                  </div>


                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

    </div>
  );
}



// Patents
function Patents() {
  return (
    <div className="space-y-8"> {/* space between each major block */}

      {/* Granted Patents */}
      <InfoBlock color="amber">
        <SectionWrapper title="Granted Patents">
          <div className="mt-4 border-l-4 border-amber-400 pl-4 bg-amber-50 rounded-xl p-6 shadow-md space-y-3">
            <h3 className="font-semibold text-lg text-yellow-900">
              DESIGN AND DEVELOPMENT OF AN ULTRASONIC VIBRATION-ASSISTED TURNING TOOLONG FIXTURE AND HARD MACHINE
            </h3>
            <p className="text-sm text-yellow-800">
              Published on 09.12.2022, Application Number: 202221004356
            </p>
            <a
              href="https://ipindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-900 hover:underline inline-flex items-center text-sm font-medium"
            >
              Indian Patent Office <FiExternalLink className="ml-1" size={14} />
            </a>
          </div>
        </SectionWrapper>
      </InfoBlock>

      {/* Published Patents */}
      <InfoBlock color="amber">
        <SectionWrapper title="Published Patents">
          <div className="mt-4 border-l-4 border-amber-400 pl-4 bg-amber-50 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg text-yellow-900">
              Under construction
            </h3>
          </div>
        </SectionWrapper>
      </InfoBlock>

      {/* Filed Patents */}
      <InfoBlock color="amber">
        <SectionWrapper title="Filed Patents">
          <div className="mt-4 border-l-4 border-amber-400 pl-4 bg-amber-50 rounded-xl p-6 shadow-md">
            <h3 className="font-semibold text-lg text-yellow-900">
              Under construction
            </h3>
          </div>
        </SectionWrapper>
      </InfoBlock>

    </div>
  );
}





// Contact Section
const fadeVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView]);

  return (
    <section ref={ref} className="py-12 md:py-20 bg-amber-50" id="contact">
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate={controls}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl rounded-2xl bg-white"
      >
        {/* Heading */}
        <motion.div
          variants={fadeVariant}
          initial="hidden"
          animate={controls}
          className="text-center pt-8 mb-8 px-2"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-900 mb-2">
            Academic Collaborations & Inquiries

          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto text-sm sm:text-base">
            Open to research partnerships, student mentorship, industry–academia initiatives, branding strategies, and innovative software solutions that bridge academia, industry, and technology for impactful, future-ready outcomes.          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 p-4 sm:p-6 md:p-8">
          {/* Left Contact Info */}
          <motion.div
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            className="bg-amber-100 text-yellow-900 rounded-xl p-6 sm:p-8 shadow-md w-full"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-yellow-900 border-b border-amber-300 pb-2">
              Contact Information
            </h3>

            <div className="space-y-5 sm:space-y-6">
              <ContactDetail
                icon={<FiUser size={18} className="text-amber-700" />}
                label="Name"
                value="Dr. Anup Ingle"
              />
              <ContactDetail
                icon={<FiPhone size={18} className="text-amber-700" />}
                label="Phone"
                value="+91-9325383604 (Primary)"
              />
              <ContactDetail
                icon={<FiMail size={18} className="text-amber-700" />}
                label="Email"
                value="anup.ingle@vit.edu"
                isEmail
              />
              <ContactDetail
                icon={<FiMapPin size={18} className="text-amber-700" />}
                label="Office"
                value="Department of Electronics & Telecommunication"
                secondValue="VIT, Pune, Maharashtra"
              />
              <ContactDetail
                icon={<FiClock size={18} className="text-amber-700" />}
                label="Availability"
                value="Mon-Fri: 10:00 AM - 5:00 PM"
                secondValue="Preferably"
              />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
            className="space-y-5 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-yellow-900 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-amber-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-yellow-900 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-amber-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-yellow-900 mb-1">
                Subject *
              </label>
              <select
                id="subject"
                required
                className="w-full rounded-md border border-amber-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-amber-300 bg-white"
              >
                <option value="">Select inquiry type</option>
                <option value="research">Research Collaboration</option>
                <option value="guidance">Student Guidance</option>
                <option value="lecture">Invited Lecture Request</option>
                <option value="other">Other Academic Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-yellow-900 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-md border border-amber-300 px-4 py-2 text-sm sm:text-base outline-none focus:ring-2 focus:ring-amber-300"
              ></textarea>
            </div>

            <div className="flex items-start gap-2">
              <input
                id="consent"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-amber-300 text-amber-700 focus:ring-amber-400 mt-1"
              />
              <label htmlFor="consent" className="text-xs sm:text-sm text-yellow-900">
                I consent to the processing of my personal data for academic communication purposes
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-700 to-amber-800 text-white font-medium py-3 rounded-md hover:opacity-90 transition shadow-md hover:shadow-lg"
            >
              Send Academic Inquiry
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

function ContactDetail({ icon, label, value, secondValue, isLink = false, isEmail = false }) {
  const content = isEmail ? (
    <a
      href={`mailto:${value}`}
      className="text-sm sm:text-base text-amber-700 hover:underline break-all"
    >
      {value}
    </a>
  ) : isLink ? (
    <a
      href={`https://${value}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm sm:text-base text-amber-700 hover:underline break-all"
    >
      {value}
    </a>
  ) : (
    <p className="text-sm sm:text-base text-amber-800 break-all">{value}</p>
  );

  return (
    <div className="flex items-start gap-4">
      {/* Icon background amber, text chocolate */}
      <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      {/* Text section */}
      <div className="min-w-0">
        <p className="font-medium text-amber-900">{label}</p>
        {content}
        {secondValue && (
          <p className="text-sm sm:text-base text-amber-800 mt-1 break-words">{secondValue}</p>
        )}
      </div>
    </div>
  );
}
