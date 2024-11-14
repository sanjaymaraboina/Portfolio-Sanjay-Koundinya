import React from "react";
import { motion } from "framer-motion";
import "./Skills.scss";
import { skills } from "../Data/Data";
import { skillsSet } from "../Data/Data";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
// import { DiReact, DiBootstrap } from "react-icons/di";
// import { FaReact } from "react-icons/fa";

// import { SiCss3 } from "react-icons/si";
// import expressImage from "../../assets/expres.png"
// import { TbBrandJavascript } from "react-icons/tb";
// import { TbBrandRedux } from "react-icons/tb";
// import { RiHtml5Line } from "react-icons/ri";
// import { SiSass } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandRedux,
  TbBrandTailwind,
} from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
import {
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPython,
} from "react-icons/si";

// import { TbBrandTailwind } from "react-icons/tb";

const Skills = () => {
  const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(-500px)",
  });
  const animatedSpringRight = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(0px) translateX(1500px)",
  });

  return (
    <div className="Container" ref={animatedRef}>
      <animated.div className="Wrapper" style={animatedSpring}>
        <div className="Title">Skills</div>
        <div className="overview">
          <h1>Over View :</h1>
          <div id="Desc">
            "Over the past 1 year, I've honed a versatile skill set in web
            development. Proficient in front-end technologies like React.js,
            Redux, and Material UI,Node.js, express.js, MongoDb,MySQL, I
            specialize in crafting intuitive user interfaces. I have expertise
            in HTML5 and CSS3 for responsive design. Continuously learning and
            adapting, I stay updated with emerging technologies to deliver
            cutting-edge solutions."
          </div>
        </div>
        <div className="skill-effects">
          <div className="skillManager">
            <div className="horizon">
              <animated.div className="SkillsContainer" style={animatedSpring}>
                {skills.map((skill, index) => (
                  <div className="Skill" key={index}>
                    <div className="SkillTitle">{skill.title}</div>
                    <div className="SkillList">
                      {skill.skills.map((item, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          whileHover={{
                            scale: 1.03,
                            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                          }}
                          className="SkillItem"
                        >
                          <img
                            className="SkillImage"
                            src={item.image}
                            alt={item.name}
                          />
                          <span>{item.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </animated.div>
              <animated.div   className="SkillsContainer"
                style={animatedSpringRight}
              >
                {skillsSet.map((skill, index) => (
                  <div className="Skill" key={index}>
                    <div className="SkillTitle">{skill.title}</div>
                    <div className="SkillList">
                      {skill.skills.map((item, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                          }}
                          className="SkillItem"
                        >
                          <img
                            className="SkillImage"
                            src={item.image}
                            alt={item.name}
                          />
                          <span>{item.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </animated.div>
            </div>
          </div>
          <div className="horizon2">
            <div className="skill-rotate-360">
              <div class="rotaterSkills">
                <div class="rotaterSkillsInner">
                  <div className="icon-container">
                    <div className="icon-top">
                      <FaReact size={60} />
                    </div>
                    <div className="icon-bottom">
                      <DiBootstrap size={60} />
                    </div>
                    <div className="icon-right">
                      <SiCss3 size={60} />
                    </div>
                    <div className="icon-left">
                      <TbBrandJavascript size={60} />
                    </div>
                    <div className="icon-side1">
                      <TbBrandRedux size={60} />
                    </div>
                    <div className="icon-side2">
                      <TbBrandTailwind size={60} />
                    </div>
                    <div className="icon-side3">
                      <RiHtml5Line size={60} />
                    </div>
                    <div className="icon-side4">
                      <SiExpress size={60} />
                    </div>
                    <div className="icon-side5">
                      <SiNodedotjs size={60} />
                    </div>
                    <div className="icon-side6">
                      <SiMongodb size={60} />
                    </div>
                    <div className="icon-side7">
                      <SiMysql size={60} />
                    </div>
                    <div className="icon-side8">
                      <SiPython size={60} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Skills;
