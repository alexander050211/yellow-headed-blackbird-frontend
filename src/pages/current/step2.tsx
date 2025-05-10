import { useState } from "react";

import BrownAdd from "../../assets/icons/ic_add_brown.svg";
import Flag from "../../assets/icons/ic_flag.svg";
import OurButton from "../../components/button"
import { Subtask } from "../../components/subtask";

export const Step2 = ({ setStep }: { setStep: (step: number) => void }) => {
  const [newCardVisible, setNewCardVisible] = useState(false);

  return (
    <div className="w-[1640px] h-full bg-[#0f0909] px-32 py-28 inline-flex flex-col justify-between items-start overflow-hidden">
      <div className="inline-flex justify-start items-end gap-[100px]">
        <div className="inline-flex flex-col justify-start items-start gap-[31px]">
          <div className="w-[660px] inline-flex justify-start items-center gap-3">
            <div className="flex justify-start items-center gap-[5px]">
              <div className="justify-start text-white text-5xl font-bold font-['Inter']">오늘</div>
            </div>
            <div className="flex justify-center items-center gap-[5px]">
              <div className="justify-start text-white text-[32px] font-medium font-['Inter']">의 목표</div>
            </div>
            <div className="w-[450px] px-10 py-5 rounded-[20px] flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-2xl font-semibold font-['Inter']">UNTIL</div>
              <div className="justify-start text-white text-2xl font-normal font-['Inter'] underline">2025.05.24 03:37</div>
            </div>
          </div>

          {/* Task List */}
          <div className="h-[766px] p-2.5 flex flex-col justify-start items-center gap-[30px] overflow-hidden">
            <Subtask
              dataCheckboxExists={false}
              dataBoxChecked="unchecked"
              archived={false}
              title="밤샘을 시작하기"
              content="밤샘을 시작하기 위해서는 목표를 설정해야 합니다."
              dueDate="03:37"
              onClick1={() => {
                setNewCardVisible(false);
                localStorage.setItem("step", "3");
                setStep(3);
              }}
              onClick2={(e) => { e.stopPropagation(); }}
              onClick3={(e) => { e.stopPropagation(); }}
            />
            <Subtask
              dataCheckboxExists={true}
              dataBoxChecked="unchecked"
              archived={false}
              title="밤샘을 시작하기"
              content="밤샘을 시작하기 위해서는 목표를 설정해야 합니다."
              dueDate="03:37"
              onClick1={() => {
                setNewCardVisible(false);
                localStorage.setItem("step", "3");
                setStep(3);
              }}
              onClick2={(e) => { e.stopPropagation(); }}
              onClick3={(e) => { e.stopPropagation(); }}
            />
            <Subtask
              dataCheckboxExists={false}
              dataBoxChecked="unchecked"
              archived={true}
              title="밤샘을 시작하기"
              content="밤샘을 시작하기 위해서는 목표를 설정해야 합니다."
              dueDate="03:37"
              onClick1={() => {
                setNewCardVisible(false);
                localStorage.setItem("step", "3");
                setStep(3);
              }}
              onClick2={(e) => { e.stopPropagation(); }}
              onClick3={(e) => { e.stopPropagation(); }}
            />
          </div>
        </div>
        <div className="h-[855px] inline-flex flex-col justify-center items-end gap-8">
          {/* New Task */}
          <button
            onClick={() => {
              setNewCardVisible(true);
            }}
            className="w-[472px] h-full px-10 py-[60px] bg-[#170d0d] rounded-[30px] outline outline-1 outline-offset-[-0.50px] outline-[#685e5e] flex flex-col justify-center items-center gap-[30px]"
          >
            <div className="w-[269px] inline-flex justify-between items-center">
              <div className="justify-start text-[#685e5e] text-[32px] font-normal font-['Inter']">새 항목 추가하기</div>
              <div className="w-8 h-8 relative overflow-hidden">
                <img src={BrownAdd} alt="Add" className="w-8 h-8" />
              </div>
            </div>
          </button>

          {/* Start Button */}
          <button
            onClick={() => {
              localStorage.setItem("step", "3");
              setStep(3);
            }}
            className="w-[472px] h-[49px] px-10 py-2.5 bg-[#685e5e] rounded-[40px] inline-flex justify-center items-center gap-2.5 overflow-hidden"
          >
            <OurButton
              onClick={() => {
                localStorage.setItem('step', '3');
                setStep(3);
              }}
              dataIconExists={true}
              dataProperty1="btn-filled"
              dataInput="밤샘 시작하기"
              img={{
                src: Flag,
                alt: 'Icon',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
