import React from 'react'
import './App.css'
import useFetchChuck from './infrastructure/customHook'

function App() {
  const [state, fetchChuck] = useFetchChuck()
  return (
    <div className="container">
      <div className='box' />
      <button
        onClick={() => fetchChuck('')}
        >TEST</button>
    </div>
  );
}

export default App;
