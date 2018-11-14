import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        console.log(project);
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Project-showcase">
        {projectItems}
      </div>
    );
  }
}

export default Projects;