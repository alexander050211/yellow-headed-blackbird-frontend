import { Sidebar } from '../components/sidebar.tsx';
import { Calendar } from '../components/calendar.tsx';
import { useState } from 'react';

export const Archive = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayingDate, setDisplayingDate] = useState(new Date());

  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-screen flex flex-row bg-[#0F0909]">
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} diplayingDate={displayingDate} setDisplayingDate={setDisplayingDate}/>
      </div>
    </div>
  );
};

export default Archive;
