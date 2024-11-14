import React from "react";
import "./style.scss";

import { FaReact } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { SiCss3 } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandRedux,
 
} from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
import {
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPython,
} from "react-icons/si";

const index = () => {
  return (
    <div>
      <div className="skill-rotate-360">

        <div class="rotatersSkills">
        <div className="icon-text"> <h1 id="text-clr">Frontend</h1></div>

          <div class="rotaterSkillsInner">
            <div className="icon-container">
              <div className="icon-top1">
                <FaReact size={60} />
              </div>
              <div className="icon-bottom">
                <DiBootstrap size={60} />
              </div>
              <div className="icon-right">
                <SiCss3 size={50} />
              </div>
              <div className="icon-left">
                <TbBrandJavascript size={60} />
              </div>
              <div className="icon-side1">
                <TbBrandRedux size={60} />
              </div>
             
              <div className="icon-side3">
                <RiHtml5Line size={60} />
              </div>
              
            </div>
          </div>
        </div>

        <div class="rotatersSkills">
        <div className="icon-text"> <h1 id="text-clr">Backend</h1></div>

        <div class="rotaterSkillsInner">
          <div className="icon-container">
           
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
  );
};

export default index;
