import { useEffect, useState } from 'react';

import { CaffeineItem, TaskItem } from '../components/credComponents';
import { Timeline } from '../components/credTimeline';
import { getDiaries, getDiary } from '../functions/getDiaries';
import { getUserInfo } from '../functions/getUserInfo';
import { Link } from 'react-router-dom';

export const Credit = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [userInfo, setUserInfo] = useState({
    username: '',
    nickname: '',
    loggedin: false,
  });
  const [diaryData, setDiaryData] = useState({
    id: 0,
    title: '',
    description: '',
    created_time: '',
    due_time: '',
    ended_time: '',
    focus_time: {},
    task_details: [],
    caffeine_details: [],
  });
  const [totalCaff, setTotalCaff] = useState(0);

  useEffect(() => {
    interface IDiary {
      id: number;
    }
    async function getDiaryData() {
      try {
        const diaries = (await getDiaries()).sort(
          (a: IDiary, b: IDiary): number => b.id - a.id,
        );
        // 가장 최근의 Diary 데이터 요청
        const diaryId = diaries[0].id;
        const diary = await getDiary(diaryId);

        // 데이터 처리
        diary.task_details.sort((a: any, b: any) => a.order - b.order);
        let sum = 0;
        for (let i = 0; i < diary.caffeine_details.length; i++) {
          sum += diary.caffeine_details[i].amount;
        }
        setTotalCaff(sum);
        setDiaryData(diary);
        console.log(diary);
      } catch {}
      setIsLoading(false);
    }

    getUserInfo().then((data) => {
      setUserInfo(data);
    });
    getDiaryData();
  }, []);

  const EndingCreditPage = () => (
    <div className="md:w-1/2 mx-auto space-y-16">
      <section className="space-y-4">
        <h1 className="text-blue-200">Ending Credit</h1>
        <h2>- {diaryData.ended_time}2025년 5월 11일의 밤샘 -</h2>
        <div>부제: {diaryData.title}</div>
        <div className="italic">{diaryData.description}</div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">오늘밤 이룬 일들</h2>
        <div className="grid grid-cols-1 space-y-4">
          {diaryData.task_details?.map((data: any, key: number) => (
            <TaskItem key={key} taskData={data} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">카페인 섭취</h2>
        <div>총 {totalCaff}mg의 카페인을 섭취했어요.</div>
        <div className="grid grid-cols-1 space-y-4">
          {diaryData.caffeine_details?.map((data: any, key: number) => (
            <CaffeineItem key={key} caffData={data} />
          ))}
        </div>
        <div className="text-[#969696] text-sm italic">
          성인 기준 하루 400mg, 임산부는 하루 300mg, 어린이는 체중 1kg당 2.5mg
          이하 섭취가 권장됩니다.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">타임라인</h2>
        <Timeline />
      </section>

      <section className="space-y-8">
        <h2>{userInfo.nickname}님, 오늘도 수고했어요.</h2>
        <Link className="button" to="/">
          메인으로
        </Link>
      </section>
    </div>
  );

  return (
    <div
      className="min-w-screen min-h-screen text-white px-8 py-24 text-center
       bg-gradient-to-b from-black to-[#0F0909]"
    >
      {isLoading ? (
        <div>데이터 불러오는 중...</div>
      ) : diaryData.id === 0 || !userInfo.loggedin ? (
        <div>데이터가 없습니다.</div>
      ) : (
        <EndingCreditPage />
      )}
    </div>
  );
};

export default Credit;
