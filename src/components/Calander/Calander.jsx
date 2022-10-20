import Calendar from "react-calendar";
import { useState } from "react";

const ReactCalendar = () => {
    const[date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }
    return (
    <div>
        <Calendar onChange={onChange} value={date} />
    </div>
    );
};

export default ReactCalendar