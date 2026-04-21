import { useState } from 'react'
import { affirmations } from './data'
import './App.css'

function App() {
  // 처음 보여줄 문구를 랜덤으로 선택
  const [motto, setMotto] = useState(
    affirmations[Math.floor(Math.random() * affirmations.length)]
  );

  const refreshMotto = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setMotto(affirmations[randomIndex]);
  };

  return (
    <div className="container">
      <h1>🌟 오늘의 긍정확언</h1>
      <div className="card">
        <p className="motto-text">"{motto}"</p>
      </div>
      <button onClick={refreshMotto}>새로운 확언 보기</button>
    </div>
  )
}

export default App
