// Write your code here

import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div>
      <img className="project-img" src={imageUrl} alt="project" />
      <div className="project-name-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-fill-container">
          <AiFillCalendar className="fill-calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div>
        <p className="description">{description}</p>
        <a href={projectUrl} className="visit-an-ele">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
