import { useEffect } from 'react'
import useTimer from "../../context/timerContext"
import notify from '../../utils/notify'
import "./style.scss"

export default function TimerOutput(){
  const {
    seconds, 
    setSeconds,
    isPaused,
    setCurrentMinute,
    currentMinute,
    minute,
    setPercent
  } = useTimer()
  
  useEffect(() => {
    function timer(){
      if(isPaused) return
      if(currentMinute === 0 && seconds === 0)return
      if(seconds === 0){
        setSeconds(59)
        setCurrentMinute(currentMinute-1)
        return
      }
      setSeconds(seconds - 1)
    }

    const totalInSeconds = seconds + (currentMinute*60)
    setPercent(((totalInSeconds * 100) / (minute*60)))

    const interval = setInterval(timer, 1000)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    if(seconds === 0 & currentMinute === 0){
      notify('Tempo acabou', 'Hora do descando!')
    }
  }, [seconds, currentMinute])
  return (
    <div className="timer-output">
      {currentMinute.toString().length < 2 ? `0${currentMinute}` : currentMinute}
      :
      {seconds.toString().length < 2 ? `0${seconds}` : seconds}
    </div>
  )
}