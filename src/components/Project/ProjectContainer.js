import React from "react";
import Projects from "./Projects";
import "./ProjectContainer.css";

class ProjectContainer extends React.Component {
  render() {
    return (
      <div className='projContainer'>
        <p className='projContainerHeader'>.projects.</p>
        <p className='projContainerSubHeader'>
          Here's a selection of what I've been working on.
        </p>
        <hr id='header-break'></hr>
        <Projects />
      </div>
    );
  }
}

export default ProjectContainer;
