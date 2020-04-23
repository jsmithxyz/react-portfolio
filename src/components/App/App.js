import React, { Fragment } from "react";
import StickyFooter from "../Footer/StickyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "../Navbar/Navbar";
import JumbotronComp from "../Jumbotron/Jumbotron";
import projects from "../../myprojects";
import ProjectContainer from "../Project/ProjectContainer";
import Projects from "../Project/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";

class App extends React.Component {
  state = {
    projects: {},
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    this.setState({ projects });
  };

  render() {
    return (
      <Fragment>
        <NavBarComp />
        <JumbotronComp />
        <Skills />
        <ProjectContainer>
          <Projects />
        </ProjectContainer>
        <Contact />
        <StickyFooter />
      </Fragment>
    );
  }
}

export default App;
