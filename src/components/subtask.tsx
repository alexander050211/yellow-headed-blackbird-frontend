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
    <button
      onClick={onClick1}
      className="w-[640px] px-10 py-5 bg-[#242121] rounded-[30px] outline outline-1 outline-[#584d4d] inline-flex justify-start items-center"
    >
      <div className="w-[560px] flex justify-start items-center gap-5">
        <div className="inline-flex flex-col justify-start items-start gap-2.5">
          <div className="w-[442px] inline-flex justify-center items-center gap-[30px]">
            {dataCheckboxExists && (
              <button
                onClick={onClick2}
                className="w-6 h-6 relative"
              >
                <img
                  src={dataBoxChecked === 'checked' ? Checkbox1 : Checkbox0}
                  alt="Checkbox"
                  className="w-6 h-6"
                />
              </button>
            )}
            <div className="w-[360px] flex-1 inline-flex flex-col justify-start items-start gap-2.5">
              <div className={`${dataBoxChecked === 'checked' ? 'line-through' : ''} w-[360px] h-[34px] text-start text-white text-[28px] font-normal font-['Inter'] truncate`}>
                {title}
              </div>
              <div className={`${dataBoxChecked === 'checked' ? 'line-through' : ''} w-[360px] h-[23px] text-start text-[#c7c7c7] text-base font-normal font-['Istok_Web'] truncate`}>
                {content}
              </div>
            </div>
          </div>
        </div>
        {!archived && (
          <div className="justify-start text-[#c7c7c7] text-xl font-normal font-['Inter']">
            {dueDate.slice(-5)}
          </div>
        )}
        {!archived && (
          <button
            onClick={onClick3}
            className="w-6 h-6 relative overflow-hidden"
          >
            <img src={Trash} alt="Trash" className="w-6 h-6" />
          </button>
        )}
      </div>
    </button>
  );
};

export default Subtask;
