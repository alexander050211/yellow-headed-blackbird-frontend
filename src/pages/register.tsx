import 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    function isValid(email: string, password: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      const isValidUsername = username.length >= 2;
      const isValidPassword = password.length >= 8;
      const check = password === passwordCheck;
      return isValidEmail && isValidPassword && isValidUsername && check;
    }

    if (!isValid(email, password)) {
      setErrorMsg(
        'Invalid input. Username must be at least 2 characters, password must be at least 8 characters, and passwords must match.',
      );
      return;
    } else {
      // Register logic (백엔드 준비되면 구현...)
      navigate('/login');
    }
  }

  return (
    <div className="p-4">
      <h1 className="title">Register</h1>
      <section className="mt-10 w-96 border-2 text-center px-12 py-8 space-y-4">
        <div className="flex justify-end items-center space-x-2">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="email">Username</label>
          <input
            className="textInput"
            type="username"
            id="username"
            placeholder="홍길동"
            onChange={(e) => {
              setUsername(e.currentTarget.value);
            }}
          />
        </div>
        <div className="flex justify-end items-center space-x-2">
          <label htmlFor="password">Password</label>
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

        <div className="flex justify-end items-center space-x-2">
          <label htmlFor="password">PW Check</label>
          <input
            className="textInput"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPasswordCheck(e.currentTarget.value);
            }}
          />
        </div>
        {errorMsg.length > 0 && <div className="errorMsg">{errorMsg}</div>}
        <button type="submit" onClick={handleSubmit} className="button">
          Register
        </button>
      </section>
    </div>
  );
}
