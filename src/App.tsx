import './reset.css';

import { useReducer } from 'react';

export const App = () => {
  const [count, increment] = useReducer((c: number) => c + 1, 0);

  return (
    <div className="p-10">
      <div className="text-red-500 font-bold text-lg">Hello World</div>
      <button onClick={increment}>{count}</button>
    </div>
  );
};
