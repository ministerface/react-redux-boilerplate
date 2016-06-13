import React, { Component } from 'react';
import Project from './Project';


export default class ProjectsGrid extends Component {
  constructor(props) {
    super(props);


  }
  render() {

    const { projects } = this.props;

    const projectsTemplate = projects.map((item, index) => {
      return (
        <Project key={item.id} project={item} index={index} {...this.props}/>
      )
    });



    return (
      <div>
        {projectsTemplate}
      </div>

    );

  }

}
