import React from 'react';

import Checkbox0 from '../assets/icons/ic_checkbox_0.svg';
import Checkbox1 from '../assets/icons/ic_checkbox_1.svg';
import Trash from '../assets/icons/ic_trash.svg';

interface SubtaskProps {
  dataCheckboxExists: boolean;
  dataBoxChecked: string;
  archived: boolean;
  title: string;
  content: string;
  dueDate: string;
  onClick1?: () => void;
  onClick2?: () => void;
  onClick3?: () => void;
}

export const Subtask: React.FC<SubtaskProps> = ({
  dataCheckboxExists,
  dataBoxChecked,
  archived,
  title,
  content,
  dueDate,
  onClick1,
  onClick2,
  onClick3,
}) => {
  return (
    <button onClick={onClick1} className="w-[640px] px-10 py-5 bg-[#242121] rounded-[30px] outline outline-1 outline-[#584d4d] inline-flex justify-start items-center">
      <div className="w-[560px] flex justify-start items-center gap-5">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-center items-center gap-[30px]">
            {dataCheckboxExists && (
              <button onClick={onClick2} className="w-6 h-6 relative overflow-hidden">
                <img src={dataBoxChecked === 'checked' ? Checkbox1 : Checkbox0} alt="Checkbox" className="w-6 h-6" />
              </button>
            )}
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5">
              <div className={`${dataBoxChecked === 'checked' ? 'line-through' : ''}
              self-stretch justify-start text-white text-[28px] font-normal font-['Inter']`}>{title}</div>
              <div className={`${dataBoxChecked === 'checked' ? 'line-through' : ''}
              self-stretch justify-start text-[#c7c7c7] text-base font-normal font-['Istok_Web']`}>{content}</div>
            </div>
          </div>
        </div>
        {!archived && <div className="justify-start text-[#c7c7c7] text-xl font-normal font-['Inter']">{dueDate}</div>}
        {!archived && <button onClick={onClick3} className="w-6 h-6 relative overflow-hidden">
            <div className="w-4 h-[18px] left-[4px] top-[3px] absolute bg-[#969696]">
              <img src={Trash} alt="Trash" className="w-4 h-[18px]" />
            </div>
        </button>}
      </div>
    </button>
  );
};

export default Subtask;