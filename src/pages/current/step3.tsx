import { useState } from 'react';

import Subtask from '../../components/subtask';

export const Step3 = ({ setStep }: { setStep: (step: number) => void }) => {
  interface Card {
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
  }

  const [cards, setCards] = useState<Card[]>([
    {
      title: '밤샘을 1시작하기',
      description: '밤12431234합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 2시작하기',
      description: '밤22222222222222합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
    {
      title: '밤샘을 1시작하기',
      description: '밤12431234합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 2시작하기',
      description: '밤22222222222222합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
    {
      title: '밤샘을 1시작하기',
      description: '밤12431234합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 2시작하기',
      description: '밤22222222222222합니다.',
      dueDate: '03:37',
      completed: true,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
  ]);

  const handleDeleteCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="w-[1640px] h-[1079px] bg-[#0f0909] px-32 py-28 inline-flex flex-col justify-between items-start overflow-hidden">
      <div className="inline-flex justify-start items-center gap-[100px]">
        <div className="inline-flex flex-col justify-start items-center gap-20">
          <div data-time-left="paused" className="w-[472px] h-[472px] relative">
            <div className="w-[472px] h-[472px] left-0 top-0 absolute bg-[#7e809b] rounded-full"></div>
            <div className="w-[472px] h-[472px] left-0 top-0 absolute bg-[#242121] rounded-full"></div>
            <div className="w-[392px] h-[392px] left-[40px] top-[40px] absolute bg-[#0f0909] rounded-full"></div>
            <div className="left-[125px] top-[146.50px] absolute inline-flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-start items-center gap-2.5">
                <div className="justify-start text-[#c7c7c7] text-4xl font-normal font-['Istok_Web']">
                  3:02 남음
                </div>
                <div className="justify-start text-white text-5xl font-normal font-['Inter']">
                  일시정지됨
                </div>
              </div>
              <div className="self-stretch px-2.5 inline-flex justify-center items-center gap-5">
                <div className="w-10 h-10 relative overflow-hidden">
                  <div className="w-[33.33px] h-[33.33px] left-[3.33px] top-[3.33px] absolute bg-[#c7c7c7]"></div>
                </div>
                <div className="w-10 h-10 relative overflow-hidden">
                  <div className="w-[33.33px] h-[33.33px] left-[3.33px] top-[3.33px] absolute bg-[#c7c7c7]"></div>
                </div>
                <div className="w-10 h-10 relative overflow-hidden">
                  <div className="w-[33.33px] h-[33.33px] left-[3.33px] top-[3.33px] absolute bg-[#c7c7c7]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[466px] h-20 bg-[#242121] rounded-[20px] inline-flex justify-start items-center overflow-hidden">
            <div className="flex-1 h-20 px-5 py-2.5 flex justify-center items-center gap-2.5">
              <div className="justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']">
                한 모금
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-[18px] h-5 left-[3px] top-[2px] absolute bg-[#c7c7c7]"></div>
              </div>
            </div>
            <div className="w-px h-[45px] bg-[#685e5e]"></div>
            <div className="flex-1 h-20 px-5 py-2.5 flex justify-center items-center gap-2.5">
              <div className="justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']">
                반샷
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-[18px] h-5 left-[3px] top-[2px] absolute bg-[#c7c7c7]"></div>
              </div>
            </div>
            <div className="w-px h-[45px] bg-[#685e5e]"></div>
            <div className="flex-1 h-20 px-5 py-2.5 flex justify-center items-center gap-2.5">
              <div className="justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']">
                원샷
              </div>
              <div className="w-6 h-6 relative overflow-hidden">
                <div className="w-[18px] h-5 left-[3px] top-[2px] absolute bg-[#c7c7c7]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="inline-flex flex-col justify-start items-start gap-[31px]">
          <div className="w-[660px] inline-flex justify-start items-center gap-3">
            <div className="flex justify-center items-center gap-[5px]">
              <div className="justify-start text-white text-5xl font-bold font-['Inter']">
                오늘
              </div>
              <div className="justify-start text-white text-[32px] font-medium font-['Inter']">
                의 목표
              </div>
            </div>
          </div>

          {/* Task List */}
          <div className="h-[766px] p-2.5 flex flex-col justify-start items-center gap-[30px] overflow-scroll">
            {cards.map((card, index) => (
              <Subtask
                key={index}
                dataCheckboxExists={true}
                dataBoxChecked={card.completed ? 'checked' : 'unchecked'}
                archived={false}
                title={card.title}
                content={card.description}
                dueDate={card.dueDate}
                onClick2={() => {
                  const updatedCards = [...cards];
                  if (updatedCards[index] === undefined) return;
                  updatedCards[index].completed =
                    !updatedCards[index].completed;
                  setCards(updatedCards);
                }}
                onClick3={() => {
                  handleDeleteCard(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
