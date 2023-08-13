import React from 'react'
import {VerticalTimeline,VerticalTimelineElement,} from 'react-vertical-timeline-component';
import styles from '../styles/TimeLine.module.css'
import 'react-vertical-timeline-component/style.min.css';
import { timeline_data } from '../Data';

const TimeLine = () => {
  return (
    <>
      <div className={styles.timeline_wrapper}>
        <VerticalTimeline>
        {timeline_data.map((elem) => {
            // let isWorkIcon = elem.icon === "work";
            // let showButton = elem.buttonText !=  undefined && elem.buttonText != null && elem.buttonText != "";
            return (
              <VerticalTimelineElement
              className="sub_element"
              // className="vertical-timeline-element--work"
                key={elem.id} // key props for uniquely identify the card
                date={elem.date} // date props because we want to show date on the other side of the card
                dateClassName="date" // because we want to style the date
                // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              >
              <h3 className="vertical-timeline-element-title" style={{fontFamily:"Gilroy-semibold"}}>Creative Director</h3>
              <h5 className="vertical-timeline-element-subtitle" style={{fontFamily:"Gilroy-regular "}}>{elem.location}</h5>
              <p id="description">{elem.description}</p>
             

              </VerticalTimelineElement>
            );
          })}
          

          
       </VerticalTimeline>
        
      </div>
    </>
  )
}

export default TimeLine