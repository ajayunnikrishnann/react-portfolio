import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a self-taught MERN stack developer who discovered that web technology aligns perfectly with my career aspirations. With extensive experience in developing MERN stack applications, I have honed my skills in front-end technologies like React, HTML, CSS, and Tailwind, as well as back-end technologies like Node.js, MongoDB, and MySQL. I stay updated in the dynamic field of web development, constantly seeking new challenges to improve my skills.`;

export const ABOUT_TEXT = `Self-taught MERN Stack developer with hands-on experience in building user-friendly and responsive web applications. I’ve had the opportunity to have my skill advancements evaluated weekly by industrial experts. Their consistent reviews served as invaluable check points, guiding me in improving my proficiency across both front-end and back-end technologies. Curious to learn more about developing scalable distributed systems.`;

export const EXPERIENCES = [
  {
    year: "2023  - Present",
    role: "Full Stack Development - Self Learning Training Programme",
    company: "Brototype",
    description: `During this self-paced training program at Brototype, I gained comprehensive skills in full stack development, mastering both front-end and back-end technologies. This hands-on experience allowed me to develop and deploy various projects, including a property portal and an e-commerce platform. I honed my expertise in the MERN stack, including MongoDB, Express.js, React.js, and Node.js, while also integrating essential tools and technologies like AWS, JWT, and RESTful APIs. This program significantly enhanced my ability to create robust, scalable web applications from scratch, fostering a deeper understanding of modern web development practices.`,
    technologies: ["Javascript", "React.js", "Express.js", "MongoDB", "Node.js", "MySQL", "TailwindCSS", "Bootstrap", "HTML & CSS", "jQuery", "AJAX", "Redux", "NGINX", "AWS EC2",  "JWT", "Git", "Firebase", "Rest Api", "Postman", "Figma"],
  },
  {
    year: "2024 June- August",
    role: "ASP.net - Training Programme",
    company: "Claysys Technologies",
    description: `Participated in a training program at Claysys Technologies, where I developed a full-stack online course learning platform using ASP.NET MVC. This project involved creating a dynamic and user-friendly platform that allowed admins and tutors to manage courses and users to enroll in them. I was responsible for implementing key features such as user authentication, course creation, review and rating systems, and enrollment management. The project utilized ADO.NET for data access, ensuring efficient interaction with a SQL Server Management Studio. This experience significantly enhanced my skills in C#, ASP.NET MVC, and database management.`,
    technologies: ["C#", "ASP.net MVC", "MVC", "ADO.net", "SQL Server Management Studio", "MySQL", "ADO.net", "jQuery", "AJAX"],
  },
  
];

export const PROJECTS = [
  {
  
      title: "Property Scanner Real Estate Portal",
      image: project2,
      description:
        "Property Scanner is a property portal real estate platform aimed at assisting clients in buying, selling, and renting properties in the most desirable neighborhoods. The front-end is seamlessly integrated with React, while the back-end is in Node.js and it’s framework Express, by following the principles of MVC Architecture and MongoDB as the database.",
      technologies: ["MongoDB", "Node JS", "Express Js", "React Js", "Redux", "Node JS", "Node mailer", "Cloudinary", "Tailwind Css", "Jwt", "Socket.io", "Stripe", "Firebase", "AWS EC2", "NGINX", ],
      liveLink: 'https://www.propertyscanner.ajayunnikrishnan.shop/',
      githubLink: 'https://github.com/ajayunnikrishnann/PropertyScanner.git'
    },
    {
    title: "Focus Frames E-Commerce Website",
    image: project1,
    description:
      "Focus Frames is an e-commerce website for purchasing all types of cameras . Includes User side and Admin side for ensuring the perfection of a full functional e-commerce website.",
    technologies: ["MongoDB", "Node JS", "Express", "AWS EC2", "NGINX", "Twilio", "EJS", "Bootstrap", "HTML & CSS", "JWT"],
    liveLink: 'https://ajayunnikrishnan.shop/',
    githubLink: 'https://github.com/ajayunnikrishnann/FocusFrames.git'
  },
  
  {
    title: "Online Course Learning Platform",
    image: project3,
    description:
      "An online course learning platform designed for both tutors and students. The platform allows tutors to create and manage courses, while students can enroll, leave reviews, and rate courses. It includes features such as secure user authentication, dynamic course enrollment, and a responsive design for seamless access across devices.",
    technologies: ["ASP.NET MVC", "ADO.NET", "HTML & CSS", "Bootstrap"],
    githubLink: 'https://github.com/ajayunnikrishnann/Claysys-Online-Course-Learning-portal.git'
  },

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
