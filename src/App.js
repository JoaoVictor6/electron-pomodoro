import { useEffect, useState } from 'react';
import { MdPlayArrow as Play, MdPause as Pause } from 'react-icons/md'

import './App.scss';
import ProgressBar from './components/ProgressBar';
import TopBar from './components/TopBar';
import notify from './utils/notify';

function App() {
  const [ minute, setMinute ] = useState(2)
  const [ seconds, setSeconds ] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  useEffect(() => {
    function timer(){
      if(isPaused) return
      if(minute === 0 && seconds === 0)return
      if(seconds === 0){
        setSeconds(59)
        setMinute(minute-1)
        return
      }
      setSeconds(seconds - 1)
    }

    if(seconds === 0 & minute === 0){
      // Notify("Tempo acabou", "testestes")
      notify('Tempo acabou', 'Hora do descando!')
    }

    const interval = setInterval(timer, 1000)

    return () => clearInterval(interval)
  }, [seconds, minute, isPaused])

  useEffect(() => {
    if(seconds === 0 & minute === 0){
      notify('Tempo acabou', 'Hora do descando!')
    }
  }, [seconds, minute])

  const handlePauseEvent = () => {
    setIsPaused(!isPaused)
  }
  
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <div className="timer-output">
          {minute.toString().length < 2 ? `0${minute}` : minute}
          :
          {seconds.toString().length < 2 ? `0${seconds}` : seconds}
        </div>
        <button onClick={handlePauseEvent} className="timer-controller">
          {isPaused ? (
            <>Play <Play /></>
          ) : (
            <>Pause <Pause /></>
          )}
        </button>
      </header>
      <ProgressBar percentValue={100}/>
    </div>
  );
}

export default App;
