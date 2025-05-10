import { useState, useEffect } from 'react';
import { getDiaries } from '../functions/getDiaries';

export default function Credit() {
  const [isLoading, setIsLoading] = useState(true);
  const [diaryId, setDiaryId] = useState(0);
  const [diaryData, setDiaryData] = useState(null);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function getDiaryData() {
      const diaries = await getDiaries();
      console.log(diaries);

      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-black min-w-screen min-h-screen text-white space-y-8 p-8 text-center">
      <section className="space-y-4 mt-8">
        <h1>Ending Credit</h1>
        <h2>- 0000년 00월 00일 새벽의 밤샘 -</h2>
      </section>

      <section className="space-y-4 mt-8">
        <h2>- 집중한 시간 -</h2>
      </section>

      <section className="space-y-4 mt-8">
        <h2>- 통계 -</h2>
      </section>

      <section className="space-y-4 mt-8">
        <h2>- 타임라인인 -</h2>
      </section>

      <section className="space-y-4 mt-8">
        <h1>Ending Credit</h1>
        <h2>- 0000년 00월 00일 새벽의 밤샘 -</h2>
      </section>
    </div>
  );
}
