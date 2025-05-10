import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import OurButton from '../components/button.tsx';
import { Sidebar } from '../components/sidebar.tsx';
import { getUserInfo } from '../functions/getUserInfo';

export const Archive = () => {
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
        <div className="flex-1 bg-[#f5f5f5]">
          <div className="flex justify-center items-center h-full">
            <h1 className="text-2xl font-bold">Archive Page</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
