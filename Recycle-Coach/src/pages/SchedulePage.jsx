import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function SchedulePage() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h1>Collection Schedule</h1>
      <Calendar onChange={setDate} value={date} />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
}

export default SchedulePage;
