import { useState } from 'react';

import BrownAdd from '../../assets/icons/ic_add_brown.svg';
import GrayCheck from '../../assets/icons/ic_check_gray.svg';
import GrayClose from '../../assets/icons/ic_close_gray.svg';
import Flag from '../../assets/icons/ic_flag.svg';
import OurButton from '../../components/button';
import { Subtask } from '../../components/subtask';
import '../main padding top.css';

export const Step2 = ({ setStep }: { setStep: (step: number) => void }) => {
  const [cardEditorVisible, setCardEditorVisible] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [newCardVisible, setNewCardVisible] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDescription, setNewCardDescription] = useState('');
  const [newCardDueDate, setNewCardDueDate] = useState('');

  const [diaryDueDate, setDiaryDueDate] = useState('');

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
      completed: false,
    },
    {
      title: '밤샘을 2시작하기',
      description: '밤22222222222222합니다.',
      dueDate: '03:37',
      completed: false,
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
    <div className="w-[1640px] h-full bg-[#0f0909] px-32 py-28 inline-flex flex-col justify-between items-start overflow-hidden main">
      <div className="inline-flex justify-start items-end gap-[100px]">
        <div className="inline-flex flex-col justify-start items-start gap-[31px]">
          <div className="w-[660px] inline-flex justify-start items-center gap-3">
            <div className="flex justify-start items-center gap-[5px]">
              <div className="justify-start text-white text-5xl font-bold font-['Inter']">
                오늘
              </div>
            </div>
            <div className="flex justify-center items-center gap-[5px]">
              <div className="justify-start text-white text-[32px] font-medium font-['Inter']">
                의 목표
              </div>
            </div>
            <div className="w-[450px] px-10 py-5 rounded-[20px] flex justify-center items-center gap-2.5">
              <div className="justify-start text-white text-2xl font-semibold font-['Inter']">
                UNTIL
              </div>
              <input
                className="justify-start text-white text-2xl font-normal font-['Inter'] underline"
                placeholder="날짜를 입력하세요.."
                type="datetime-local"
                value={diaryDueDate}
                onChange={(e) => {
                  setDiaryDueDate(e.target.value);
                }}
              />
            </div>
          </div>

          {/* Task List */}
          <div className="h-[766px] p-2.5 flex flex-col justify-start items-center gap-[30px] overflow-scroll">
            {cards.map((card, index) => (
              <Subtask
                key={index}
                dataCheckboxExists={false}
                dataBoxChecked="unchecked"
                archived={false}
                title={card.title}
                content={card.description}
                dueDate={card.dueDate}
                onClick1={() => {
                  setNewCardVisible(false);
                  setCardEditorVisible(true);
                  setNewCardTitle(card.title);
                  setNewCardDescription(card.description);
                  setNewCardDueDate(card.dueDate);
                  setEditIndex(index);
                }}
                onClick3={(e) => {
                  e.stopPropagation();
                  handleDeleteCard(index);
                }}
              />
            ))}
          </div>
        </div>
        <div className="h-[855px] inline-flex flex-col justify-center items-end gap-8">
          {/* New Task */}
          {!newCardVisible && !cardEditorVisible && (
            <button
              onClick={() => {
                setNewCardVisible(true);
              }}
              className="w-[472px] h-full px-10 py-[60px] bg-[#170d0d] rounded-[30px] outline outline-1 outline-offset-[-0.50px] outline-[#685e5e] flex flex-col justify-center items-center gap-[30px]"
            >
              <div className="w-[269px] inline-flex justify-between items-center">
                <div className="justify-start text-[#685e5e] text-[32px] font-normal font-['Inter']">
                  새 항목 추가하기
                </div>
                <div className="w-8 h-8 relative overflow-hidden">
                  <img src={BrownAdd} alt="Add" className="w-8 h-8" />
                </div>
              </div>
            </button>
          )}
          {newCardVisible && !cardEditorVisible && (
            <div className="w-[472px] self-stretch px-10 pt-[60px] pb-[30px] bg-[#242121] rounded-[30px] outline outline-1 outline-[#685e5e] inline-flex flex-col gap-[30px]">
              <div className="self-stretch flex flex-col justify-start items-start gap-[30px]">
                <input
                  className="w-[380px] justify-start text-[#c7c7c7] text-[40px] font-bold font-['Inter']"
                  placeholder="제목을 입력하세요.."
                  value={newCardTitle}
                  onChange={(e) => {
                    setNewCardTitle(e.target.value);
                  }}
                />
                <div className="self-stretch flex flex-col justify-center items-start gap-5">
                  <div className="self-stretch inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-white text-2xl font-semibold font-['Inter']">
                      마감 기한
                    </div>
                    <input
                      className="w-[277px] flex-1 justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']"
                      placeholder="날짜를 입력하세요.."
                      type="datetime-local"
                      value={newCardDueDate}
                      onChange={(e) => {
                        setNewCardDueDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-[#685e5e]"></div>
              <textarea
                className="w-[392px] h-[389px] text-start items-start justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']"
                placeholder="설명을 추가하세요.."
                value={newCardDescription}
                onChange={(e) => {
                  setNewCardDescription(e.target.value);
                }}
              />

              {/* Buttons */}
              <div className="w-full items-end justify-end mt-0 h-16 flex-row inline-flex gap-5">
                <button
                  onClick={() => {
                    setNewCardVisible(false);
                    setNewCardTitle('');
                    setNewCardDescription('');
                    setNewCardDueDate('');
                  }}
                  className="w-16 h-16 relative bg-[#584d4d] rounded-[32px] overflow-hidden"
                >
                  <div className="w-10 h-10 left-[12px] top-[12px] absolute overflow-hidden">
                    <img src={GrayClose} alt="Close" className="w-10 h-10" />
                  </div>
                </button>
                <button
                  onClick={() => {
                    const updatedCards = [...cards];
                    updatedCards.push({
                      title: newCardTitle,
                      description: newCardDescription,
                      dueDate: newCardDueDate,
                      completed: false,
                    });
                    setCards(updatedCards);
                    setNewCardVisible(false);
                    setNewCardTitle('');
                    setNewCardDescription('');
                    setNewCardDueDate('');
                  }}
                  className="w-16 h-16 relative bg-[#584d4d] rounded-[32px] overflow-hidden"
                >
                  <div className="w-8 h-8 left-[16px] top-[16px] absolute overflow-hidden">
                    <img src={GrayCheck} alt="Check" className="w-8 h-8" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Card Editor */}
          {cardEditorVisible && (
            <div className="w-[472px] self-stretch px-10 pt-[60px] pb-[30px] bg-[#242121] rounded-[30px] outline outline-1 outline-[#685e5e] inline-flex flex-col gap-[30px]">
              <div className="self-stretch flex flex-col justify-start items-start gap-[30px]">
                <input
                  className="w-[380px] justify-start text-[#c7c7c7] text-[40px] font-bold font-['Inter']"
                  placeholder="제목을 입력하세요.."
                  value={newCardTitle}
                  onChange={(e) => {
                    setNewCardTitle(e.target.value);
                  }}
                />
                <div className="self-stretch flex flex-col justify-center items-start gap-5">
                  <div className="self-stretch inline-flex justify-start items-center gap-5">
                    <div className="justify-start text-white text-2xl font-semibold font-['Inter']">
                      마감 기한
                    </div>
                    <input
                      className="w-[277px] flex-1 justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']"
                      placeholder="날짜를 입력하세요.."
                      type="datetime-local"
                      value={newCardDueDate}
                      onChange={(e) => {
                        setNewCardDueDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-[#685e5e]"></div>
              <textarea
                className="w-[392px] h-[389px] text-start items-start justify-start text-[#c7c7c7] text-2xl font-normal font-['Inter']"
                placeholder="설명을 추가하세요.."
                value={newCardDescription}
                onChange={(e) => {
                  setNewCardDescription(e.target.value);
                }}
              />

              {/* Buttons */}
              <div className="w-full items-end justify-end mt-0 h-16 flex-row inline-flex gap-5">
                <button
                  onClick={() => {
                    setNewCardVisible(false);
                    setCardEditorVisible(false);
                    setNewCardTitle('');
                    setNewCardDescription('');
                    setNewCardDueDate('');
                    setEditIndex(null);
                  }}
                  className="w-16 h-16 relative bg-[#584d4d] rounded-[32px] overflow-hidden"
                >
                  <div className="w-10 h-10 left-[12px] top-[12px] absolute overflow-hidden">
                    <img src={GrayClose} alt="Close" className="w-10 h-10" />
                  </div>
                </button>
                <button
                  onClick={() => {
                    if (editIndex === null) return;
                    const updatedCards = [...cards];
                    updatedCards[editIndex] = {
                      title: newCardTitle,
                      description: newCardDescription,
                      dueDate: newCardDueDate,
                      completed: false,
                    };
                    setCards(updatedCards);
                    setNewCardVisible(false);
                    setCardEditorVisible(false);
                    setNewCardTitle('');
                    setNewCardDescription('');
                    setNewCardDueDate('');
                    setEditIndex(null);
                  }}
                  className="w-16 h-16 relative bg-[#584d4d] rounded-[32px] overflow-hidden"
                >
                  <div className="w-8 h-8 left-[16px] top-[16px] absolute overflow-hidden">
                    <img src={GrayCheck} alt="Check" className="w-8 h-8" />
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Start Button */}
          <button
            onClick={() => {
              localStorage.setItem('step', '3');
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
