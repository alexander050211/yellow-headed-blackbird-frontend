import { Sidebar } from '../components/sidebar.tsx';
import { getDiaries } from '../functions/getDiaries.tsx';

export const Archive = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 bg-[#f5f5f5]">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl font-bold">Archive Page</h1>
          <button onClick={getDiaries}>asdf</button>
        </div>
      </div>
    </div>
  );
};

export default Archive;
