import { MdPlayArrow as Play, MdPause as Pause } from 'react-icons/md'
import './App.scss';
import ProgressBar from './components/ProgressBar';
import TimerOutput from './components/TimerOutput';
import TopBar from './components/TopBar';
import useTimer from './context/timerContext';

function App() {
  const {
    isPaused, 
    setIsPaused,
    percentTimer
  } = useTimer()

  const handlePauseEvent = () => {
    setIsPaused(!isPaused)
  }
  console.log(percentTimer)
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <TimerOutput />
        <button onClick={handlePauseEvent} className="timer-controller">
          {isPaused ? (
            <>Play <Play /></>
          ) : (
            <>Pause <Pause /></>
          )}
        </button>
      </header>
      <ProgressBar percentValue={percentTimer}/>
    </div>
  );
}

export default App;
