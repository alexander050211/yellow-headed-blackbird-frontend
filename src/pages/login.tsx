import 'react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Sidebar } from '../components/sidebar.tsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    function isValid(email: string, password: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      const isValidPassword = password.length >= 8;
      return isValidEmail && isValidPassword;
    }

    if (!isValid(email, password)) {
      setErrorMsg('잘못된 이메일 주소 또는 비밀번호 입력입니다.');
      return;
    } else {
      // Login logic (백엔드 준비되면 구현...)
      navigate('/current');
    }
  }

  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <body className="px-8 py-12 text-center">
        <h1>로그인</h1>
        <section className="w-96 text-center px-8 py-8 space-y-4">
          <div className="flex justify-end items-center space-x-2">
            <label htmlFor="email">이메일</label>
            <input
              className="textInput"
              type="email"
              id="email"
              placeholder="example@example.com"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>

          <div className="flex justify-end items-center space-x-2">
            <label htmlFor="password">비밀번호</label>
            <input
              className="textInput"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.currentTarget.value);
              }}
            />
          </div>
          {errorMsg.length > 0 && <div className="errorMsg">{errorMsg}</div>}
          <button onClick={handleLogin}>로그인</button>
          <div>
            <Link to={'/register'} className="buttonMinor">
              계정이 없나요? 회원가입하기
            </Link>
          </div>
        </section>
      </body>
    </div>
  );
}
