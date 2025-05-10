import 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    function isValid(email: string, password: string) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailRegex.test(email);
      const isValidPassword = password.length >= 8;
      return isValidEmail && isValidPassword;
    }

    if (!isValid(email, password)) {
      setErrorMsg('Invalid email or password');
      return;
    } else {
      // Login logic (백엔드 준비되면 구현...)
      navigate('/current');
    }
  }

  return (
    <div className="p-4">
      <h1 className="title">Login</h1>
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
        {errorMsg.length > 0 && <div className="errorMsg">{errorMsg}</div>}
        <button type="submit" onClick={handleSubmit} className="button">
          Login
        </button>
      </section>
    </div>
  );
}
