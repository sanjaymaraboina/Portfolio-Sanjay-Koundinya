import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./Services.scss";
// import userImg from "../../assets/userinterface2.jpg";
// import responsiveImg from "../../assets/Responsive.jpg";
// import clientImg from "../../assets/client1.jpg";
// import performImg from "../../assets/perfomance1.jpg";

const About = () => {
  const { ref: animatedRef, inView } = useInView({
    threshold: 0.5,
  });

  const animatedSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(500px)",
  });
  const animatedSpringLeft = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translateY(0) translateX(0)"
      : "translateY(500px) translateX(-500px)",
  });

  return (
    <div className="services" ref={animatedRef} id="services">
      <animated.div className="textContainer" style={animatedSpring}>
        <p>
          I specialize in creating websites that help your <br />
          brand grow and move forward
        </p>
        <hr />
      </animated.div>
      <animated.div className="titleContainer" style={animatedSpringLeft}>
        <div className="title">
          <h1 className="animate-charcter">
            <b style={{ color: "orange" }}>Creative</b> Designs
          </h1>
          <h1>
            <b style={{ color: "orange" }}>For Your</b> Websites.
          </h1>
        </div>
      </animated.div>
      <animated.div className="containerImg" style={animatedSpring}>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3d606a140168573.623c88905db96.png"
              alt=""
            />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpringLeft}>
              <h2 style={{ color: "#009688" }}>Full stack Development</h2>
              <p>
                I build full-stack applications, combining visually appealing
                front-end designs with robust back-end functionality using HTML,
                CSS, JavaScript, React, Node.js, and MySQL. My focus is on
                creating responsive, user-friendly solutions that are both
                efficient and scalable.
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img
              src="https://outreachmonks.com/wp-content/uploads/2022/06/1403.i003.056.S.m004.c11.responsive_design-scaled.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpringLeft}>
              <h2 style={{ color: "#ff3e7f" }}>Responsive Web Design</h2>
              <p>
                I specialize in making websites and web apps responsive across
                different devices like smartphones, tablets, and desktops. By
                utilizing techniques such as media queries, flexbox, and CSS
                grid, I ensure a consistent user experience regardless of screen
                size or resolution.
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img
              src="https://spinnekopdotblog.wordpress.com/wp-content/uploads/2023/03/clientsidescripting.png"
              alt=""
            />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpring}>
              <h2 style={{ color: "#03a9f4" }}>Client-Side Scripting</h2>
              <p>
                I'm skilled in JavaScript and popular frontend frameworks like
                React.js,Redux, Material UI Using these tools, I enhance web
                pages with interactivity, dynamic features like form validation,
                animations, and real-time updates. Leveraging JavaScript
                frameworks, I efficiently create complex user interfaces and
                single-page applications (SPAs).
              </p>
            </animated.div>
          </div>
        </animated.div>
        <animated.div className="card" style={animatedSpring}>
          <div className="image">
            <img src="https://pandorafms.com/blog/wp-content/uploads/2017/12/web-performance-optimization-featured.png" alt="" />
          </div>
          <div className="content">
            <animated.div className="box" style={animatedSpring}>
              <h2 style={{ color: "#ffd700" }}>Performance Optimization</h2>
              <p>
                I focus on optimizing websites and web apps for speed and
                seamless user experiences. Utilizing techniques like code
                minification, bundling, lazy loading, and image optimization, I
                I leverage performance monitoring tools to pinpoint and resolve
                bottlenecks, ensuring optimal performance across devices and
                networks
              </p>
            </animated.div>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default About;
