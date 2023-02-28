// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props

  const {courseTitle, description, tagsList, duration} = courseDetails

  console.log(tagsList)

  return (
    <div className="all-container">
      <div className="course-clock-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="circle-clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tag-list-container">
        {tagsList.map(eachItem => (
          <div key={eachItem.id}>
            <button type="button" className="course-item-btn">
              {eachItem.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
