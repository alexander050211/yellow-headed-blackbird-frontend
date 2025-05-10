import { Sidebar } from '../components/sidebar.tsx';
import { Calendar } from '../components/calendar.tsx';

export const Archive = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-screen flex flex-row bg-[#0F0909]">
        <Calendar/>
      </div>
    </div>
  );
};

export default Archive;
