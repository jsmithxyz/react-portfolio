import React from "react";
import Projects from "./Projects";
import "./ProjectContainer.css";

class ProjectContainer extends React.Component {
  render() {
    return (
      <div className='projContainer'>
        <Projects />
      </div>
    );
  }
}

export default ProjectContainer;
