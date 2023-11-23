import React, { useState } from 'react'
import '../SmallComp/Accordion.css'
import { AcoSlider } from './AcoSlider'

export const Accordion = () => {
    const [accordion, setAccordion]=useState(0)


    const content=[
        {
            title: `Time Tracker`,
            description: `Keep track of your team's work with a time tracking solution that's suitable for everyone, regardlessof their work activities, schedule, location or style.`,
            icon: `schedule`
        },
        {
            title: `Project Management`,
            description: `See the big picture and focus on the work that matters. Get a clear overview of progress to stay on top of everything and prioritize tasks.`,
            icon: `event_available`
        },
        {
            title: `Timesheets`,
            description: `Online timesheets enable your company to comply with internal processes without having to fill out unnecessary paperwork or process time data manually.`,
            icon: `table_rows`
        },
        {
            title: `Attendance Tracking`,
            description: `A dynamic and productive team depends on each of their members, so keeping track of their attendance becomes essential to their overall success.`,
            icon: `groups`
        },
        {
            title: `Time Cards`,
            description: `A solution created to comply with legal requirements without any effort. <br/>Gather, access, and store accurate employee clock-in/out data smoothly.`,
            icon: `assignment`
        },
        {
            title: `Invoicing & Time Reporting`,
            description: `Stand out with visually appealing and accurate time reports to share with your clients. Analyze data to set goals and move your business forward.`,
            icon: `monitoring`
        },
    ]

    const accordionToggle=(index)=>{
        if(accordion===index){
            setAccordion(null)
        }else{
            setAccordion(index)
        }
    }
    return (
        <div className='accordion-wrapper'>
            <div>
                {
                    content.map((item, index)=>(
                        <div className='first-info' key={index}>
                            <header onClick={()=>accordionToggle(index)}>
                                <span class='material-symbols-outlined'>{item.icon}</span>
                                {item.title}
                            </header>
                            <p className={`description ${accordion===index ? 'opentab' : '' }`}>
                                {item.description}
                            </p>
                        </div>
                    ))
                }
            </div>
            <AcoSlider activeAccordionIndex={accordion} className='acoSliderComp' />
        </div>
    )
}