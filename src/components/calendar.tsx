import React from 'react';
import WhiteArrowForward from '../assets/icons/ic_arrow_forward_white.svg';
import WhiteArrowBack from '../assets/icons/ic_arrow_back_white.svg';


interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: (selectedDate: Date) => void;
}

interface CalendarTileProps {
  selected: boolean;
  hasRecord: boolean;
  active: boolean;
  day: number;
}

const CalendarTile: React.FC<CalendarTileProps> = ({
  selected,
  hasRecord,
  active,
  day,
}) => {
  return !active ? (
    <div className="w-14 h-24 p-2.5 inline-flex flex-col justify-center items-center gap-2">
      <div className="justify-start text-zinc-500 text-base font-normal font-['Inter']">
        {day}
      </div>
      {hasRecord ? (
        <div
          data-횟수="빈도1"
          className="w-5 opacity-50 inline-flex justify-center items-center gap-[3px]"
        >
          <div className="w-[5px] h-[5px] bg-red-300 rounded-full" />
        </div>
      ) : (
        <div data-횟수="0회" className="w-5 h-[5px]" />
      )}
    </div>
  ) : selected ? (
    <div className="w-14 h-24 p-2.5 bg-yellow-100 rounded-2xl inline-flex flex-col justify-center items-center gap-2">
      <div className="justify-start text-neutral-900 text-base font-medium font-['Inter']">
        {day}
      </div>
      {hasRecord ? (
        <div
          data-횟수="빈도1"
          className="w-5 inline-flex justify-center items-center gap-[3px]"
        >
          <div className="w-[5px] h-[5px] bg-red-300 rounded-full" />
        </div>
      ) : (
        <div data-횟수="0회" className="w-5 h-[5px]" />
      )}
    </div>
  ) : (
    <div className="w-14 h-24 p-2.5 bg-stone-800 inline-flex flex-col justify-center items-center gap-2">
      <div className="justify-start text-white text-base font-medium font-['Inter']">
        {day}
      </div>
      {hasRecord ? (
        <div
          data-횟수="빈도1"
          className="w-5 inline-flex justify-center items-center gap-[3px]"
        >
          <div className="w-[5px] h-[5px] bg-red-300 rounded-full" />
        </div>
      ) : (
        <div data-횟수="0회" className="w-5 h-[5px]" />
      )}
    </div>
  );
};

function getCalendarDates(month: number, year: number) {
  const dates: CalendarTileProps[][] = [];
  const dateDelta = new Date(year, month - 1, 1).getDay();
  const currentDate = new Date(year, month - 1, 1);
  currentDate.setDate(currentDate.getDate() - dateDelta);
  for (let i = 0; i < 6; i++) {
    const row: CalendarTileProps[] = [];
    for (let j=0; j<7; j++) {
      row.push(
        {
          selected: false,
          hasRecord: false,
          active: currentDate.getMonth()+1 === month,
          day: currentDate.getDate()
        }
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }
    dates.push(row);
  }
  return dates;
}

const GetDayHeader = ({ day, color }: { day: string; color: string }) => (
  <div
    data-상태="기본"
    className="w-14 h-[19px] p-2.5 bg-stone-800 inline-flex flex-col justify-center items-center gap-2"
  >
    <div
      className={
        "justify-start text-base font-normal font-['Inter']" + color
      }
    >
      {day}
    </div>
  </div>
);

export const Calendar = () => {
  return (
    <div className="px-5 py-7 bg-stone-800 rounded-[30px] outline outline-1 outline-stone-600 inline-flex flex-col justify-center items-center gap-6 h-fit">
      <div className="self-stretch inline-flex justify-center items-center gap-12">
        <div className="w-6 h-6">
          <img src={WhiteArrowBack} alt="Stopwatch" className="w-6 h-6" />
        </div>

        <div className="justify-start text-white text-2xl font-bold font-['Inter']">
          2025.05
        </div>
        <div className="w-6 h-6">
          <img src={WhiteArrowForward} alt="Stopwatch" className="w-6 h-6" />
        </div>
      </div>
      <div className="w-96 h-[1.50px] bg-zinc-600" />

      <table>
        <thead>
          <tr>
            <td>
              <GetDayHeader day="SUN" color={' text-red-400'} />
            </td>

            <td>
              <GetDayHeader day={'MON'} color={' text-white'} />
            </td>
            <td>
              <GetDayHeader day={'TUE'} color={' text-white'} />
            </td>
            <td>
              <GetDayHeader day={'WED'} color={' text-white'} />
            </td>
            <td>
              <GetDayHeader day={'THU'} color={' text-white'} />
            </td>
            <td>
              <GetDayHeader day={'FRI'} color={' text-white'} />
            </td>
            <td>
              <GetDayHeader day={'SAT'} color={' text-violet-400'} />
            </td>
          </tr>
        </thead>
        <tbody>
          {getCalendarDates(5, 2025).map((row, idx) => {
            return (
              <tr key={idx}>
                {row.map((it, idx2) => (
                  <td key={idx2}>
                    <CalendarTile
                      hasRecord={it.hasRecord}
                      selected={it.selected}
                      active={it.active}
                      day={it.day}
                    />
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
