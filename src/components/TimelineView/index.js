// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectDetails={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }

  return (
    <div>
      <div>
        <h1 className="journey-heading">
          MY JOURNEY OF <br />
          CCBP 4.0
        </h1>
      </div>
      <div className="container">
        <Chrono
          items={timelineItemsList}
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
