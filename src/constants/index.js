import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  inotebook,
  expencetracker,
  chatbot,
  threejs,
  yogesh,
  tushar,
  mukul,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "Teachook",
    icon: tesla,
    iconBg: "#383E56",
    date: "February 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Spearheaded the development and maintenance of REST API endpoints, proactively addressed frontend integration challenges, and played a pivotal role in testing and optimizing system performance, resulting in a commendable 20% enhancement in overall functionality",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Metabrix Lab",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - June 2023",
    points: [
      "Spearheaded the development of a streamlined data upload process, leveraging various methods for enhanced versatility. Implemented innovative features, such as seamless file uploads from devices and QR code scanning for image uploads. Achieved a 30% improvement in user experience, reducing the time users spent on data uploads and gathering positive feedback.",
      "Utilized the MERN stack and Three.js to process uploaded data, creating user-friendly responses. Engineered a download feature enabling users to store processed information. This initiative led to notable enhancements in user experience, streamlined data processing, and a marked boost in overall productivity",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I had the pleasure of working closely with Nikhil as our Software Development Engineer, and I can confidently attest to his exceptional technical skills and problem-solving abilities. He consistently demonstrated a deep understanding of complex coding challenges and produced efficient and elegant solutions. His commitment to delivering high-quality code and his collaborative approach make him an invaluable asset to any development team.",
    name: "Tushar",
    designation: "SDE",
    company: "Amazon",
    image: tushar,
  },
  {
    testimonial:
    "Working alongside Nikhil was an enlightening experience. He possesses a keen eye for detail and an unwavering dedication to producing robust and scalable software solutions. His proficiency in various programming languages and frameworks is truly commendable. What sets him apart is not just technical prowess but also the ability to communicate complex concepts effectively, fostering a collaborative and productive work environment.",
    name: "Yogesh",
    designation: "SDE",
    company: "EXL",
    image: yogesh,
  },
  {
    testimonial:
    "I had the privilege of managing Nikhil during his tenure as a Software Development Engineer. He consistently delivered outstanding results, showing an innate ability to grasp new technologies swiftly and apply them effectively to our projects. His commitment to meeting deadlines without compromising code quality is truly impressive. I have no hesitation in recommending Nikhil for any challenging software development role.",
    name: "Mukul",
    designation: "SDE",
    company: "Infosys",
    image: mukul,
  },
];

const projects = [
  {
    name: "ChatBot",
    description:
      "It comprehends natural language, delivering relevant responses. It learns from interactions, adapting for personalized, engaging conversations. Users experience seamless, human-like exchanges with instant responses",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "white-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Nikhil-olo/app/ChatBot-",
  },
  {
    name: "Expence Tracker",
    description:
      "Implemented user authentication for enhanced security using Redux store, fortifying user data protection. Engineered intuitive screens for adding, editing, and deleting expenses, providing a comprehensive expense management experience",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "white-text-gradient",
      },
    ],
    image: expencetracker,
    source_code_link: "https://github.com/Nikhil-olo/app",
  },
  {
    name: "i-NoteBook",
    description:
      "Spearheaded the development of a comprehensive cloud-based Notebook application. Integrated essential features: Note management (addition, updates, deletions), Login, and Sign up capabilities",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "restApi",
        color: "white-text-gradient",
      },
    ],
    image: inotebook,
    source_code_link: "https://github.com/Nikhil-olo/app",
  },
];

export { services, technologies, experiences, testimonials, projects };
