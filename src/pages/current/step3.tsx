import moment from 'moment';
import { useEffect, useState } from 'react';

import CheckButton from '../../assets/buttons/btn_check.svg';
import PauseButton from '../../assets/buttons/btn_pause.svg';
import PlayButton from '../../assets/buttons/btn_play.svg';
import PlusButton from '../../assets/buttons/btn_plus.svg';
import Subtask from '../../components/subtask';

function formatMMSS(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // padStart ensures two digits
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  return `${mm}:${ss}`;
}

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

  moment().format();
  const [currentTime, setCurrentTime] = useState(moment().toISOString());

  console.debug(setCurrentTime);

  const startTime = moment(currentTime).subtract(1, 'minutes').toISOString();
  const endTime = moment(currentTime).add(3, 'minutes').toISOString();
  const totalTime = moment(endTime).diff(moment(startTime), 'seconds');

  const [progress, setProgress] = useState(0);
  console.debug(progress);

  const [timeLeft, setTimeLeft] = useState(
    moment(endTime).diff(moment(currentTime), 'seconds'),
  );

  const [isPaused, setIsPaused] = useState(false);
  const [restStart, setRestStart] = useState(moment().toISOString());
  const [restEnd, setRestEnd] = useState(moment().toISOString());
  const [totalRest, setTotalRest] = useState(
    moment(restEnd).diff(moment(restStart), 'seconds'),
  );
  const [restLeft, setRestLeft] = useState(
    moment(restEnd).diff(moment(currentTime), 'seconds'),
  );
  const [restProgress, setRestProgress] = useState(0);
  console.debug(restProgress);

  const handleTimeUp = () => {
    setStep(4);
  };

  const handleRestTimeUp = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();

      // Main timer
      const secsLeft = moment(endTime).diff(now, 'seconds');
      setTimeLeft(secsLeft);
      setProgress(() =>
        Math.min(
          100,
          ((totalTime - now.diff(moment(startTime), 'seconds')) / totalTime) *
            100,
        ),
      );
      if (secsLeft <= 0) handleTimeUp();

      // Rest timer (only while paused)
      if (isPaused) {
        const restSecsLeft = moment(restEnd).diff(now, 'seconds');
        setRestLeft(restSecsLeft);
        setRestProgress(() =>
          Math.min(
            100,
            ((totalRest - now.diff(moment(restStart), 'seconds')) / totalRest) *
              100,
          ),
        );
        if (restSecsLeft <= 0) handleRestTimeUp();
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, restStart, restEnd, totalRest, endTime, handleTimeUp, totalTime, startTime]);

  return (
    <div className="w-[1640px] h-[1079px] bg-[#0f0909] px-32 py-28 inline-flex flex-col justify-between items-start overflow-hidden">
      <div className="inline-flex justify-start items-center gap-[100px]">
        <div className="inline-flex flex-col justify-start items-center gap-20">
          <div data-time-left="paused" className="w-[472px] h-[472px] relative">
            {/* Circle */}
            <div
              className={`w-[472px] h-[472px] left-0 top-0 absolute ${!isPaused ? 'bg-[#685e5e]' : 'bg-[#7e809b]'} rounded-full`}
            ></div>
            <div className="w-[392px] h-[392px] left-[40px] top-[40px] absolute bg-[#0f0909] rounded-full"></div>

            {/* Inner Circle */}
            {isPaused && (
              <div className="left-[130px] top-[146.50px] absolute inline-flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col justify-start items-center gap-2.5">
                  <div className="justify-start text-[#c7c7c7] text-4xl font-normal font-['Istok_Web']">
                    {formatMMSS(restLeft)} 남음
                  </div>
                  <div className="justify-start text-white text-5xl font-normal font-['Inter']">
                    일시정지됨
                  </div>
                </div>
                <div className="self-stretch px-2.5 inline-flex justify-center items-center gap-5">
                  <button
                    onClick={() => {
                      setIsPaused(false);
                    }}
                    className="w-10 h-10 relative overflow-hidden"
                  >
                    <img src={PlayButton} alt="Play" className="w-10 h-10" />
                  </button>
                  <button
                    onClick={() => {
                      setRestEnd(
                        moment(restEnd).add(5, 'minutes').toISOString(),
                      );
                      setTotalRest(
                        moment(restEnd).diff(moment(restStart), 'seconds'),
                      );
                      setRestLeft(
                        moment(restEnd).diff(moment(currentTime), 'seconds'),
                      );
                      setRestProgress(0);
                    }}
                    className="w-10 h-10 relative overflow-hidden"
                  >
                    <img src={PlusButton} alt="Plus" className="w-10 h-10" />
                  </button>
                  <button
                    onClick={() => {
                      setStep(4);
                    }}
                    className="w-10 h-10 relative overflow-hidden"
                  >
                    <img src={CheckButton} alt="Check" className="w-10 h-10" />
                  </button>
                </div>
              </div>
            )}
            {!isPaused && (
              <div className="h-[120px] left-[128px] top-[176.50px] absolute inline-flex flex-col justify-center items-center gap-5">
                <div className="justify-start text-white text-5xl font-normal font-['Inter']">
                  {formatMMSS(timeLeft)} 남음
                </div>
                <div className="self-stretch px-2.5 inline-flex justify-center items-center gap-5">
                  <button
                    onClick={() => {
                      setIsPaused(true);
                      setRestStart(moment(currentTime).toISOString());
                      setRestEnd(
                        moment(currentTime).add(10, 'minutes').toISOString(),
                      );
                      setTotalRest(600);
                      setRestLeft(
                        moment(restEnd).diff(moment(currentTime), 'seconds'),
                      );
                      setRestProgress(0);
                    }}
                    className="w-10 h-10 relative overflow-hidden"
                  >
                    <img src={PauseButton} alt="Pause" className="w-10 h-10" />
                  </button>
                  <button
                    onClick={() => {
                      setStep(4);
                    }}
                    className="w-10 h-10 relative overflow-hidden"
                  >
                    <img src={CheckButton} alt="Check" className="w-10 h-10" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Caffeine */}
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
                onClick1={() => {
                  const updatedCards = [...cards];
                  if (updatedCards[index] === undefined) return;
                  updatedCards[index].completed =
                    !updatedCards[index].completed;
                  setCards(updatedCards);
                }}
                onClick2={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  const updatedCards = [...cards];
                  if (updatedCards[index] === undefined) return;
                  updatedCards[index].completed =
                    !updatedCards[index].completed;
                  setCards(updatedCards);
                }}
                onClick3={(e) => {
                  e.stopPropagation();
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
