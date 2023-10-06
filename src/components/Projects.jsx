import React from 'react'
import {projects} from './ToolsData'

const Projects = () => {

  


  return (
    <div className='projects-main-div'>
      {projects.map((project) =>(
        <div key={project.id} className="projects">
         <p className='projects-tools'>
      {project.projectsTools}  
         </p>
         <button id='visit-site'><a href={project.gotoProjects}>visit site</a></button>
       <a href={project.gotoProjects}><img src={project.realProjects}   id='real-projects' alt=""/></a>
        </div>
      ))}
    </div>
  )
}

export default Projects