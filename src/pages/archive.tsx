import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../functions/getUserInfo';

import OurButton from '../components/button.tsx';
import { Sidebar } from '../components/sidebar.tsx';
import { Calendar } from '../components/calendar.tsx';
import Subtask from '../components/subtask.tsx';
import './main padding top.css';

export const Archive = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayingDate, setDisplayingDate] = useState(new Date());
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
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
      dueDate: '03:37',
      completed: false,
    },
    {
      title: '밤샘을 3시작하기',
      description: '밤샘을 시작33333333정해야 합니다.',
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

  const [userInfo, setUserInfo] = useState({
    username: '',
    nickname: '',
    loggedin: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      {!userInfo.loggedin && (
        <div className="bg-[#0f0909] w-[1640px] h-[1079px] px-32 py-28 inline-flex flex-col justify-center items-center overflow-hidden">
          <div className="flex flex-col justify-center items-center gap-14">
            <div className="text-center justify-start text-white text-[32px] font-normal font-['Inter']">
              서비스를 이용하시려면 로그인해주세요
            </div>
            <div className="inline-flex justify-start items-start gap-14 flex-wrap content-start">
              <OurButton
                dataProperty1="btn-stroke"
                dataIconExists={false}
                dataInput="회원가입하기"
                onClick={() => {
                  navigate('/register');
                }}
              />

              <OurButton
                dataProperty1="btn-filled"
                dataIconExists={false}
                dataInput="로그인하러 가기"
                onClick={() => {
                  navigate('/login');
                }}
              />
            </div>
          </div>
        </div>
      )}
      {userInfo.loggedin && (
        <div className="w-full h-screen flex flex-row bg-[#0F0909]">
          <div className="w-[1640px] h-full bg-[#0f0909] px-32 py-28 inline-flex flex-col justify-between items-start overflow-hidden main">
            <div className="inline-flex justify-start items-center gap-[100px]">
              <Calendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                diplayingDate={displayingDate}
                setDisplayingDate={setDisplayingDate}
              />
              <div className="inline-flex flex-col justify-start items-start gap-[31px]">
                <div className="w-[720px] inline-flex justify-start items-center gap-3">
                  <div className="flex justify-start items-center gap-[5px]">
                    <div className="justify-start text-white text-5xl font-bold font-['Inter']">
                      {selectedDate.getFullYear()}
                    </div>
                    <div className="justify-start text-white text-3xl font-medium font-['Inter']">
                      년
                    </div>
                  </div>

                  <div className="flex justify-start items-center gap-[5px]">
                    <div className="justify-start text-white text-5xl font-bold font-['Inter']">
                      {(selectedDate.getMonth() + 1)
                        .toString()
                        .padStart(2, '0')}
                    </div>
                    <div className="justify-start text-white text-3xl font-medium font-['Inter']">
                      월
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-[5px]">
                    <div className="justify-start text-white text-5xl font-bold font-['Inter']">
                      {selectedDate.getDate()}
                    </div>
                    <div className="justify-start text-white text-3xl font-medium font-['Inter']">
                      일의 목표
                    </div>
                  </div>
                </div>
                {/* Task List */}
                <div className="h-[766px] p-2.5 flex flex-col justify-start items-center gap-[30px] overflow-scroll">
                  {cards.map((card, index) => (
                    <Subtask
                      key={index}
                      dataCheckboxExists={false}
                      dataBoxChecked="unchecked"
                      archived={true}
                      title={card.title}
                      content={card.description}
                      dueDate={card.dueDate}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
export default Archive;
