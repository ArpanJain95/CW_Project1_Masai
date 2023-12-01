import React, {useState} from "react";
import './DashComp1.css'
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enIN from 'date-fns/locale/en-IN'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AddEventPop } from './AddEventPop';

const locales = {
    "en-IN": enIN,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const events = [
    {
        title: "Meeting",
        allDay: true,
        start: new Date(2023,11,0),
        end: new Date(2023,11,0)
    },
    {
        title: "Project",
        allDay: false,
        start: new Date(2023,11,0),
        end: new Date(2023,11,2)
    }
]

export const DashComp1 = () => {
    // const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const [allEvents, setAllEvents] = useState(events)
    const [addEventPop, setAddEventPop] = useState(false);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
        setAddEventPop(false);
    }

    return (
        <div className='dashContainer'>
            <div className="popContainer">
                <button className='dashAddEventButton' onClick={() => setAddEventPop(!addEventPop)}>
                    Add Project
                </button>
                {addEventPop && <AddEventPop onAddEvent={handleAddEvent} events={allEvents} />}
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500, margin: "50px"}}
            />
        </div>
    )
}