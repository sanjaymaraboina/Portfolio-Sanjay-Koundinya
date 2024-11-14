import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  
  {
    id: 1,
    title: "Snake and Ladder Game ",
    img: "https://gameflix.tv/wp-content/uploads/2023/01/snake_and_ladders1.jpg",
    desc: "Developed a collaborative Snake and Ladder game in a GitHub repository, allowing two players to experience smooth transitions and visually appealing gameplay. Leveraged React.js to build an intuitive and user-friendly interface, with animations that bring the game to life, making the movement of pawns feel immersive and realistic. Focused on desktop-only design, ensuring a detailed and polished user experience. Implemented real-time game logic for dynamic interaction between players.",
    skill: "#React #CSS #HTML",
    url: "https://sriharivas5.github.io/Laddersnake/",
  },
  {
    id: 2,
    title: "Smart Learning",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*b9hhsqIKnNwhwAfUqbCfQA.jpeg",
    desc: "Collaborated on this project in a GitHub repository, leveraging Vite.js for rapid development and optimized performance. Developed a series of interactive learning experiences using HTML, CSS, and basic JavaScript games, making the learning process engaging and fun. Incorporated animated anime characters to visually captivate users and enhance the overall educational experience. Designed gamified learning modules that transform traditional concepts into exciting games, promoting active participation and immersion.",
    skill: "#React #CSS #HTML",
    url: "https://sriharivas5.github.io/smartLearning/",
  },
  {
    id: 3,
    title: "Movie Buzz",
    img: "https://media.darpanmagazine.com/library/uploads/entertainment/content/main.jpg",
    desc: "Integrated the OMDB API to fetch details of Harry Potter movies and Friends series, delivering dynamic content to users. Employed Redux Toolkit for efficient state management, seamlessly handling data fetching and storage. Focused on a desktop-only UI, building intuitive components with React.js for smooth navigation. Created separate components for movie and TV show details to maintain a clear structure. Implemented error handling to manage failed API requests, ensuring user-friendly messages are displayed. ",
    skill: "#React #Redux #HTML",
    url: "https://movie-buzz-redux.netlify.app/",
  },
  {
    id: 4,
    title: "React Admin dashboard",
    img: "https://themewagon.com/wp-content/uploads/2022/05/screencapture-technext-github-io-darkpan-2022-05-10-09_44_07-1.png",
    desc: "Here it is: ReactJS-driven is a powerful admin dashboard that streamlines company administration. Examine dynamic graphs that show the company's financial status and the careful balancing of sales, expenses, and revenue. which guarantees a smooth and user-friendly experience. You may effortlessly handle transactions and merchandise by using it as your control centre. Every detail is correct, and it is easy to add, remove, and modify.",
    skill: "#React #CSS #HTML",
    url: "https://admin-dashboard-koundiya.netlify.app/",
  },
  
  

];

const Single = ({ item, getSkillColor }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div  >
              {item.skill.split(" ").map((skill, index) => (
                <span
                  key={index}
                  style={{ marginRight: "8px", color: getSkillColor(index) }}
                >
                  {skill}
                </span>
              ))}
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer"   >
              <button >View Project</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const getSkillColor = (index) => {
    const colors = ["#6495ed", "#e4007c ", "#bcd426", "orange"];
    return colors[index % colors.length];
  };

  return (
    <div className="projects" ref={ref} id="projects">
      <div className="progress">
        <div className="wave">
          <span style={{ "--i": 1 }}>P</span>
          <span style={{ "--i": 2 }}>r</span>
          <span style={{ "--i": 3 }}>o</span>
          <span style={{ "--i": 4 }}>j</span>
          <span style={{ "--i": 5 }}>e</span>
          <span style={{ "--i": 6 }}>c</span>
          <span style={{ "--i": 7 }}>t</span>
          <span style={{ "--i": 8 }}>s</span>
        </div>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
     <div className="project-lists">
     {items.map((item) => (
        <Single item={item} key={item.id} getSkillColor={getSkillColor} />
      ))}
     </div>
    </div>
  );
};

export default Projects;
