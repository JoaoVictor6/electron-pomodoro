import { useEffect, useState } from 'react';
import './App.scss';
import { Pause } from './assets/icons/pause';
import Play from './assets/icons/play';
import FullscreenFAB from './components/FullscreenFAB';
import ProgressBar from './components/ProgressBar';
import notify from './utils/notify';

const tempoTotal = 120
function App() {
  const [ minute, setMinute ] = useState(2)
  const [ seconds, setSeconds ] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [percent, setPercent] = useState(0)
  
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

    const totalInSeconds = seconds + (minute*60)

    setPercent((totalInSeconds * 100 / tempoTotal))

    const interval = setInterval(timer, 1000)

    return () => clearInterval(interval)
  }, [seconds, minute, isPaused])

  const handlePauseEvent = () => {
    setIsPaused(!isPaused)
  }
  
  return (
    <div className="App">
      <FullscreenFAB />
      <header className="App-header">
        <div className="timer-output">
          {minute.toString().length < 2 ? `0${minute}` : minute}
          :
          {seconds.toString().length < 2 ? `0${seconds}` : seconds}
        </div>
        <button onClick={handlePauseEvent} className="timer-controller">
          {isPaused ? <Play /> : <Pause />}
        </button>
      </header>
      <ProgressBar percentValue={percent}/>
    </div>
  );
}

export default App;
