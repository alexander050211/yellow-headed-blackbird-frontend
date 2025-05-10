import { useState, useEffect } from 'react';
import { getDiaries } from '../functions/getDiaries';
import { getUserInfo } from '../functions/getUserInfo';
import { Timeline } from '../components/timeline';

export default function Credit() {
  const [isLoading, setIsLoading] = useState(true);
  const [diaryId, setDiaryId] = useState(0);

  const [diaryData, setDiaryData] = useState({
    id: 0,
    title: '',
    description: '',
    focus_time: {},
    task_details: {},
  });
  const [userInfo, setUserInfo] = useState({
    username: '',
    nickname: '',
    loggedin: false,
  });

  useEffect(() => {
    interface IDiary {
      id: number;
    }
    async function getDiaryData() {
      try {
        const diaries = (await getDiaries()).sort(
          (a: IDiary, b: IDiary): number => b.id - a.id,
        );

        // 가장 최근의 Diary 데이터
        setDiaryData(diaries[0]);
        console.log(diaries[0]);
      } catch {}
      setIsLoading(false);
    }

    getUserInfo().then((data) => setUserInfo(data));
    getDiaryData();
  }, []);

  const EndingCreditPage = () => (
    <div className="md:w-1/2 mx-auto space-y-16">
      <section className="space-y-4">
        <h1 className="text-blue-200">Ending Credit</h1>
        <h2>- 0000년 00월 00일 새벽의 밤샘 -</h2>
        <div>부제: {diaryData.title}</div>
        <div className="italic">{diaryData.description}</div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">오늘밤 이룬 일들</h2>
        <div className="grid grid-cols-1 space-y-4">
          <div>asdf</div>
          <div>asdf</div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">카페인 섭취</h2>
        <div>총 00mg의 카페인을 섭취했어요.</div>
        <div className="text-gray-300 text-sm italic">
          성인 기준 하루 400mg, 임산부는 하루 300mg, 어린이는 체중 1kg당 2.5mg
          이하 섭취가 권장됩니다.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-blue-200">타임라인</h2>
        <Timeline />
      </section>

      <section className="space-y-4">
        <h2>{userInfo.nickname}님, 오늘도 수고했어요.</h2>
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
      ) : diaryData.id === 0 && userInfo.loggedin ? (
        <div>데이터가 없습니다.</div>
      ) : (
        <EndingCreditPage />
      )}
    </div>
  );
}
