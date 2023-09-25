import React from "react";
import { smallProject } from "../components/ToolsData";

const SProjects = () => {
  return (
    <div id="small-projs">
      {smallProject.map((small) => (
        <div key={small.id} className="small-projects">
          <a href={small.smallProjectLink}>
            <img src={small.smallProjectImg} alt="" />
            <h2>{small.smallProjectTitle}</h2>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SProjects;
