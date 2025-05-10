import { Sidebar } from "../../components/sidebar.tsx";

export const Current = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex-1 bg-[#f5f5f5]">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-2xl font-bold">Archive Page</h1>
        </div>
      </div>
    </div>
  );
};

export default Current;
