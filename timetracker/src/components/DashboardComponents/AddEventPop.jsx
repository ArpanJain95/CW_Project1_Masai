import React, { useState } from 'react'
import '../DashboardComponents/AddEventPop.css'
import { useAppContext } from '../../contexts/AppContextProvider';
import DatePicker from 'react-datepicker';
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enIN from 'date-fns/locale/en-IN'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

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


export const AddEventPop = ({onAddEvent}) => {
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
    const {userDetails} = useAppContext();
    const userEmail = userDetails.length > 0 ? userDetails[0].email: '';
    const buttonChar = userEmail.charAt(0).toUpperCase();

    const handleAddEvent = () => {
        onAddEvent(newEvent);
    }

    return (
        <div className='popupContainer'>
            <p><button className='popButton5'>{buttonChar}</button>{userEmail}</p>
            <hr />
            <input type="text"
                placeholder='Add Project'
                style={{width: "60px"}}
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
            <br />
            <DatePicker
                placeholderText='Start Date'
                style={{marginRight: "10px"}}
                selected={newEvent.start}
                onChange={(start) => setNewEvent({...newEvent, start})}
            />
            <DatePicker
                placeholderText='End Date'
                selected={newEvent.end}
                onChange={(end) => setNewEvent({...newEvent, end})}
            />
            <br />
            <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add</button>
        </div>
    )
}

export default AddEventPop;